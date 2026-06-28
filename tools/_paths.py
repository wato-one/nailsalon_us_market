"""Shared paths for nail salon market research tools."""

from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
CONFIG_DIR = PROJECT_ROOT / "config"
TMP_DIR = PROJECT_ROOT / ".tmp"
IMPORTS_DIR = TMP_DIR / "imports"
SCRAPED_DIR = TMP_DIR / "scraped"
EXPORTS_DIR = TMP_DIR / "exports"
DATA_DIR = PROJECT_ROOT / "data"

for directory in (IMPORTS_DIR, SCRAPED_DIR, EXPORTS_DIR, DATA_DIR):
    directory.mkdir(parents=True, exist_ok=True)
