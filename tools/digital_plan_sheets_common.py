"""Shared Google Sheets helpers for nail salon digital plan builders."""

from __future__ import annotations

import os
import sys
from pathlib import Path
from typing import Callable

from dotenv import load_dotenv
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

from _paths import PROJECT_ROOT

TOKEN_FILE = PROJECT_ROOT / "token.json"
CREDENTIALS_FILE = PROJECT_ROOT / "credentials.json"
ENV_FILE = PROJECT_ROOT / ".env"

SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]

DEFAULT_IRIS_SHEET_ID = "1gwHjVvAOgNgSv4pJ5TeTLuaielH6Rc1TgAcAbbOQ5WU"
DEFAULT_LK_SHEET_ID = "1GFAaXlY1U2dioQexrx8LyjlEzdcF6Dk3cvaafHk8pBI"

TabSpec = tuple[str, Callable[[], list[list[str]]]]


def load_sheet_ids() -> dict[str, str]:
    load_dotenv(ENV_FILE)
    return {
        "iris": os.getenv("IRIS_NAIL_SHEET_ID", DEFAULT_IRIS_SHEET_ID),
        "lk": os.getenv("LK_NAIL_SHEET_ID", DEFAULT_LK_SHEET_ID),
    }


def get_credentials() -> Credentials:
    if not CREDENTIALS_FILE.exists():
        print(f"Missing {CREDENTIALS_FILE}. Run: python tools/setup_google_auth.py")
        sys.exit(1)

    creds = None
    if TOKEN_FILE.exists():
        creds = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
            TOKEN_FILE.write_text(creds.to_json(), encoding="utf-8")
        else:
            print("Token missing or invalid. Run: python tools/setup_google_auth.py")
            sys.exit(1)

    return creds


def section_title(title: str) -> list[list[str]]:
    return [[title], [""]]


def append_section(rows: list[list[str]], title: str) -> None:
    rows.append([""])
    rows.extend(section_title(title))


def replace_workbook_tabs(service, spreadsheet_id: str, tab_titles: list[str]) -> dict[str, int]:
    """Replace all tabs: add new sheets first, then remove old ones."""
    meta = service.spreadsheets().get(spreadsheetId=spreadsheet_id).execute()
    existing_sheets = meta.get("sheets", [])
    existing_titles = {s["properties"]["title"] for s in existing_sheets}
    existing_ids = {s["properties"]["title"]: s["properties"]["sheetId"] for s in existing_sheets}

    requests: list[dict] = []

    # Add missing tabs before deleting anything (workbook must keep ≥1 sheet)
    for index, title in enumerate(tab_titles):
        if title not in existing_titles:
            requests.append({
                "addSheet": {
                    "properties": {
                        "title": title,
                        "index": index,
                    }
                }
            })

    if requests:
        result = service.spreadsheets().batchUpdate(
            spreadsheetId=spreadsheet_id,
            body={"requests": requests},
        ).execute()
        for reply in result.get("replies", []):
            if "addSheet" in reply:
                props = reply["addSheet"]["properties"]
                existing_ids[props["title"]] = props["sheetId"]

    # Refresh if we added sheets
    if requests:
        meta = service.spreadsheets().get(spreadsheetId=spreadsheet_id).execute()
        existing_ids = {
            s["properties"]["title"]: s["properties"]["sheetId"]
            for s in meta.get("sheets", [])
        }

    delete_requests: list[dict] = []
    for title, sheet_id in existing_ids.items():
        if title not in tab_titles:
            delete_requests.append({"deleteSheet": {"sheetId": sheet_id}})

    if delete_requests:
        service.spreadsheets().batchUpdate(
            spreadsheetId=spreadsheet_id,
            body={"requests": delete_requests},
        ).execute()

    # Re-order: delete extras may leave wrong order; fetch final IDs
    meta = service.spreadsheets().get(spreadsheetId=spreadsheet_id).execute()
    final_ids = {
        s["properties"]["title"]: s["properties"]["sheetId"]
        for s in meta.get("sheets", [])
    }

    return {title: final_ids[title] for title in tab_titles if title in final_ids}


def write_tab(service, spreadsheet_id: str, title: str, rows: list[list[str]]) -> None:
    max_cols = max(len(r) for r in rows) if rows else 1
    padded = [r + [""] * (max_cols - len(r)) for r in rows]
    service.spreadsheets().values().clear(
        spreadsheetId=spreadsheet_id,
        range=f"'{title}'!A:Z",
    ).execute()
    service.spreadsheets().values().update(
        spreadsheetId=spreadsheet_id,
        range=f"'{title}'!A1",
        valueInputOption="RAW",
        body={"values": padded},
    ).execute()


def apply_formatting(service, spreadsheet_id: str, sheet_ids: dict[str, int]) -> None:
    header_color = {"red": 0.15, "green": 0.35, "blue": 0.55}
    requests: list[dict] = []

    for title, sheet_id in sheet_ids.items():
        requests.append({
            "updateSheetProperties": {
                "properties": {"sheetId": sheet_id, "gridProperties": {"frozenRowCount": 1}},
                "fields": "gridProperties.frozenRowCount",
            }
        })
        requests.append({
            "repeatCell": {
                "range": {"sheetId": sheet_id, "startRowIndex": 0, "endRowIndex": 1},
                "cell": {
                    "userEnteredFormat": {
                        "textFormat": {"bold": True, "fontSize": 12},
                        "backgroundColor": header_color,
                    }
                },
                "fields": "userEnteredFormat(textFormat,backgroundColor)",
            }
        })

    if requests:
        service.spreadsheets().batchUpdate(
            spreadsheetId=spreadsheet_id,
            body={"requests": requests},
        ).execute()


def write_workbook(
    service,
    spreadsheet_id: str,
    brand_label: str,
    specs: list[TabSpec],
    dry_run: bool = False,
) -> str:
    tab_titles = [title for title, _ in specs]
    url = f"https://docs.google.com/spreadsheets/d/{spreadsheet_id}/edit"

    print(f"\n{brand_label}")
    print(f"  Spreadsheet ID: {spreadsheet_id}")
    print(f"  Tabs: {len(tab_titles)}")
    for title in tab_titles:
        print(f"    - {title}")

    if dry_run:
        return url

    sheet_ids = replace_workbook_tabs(service, spreadsheet_id, tab_titles)

    for title, builder in specs:
        rows = builder()
        print(f"  Writing: {title} ({len(rows)} rows)...")
        write_tab(service, spreadsheet_id, title, rows)

    apply_formatting(service, spreadsheet_id, sheet_ids)
    print(f"  Done: {url}")
    return url
