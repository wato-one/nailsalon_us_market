#!/usr/bin/env python3
"""
Tool: Build Nail Salon Digital Plans in Google Sheets
Purpose: Write LK (Jul 2026) and Iris (Jul–Dec 2026) plans to separate workbooks.

Usage:
    python3 tools/build_nail_digital_plan_sheets.py --brand all
    python3 tools/build_nail_digital_plan_sheets.py --brand lk --dry-run
    python3 tools/build_nail_digital_plan_sheets.py --brand iris
"""

from __future__ import annotations

import argparse
import sys

from googleapiclient.discovery import build

from digital_plan_data.iris_h2_2026 import get_tab_specs as iris_tab_specs
from digital_plan_data.lk_july_2026 import get_tab_specs as lk_tab_specs
from digital_plan_sheets_common import get_credentials, load_sheet_ids, write_workbook


def main() -> None:
    parser = argparse.ArgumentParser(description="Build LK & Iris digital plans in Google Sheets")
    parser.add_argument(
        "--brand",
        choices=["lk", "iris", "all"],
        default="all",
        help="Which brand workbook to update",
    )
    parser.add_argument("--dry-run", action="store_true", help="Print tab list only")
    args = parser.parse_args()

    sheet_ids = load_sheet_ids()
    brands = []

    if args.brand in ("lk", "all"):
        brands.append(("LK Nail Salon", sheet_ids["lk"], lk_tab_specs()))
    if args.brand in ("iris", "all"):
        brands.append(("Iris Nail", sheet_ids["iris"], iris_tab_specs()))

    if args.dry_run:
        for label, sheet_id, specs in brands:
            write_workbook(None, sheet_id, label, specs, dry_run=True)
        print("\n(dry-run — no changes written)\n")
        return

    creds = get_credentials()
    service = build("sheets", "v4", credentials=creds)

    urls: list[str] = []
    for label, sheet_id, specs in brands:
        url = write_workbook(service, sheet_id, label, specs, dry_run=False)
        urls.append(url)

    print("\nAll workbooks updated:")
    for url in urls:
        print(f"  {url}")
    print()


if __name__ == "__main__":
    main()
