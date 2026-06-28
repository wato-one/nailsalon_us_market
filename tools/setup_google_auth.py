#!/usr/bin/env python3
"""
Tool: Google Authentication Setup
Purpose: Configure Google OAuth for Sheets, Slides, and Drive deliverables

Usage:
    python tools/setup_google_auth.py
"""

import sys
from pathlib import Path

from dotenv import load_dotenv
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

PROJECT_ROOT = Path(__file__).resolve().parent.parent
TOKEN_FILE = PROJECT_ROOT / "token.json"
CREDENTIALS_FILE = PROJECT_ROOT / "credentials.json"
ENV_FILE = PROJECT_ROOT / ".env"

load_dotenv(PROJECT_ROOT / ".env")

SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/presentations",
    "https://www.googleapis.com/auth/drive.file",
]


def print_setup_instructions():
    print("\n" + "=" * 72)
    print("GOOGLE OAUTH SETUP — Nail Salon US Market Research")
    print("=" * 72 + "\n")
    print("1. Open Google Cloud Console:")
    print("   https://console.cloud.google.com/\n")
    print("2. Create or select a project:")
    print("   Suggested name: nailsalon-us-market\n")
    print("3. Enable APIs (APIs & Services → Library):")
    print("   • Google Sheets API")
    print("   • Google Slides API")
    print("   • Google Drive API\n")
    print("4. Configure OAuth consent screen (APIs & Services → OAuth consent screen):")
    print("   • User type: External")
    print("   • App name: Nail Salon US Market Research")
    print("   • Support email: your email")
    print("   • Add your Google account under Test users")
    print("   • Publishing status can stay in Testing for personal use\n")
    print("5. Create OAuth client (APIs & Services → Credentials):")
    print("   • + CREATE CREDENTIALS → OAuth client ID")
    print("   • Application type: Desktop app")
    print("   • Name: Nail Salon Market Desktop Client")
    print("   • Download JSON → rename to credentials.json")
    print(f"   • Place in: {PROJECT_ROOT}/\n")
    print("6. Run this script again to authorize in your browser.\n")
    print("=" * 72 + "\n")


def check_credentials_file() -> bool:
    if not CREDENTIALS_FILE.exists():
        print(f"❌ credentials.json not found at: {CREDENTIALS_FILE}")
        return False
    print("✅ Found credentials.json")
    return True


def authenticate() -> Credentials:
    creds = None
    if TOKEN_FILE.exists():
        creds = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            print("Refreshing expired token...")
            creds.refresh(Request())
        else:
            print("\nOpening browser for OAuth authorization...\n")
            flow = InstalledAppFlow.from_client_secrets_file(str(CREDENTIALS_FILE), SCOPES)
            creds = flow.run_local_server(port=0)

        TOKEN_FILE.write_text(creds.to_json(), encoding="utf-8")
        print(f"✅ Token saved to {TOKEN_FILE}")
    else:
        print("✅ Existing token is valid")

    return creds


def test_apis(creds: Credentials) -> bool:
    print("\nTesting API access...\n")
    ok = 0

    for name, service, version in [
        ("Google Sheets API", "sheets", "v4"),
        ("Google Slides API", "slides", "v1"),
        ("Google Drive API", "drive", "v3"),
    ]:
        try:
            build(service, version, credentials=creds)
            print(f"✅ {name}: connected")
            ok += 1
        except Exception as exc:
            print(f"❌ {name}: {exc}")

    print(f"\nResult: {ok}/3 APIs ready\n")
    return ok == 3


def main():
    print("\n🚀 Google OAuth Setup — Nail Salon US Market\n")
    print_setup_instructions()

    if not check_credentials_file():
        print("Complete steps 1–5 above, then run this script again.")
        sys.exit(1)

    try:
        creds = authenticate()
    except Exception as exc:
        print(f"\n❌ Authentication failed: {exc}")
        sys.exit(1)

    if test_apis(creds):
        print("🎉 SUCCESS! Ready to publish to Sheets, Slides, and Drive.")
    else:
        print("⚠️  Some APIs failed. Confirm they are enabled in Google Cloud Console.")


if __name__ == "__main__":
    main()
