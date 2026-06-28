#!/usr/bin/env python3
"""
Tool: Import Local Sources
Purpose: Copy trusted files from Google Drive sync folder and project data/ into .tmp/imports/

Usage:
    python tools/import_local_sources.py
"""

import json
import os
import re
import shutil
from datetime import datetime, timezone
from pathlib import Path

import yaml
from dotenv import load_dotenv

from _paths import CONFIG_DIR, DATA_DIR, IMPORTS_DIR, PROJECT_ROOT

load_dotenv(PROJECT_ROOT / ".env")


def load_yaml(path: Path) -> dict:
    with open(path, encoding="utf-8") as f:
        return yaml.safe_load(f)


def resolve_source_path(source: dict) -> Path | None:
    if "env_var" in source:
        raw = os.getenv(source["env_var"], "").strip()
        return Path(raw) if raw else None
    if "path" in source:
        return PROJECT_ROOT / source["path"]
    return None


def safe_dest_name(source_id: str, src: Path) -> str:
    stem = re.sub(r"[^A-Za-z0-9._-]+", "_", src.stem).strip("_")
    suffix = src.suffix.lower()
    return f"{source_id}__{stem}{suffix}"


def copy_source_file(src: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    try:
        shutil.copy2(src, dest)
    except OSError:
        # exFAT volumes can fail on copystat; content copy still works
        shutil.copyfile(src, dest)


def collect_files(root: Path, patterns: list[str]) -> list[Path]:
    if not root.exists():
        return []
    files: list[Path] = []
    for pattern in patterns:
        files.extend(root.glob(pattern))
    return sorted({f.resolve() for f in files if f.is_file()})


def import_sources() -> dict:
    config = load_yaml(CONFIG_DIR / "local_sources.yaml")
    manifest = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "priority": config.get("priority", "trusted"),
        "files": [],
        "skipped": [],
    }

    for source in config.get("sources", []):
        root = resolve_source_path(source)
        source_id = source["id"]
        if root is None or not root.exists():
            manifest["skipped"].append(
                {
                    "source_id": source_id,
                    "reason": "path not configured or does not exist",
                    "expected": source.get("env_var") or source.get("path"),
                }
            )
            continue

        patterns = source.get("file_patterns", ["*"])
        for src in collect_files(root, patterns):
            dest_name = safe_dest_name(source_id, src)
            dest = IMPORTS_DIR / dest_name
            copy_source_file(src, dest)
            manifest["files"].append(
                {
                    "source_id": source_id,
                    "label": source.get("label", source_id),
                    "original_path": str(src),
                    "imported_path": str(dest.relative_to(PROJECT_ROOT)),
                    "size_bytes": dest.stat().st_size,
                    "priority": "trusted",
                }
            )

    out_path = IMPORTS_DIR / "local_import_manifest.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)

    print(f"Imported {len(manifest['files'])} file(s) → {IMPORTS_DIR}")
    if manifest["skipped"]:
        print(f"Skipped {len(manifest['skipped'])} source(s) — check DRIVE_SOURCE_DIR in .env")
    print(f"Manifest: {out_path}")
    return manifest


def main():
    manifest = import_sources()
    if not manifest["files"]:
        raise SystemExit(
            "No local files imported. Set DRIVE_SOURCE_DIR in .env or add files to data/."
        )


if __name__ == "__main__":
    main()
