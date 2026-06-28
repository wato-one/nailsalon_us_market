#!/usr/bin/env python3
"""
Tool: Parse Statista Export
Purpose: Convert Statista semicolon-delimited CSV exports into structured JSON

Usage:
    python tools/parse_statista_export.py
    python tools/parse_statista_export.py path/to/export.csv
"""

import csv
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

from _paths import EXPORTS_DIR, IMPORTS_DIR, PROJECT_ROOT


def is_statista_export(path: Path) -> bool:
    try:
        raw = path.read_bytes()[:4096]
    except OSError:
        return False
    for encoding in ("utf-8-sig", "utf-8", "latin-1"):
        try:
            sample = raw.decode(encoding)
            break
        except UnicodeDecodeError:
            sample = ""
    markers = ('"Sep=;"', "Nail product user", "Statista", "Beauty & Cosmetics")
    return any(marker in sample for marker in markers)


def find_statista_exports() -> list[Path]:
    candidates = list(IMPORTS_DIR.glob("drive-research-folder__export*.csv"))
    candidates += list(IMPORTS_DIR.glob("*export*.csv"))
    unique = sorted({p.resolve() for p in candidates if p.is_file()})
    return [p for p in unique if is_statista_export(p)]


def parse_sections(rows: list[list[str]]) -> list[dict]:
    sections = []
    current = None

    for row in rows:
        joined = ";".join(row).strip()
        if not joined:
            continue

        # Section header rows are short and don't start with a metric name pattern
        if len(row) == 1 or (len(row) <= 3 and row[0] and row[0] not in ("Base", "Nail polish user", "Non-user")):
            title = row[0].strip()
            if title and not title.startswith("Question:") and ";" not in title[:20]:
                if current and current.get("rows"):
                    sections.append(current)
                current = {"title": title, "rows": []}
            continue

        if row[0] in ("Base",) or row[0].startswith("Nail ") or row[0] in ("Non-user", "Not applicable"):
            if current is None:
                current = {"title": "Unknown section", "rows": []}
            metric = row[0].strip()
            # First percent column is usually index 3 (Total segment)
            percent = row[3].strip() if len(row) > 3 else ""
            count = row[1].strip() if len(row) > 1 else ""
            current["rows"].append(
                {"metric": metric, "count": count, "percent": percent}
            )

    if current and current.get("rows"):
        sections.append(current)

    return sections


def parse_metadata(rows: list[list[str]]) -> dict:
    meta_lines = []
    for row in rows[:12]:
        text = ";".join(row).strip()
        if text:
            meta_lines.append(text)

    title = meta_lines[1] if len(meta_lines) > 1 else "Statista export"
    survey = ""
    for line in meta_lines:
        if "Nail product" in line or "Beauty" in line:
            survey = line.split(";")[0]
            break

    return {
        "title": title,
        "survey": survey,
        "raw_header_lines": meta_lines[:8],
    }


def read_csv_rows(path: Path) -> list[list[str]]:
    raw = path.read_bytes()
    for encoding in ("utf-8-sig", "utf-8", "latin-1"):
        try:
            text = raw.decode(encoding)
            break
        except UnicodeDecodeError:
            text = None
    if text is None:
        text = raw.decode("utf-8", errors="replace")

    import io

    reader = csv.reader(io.StringIO(text), delimiter=";")
    return [row for row in reader]


def parse_file(path: Path) -> dict:
    rows = read_csv_rows(path)

    metadata = parse_metadata(rows)
    sections = parse_sections(rows)

    return {
        "source_file": str(path.name),
        "parsed_at": datetime.now(timezone.utc).isoformat(),
        "metadata": metadata,
        "section_count": len(sections),
        "sections": sections,
    }


def main():
    if len(sys.argv) > 1:
        paths = [Path(sys.argv[1]).resolve()]
    else:
        paths = find_statista_exports()

    if not paths:
        raise SystemExit(
            "No Statista CSV found. Run import_local_sources.py first or pass a file path."
        )

    results = []
    for path in paths:
        parsed = parse_file(path)
        out_name = path.stem + "_parsed.json"
        out_path = EXPORTS_DIR / out_name
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(parsed, f, indent=2)
        results.append({"input": str(path), "output": str(out_path.relative_to(PROJECT_ROOT))})
        print(f"Parsed {path.name} → {out_path}")

    summary_path = EXPORTS_DIR / "statista_parse_summary.json"
    with open(summary_path, "w", encoding="utf-8") as f:
        json.dump({"files": results}, f, indent=2)


if __name__ == "__main__":
    main()
