#!/usr/bin/env python3
"""
Run the full market research synthesis pipeline.

Usage:
    python run_research.py
    python run_research.py --skip-scrape
"""

import argparse
import subprocess
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent
TOOLS = PROJECT_ROOT / "tools"


def run_step(script: str) -> None:
    cmd = [sys.executable, str(TOOLS / script)]
    print(f"\n>>> {' '.join(cmd)}\n")
    subprocess.run(cmd, check=True, cwd=PROJECT_ROOT)


def main():
    parser = argparse.ArgumentParser(description="Nail salon US market research pipeline")
    parser.add_argument("--skip-scrape", action="store_true", help="Skip Firecrawl web scraping")
    args = parser.parse_args()

    steps = [
        "import_local_sources.py",
        "parse_statista_export.py",
    ]
    if not args.skip_scrape:
        steps.append("scrape_web_sources.py")
    steps.append("build_research_manifest.py")

    for step in steps:
        try:
            run_step(step)
        except subprocess.CalledProcessError as exc:
            if step == "scrape_web_sources.py":
                print("\n⚠️  Web scrape failed (check FIRECRAWL_API_KEY). Continuing...\n")
                run_step("build_research_manifest.py")
                break
            raise SystemExit(exc.returncode) from exc

    print("\n✅ Pipeline complete. See .tmp/exports/research_manifest.json")


if __name__ == "__main__":
    main()
