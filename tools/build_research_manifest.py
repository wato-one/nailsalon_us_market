#!/usr/bin/env python3
"""
Tool: Build Research Manifest
Purpose: Combine trusted local sources and supplementary web scrapes into one index

Usage:
    python tools/build_research_manifest.py
"""

import json
from datetime import datetime, timezone
from pathlib import Path

from _paths import EXPORTS_DIR, IMPORTS_DIR, PROJECT_ROOT, SCRAPED_DIR


def load_json(path: Path) -> dict | list | None:
    if path.exists():
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    return None


def main():
    local_manifest = load_json(IMPORTS_DIR / "local_import_manifest.json") or {"files": []}
    web_manifest = load_json(SCRAPED_DIR / "web_scrape_manifest.json") or {"scraped": []}
    statista_summary = load_json(EXPORTS_DIR / "statista_parse_summary.json") or {"files": []}

    entries = []

    for item in local_manifest.get("files", []):
        entries.append(
            {
                "id": f"local-{item['source_id']}-{Path(item['imported_path']).stem}",
                "priority": "trusted",
                "type": "local",
                "label": item.get("label"),
                "path": item.get("imported_path"),
                "original_path": item.get("original_path"),
            }
        )

    for item in web_manifest.get("scraped", []):
        entries.append(
            {
                "id": f"web-{item['id']}",
                "priority": "supplementary",
                "type": "web_scrape",
                "label": item.get("label"),
                "title": item.get("title"),
                "url": item.get("url"),
                "category": item.get("category"),
                "tier": item.get("tier"),
                "path": item.get("markdown_path"),
            }
        )

    manifest = {
        "project": "nailsalon_us_market",
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "principle": "Trusted local/Drive sources override supplementary web scrapes on conflict",
        "counts": {
            "trusted_local": len(local_manifest.get("files", [])),
            "supplementary_web": len(web_manifest.get("scraped", [])),
            "statista_parsed": len(statista_summary.get("files", [])),
            "total_entries": len(entries),
        },
        "statista_outputs": statista_summary.get("files", []),
        "entries": entries,
        "conflict_policy": [
            "Use Statista/Drive data for consumer demographics and survey metrics",
            "Use web sources for market sizing narratives, trends, and labor stats",
            "When numbers conflict, prefer trusted local source and note the discrepancy",
        ],
    }

    json_path = EXPORTS_DIR / "research_manifest.json"
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)

    # Lightweight CSV for Sheets import
    csv_path = EXPORTS_DIR / "research_manifest.csv"
    lines = ["id,priority,type,label,title,url,path"]
    for e in entries:
        lines.append(
            ",".join(
                [
                    e.get("id", ""),
                    e.get("priority", ""),
                    e.get("type", ""),
                    _csv(e.get("label", "")),
                    _csv(e.get("title", "")),
                    _csv(e.get("url", "")),
                    _csv(e.get("path", "")),
                ]
            )
        )
    csv_path.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(f"Research manifest: {json_path}")
    print(f"CSV export: {csv_path}")
    print(
        f"Trusted: {manifest['counts']['trusted_local']} | "
        f"Web: {manifest['counts']['supplementary_web']} | "
        f"Statista parsed: {manifest['counts']['statista_parsed']}"
    )


def _csv(value: str) -> str:
    value = str(value).replace('"', '""')
    return f'"{value}"'


if __name__ == "__main__":
    main()
