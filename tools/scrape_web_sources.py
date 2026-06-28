#!/usr/bin/env python3
"""
Tool: Scrape Web Sources
Purpose: Fetch supplementary market research pages via Firecrawl API

Usage:
    python tools/scrape_web_sources.py
    python tools/scrape_web_sources.py --limit 3
"""

import argparse
import json
import os
import re
import time
from datetime import datetime, timezone
from pathlib import Path

import requests
import yaml
from dotenv import load_dotenv

from _paths import CONFIG_DIR, PROJECT_ROOT, SCRAPED_DIR

load_dotenv(PROJECT_ROOT / ".env")

FIRECRAWL_API = "https://api.firecrawl.dev/v1/scrape"


def slugify(value: str) -> str:
    value = value.lower().strip()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")[:80] or "source"


def load_web_sources() -> list[dict]:
    with open(CONFIG_DIR / "web_sources.yaml", encoding="utf-8") as f:
        config = yaml.safe_load(f)

    sources = []
    for category, items in config.get("categories", {}).items():
        for item in items:
            sources.append({**item, "category": category})
    return sources


def scrape_url(api_key: str, url: str) -> dict:
    response = requests.post(
        FIRECRAWL_API,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        json={"url": url, "formats": ["markdown"]},
        timeout=120,
    )
    response.raise_for_status()
    payload = response.json()
    data = payload.get("data") or {}
    return {
        "markdown": data.get("markdown", ""),
        "metadata": data.get("metadata", {}),
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=0, help="Max sources to scrape (0 = all)")
    args = parser.parse_args()

    api_key = os.getenv("FIRECRAWL_API_KEY", "").strip()
    if not api_key or api_key.startswith("your_"):
        raise SystemExit(
            "FIRECRAWL_API_KEY not set in .env. Add your key or skip this step."
        )

    sources = load_web_sources()
    if args.limit > 0:
        sources = sources[: args.limit]

    manifest = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "priority": "supplementary",
        "scraped": [],
        "failed": [],
    }

    for source in sources:
        source_id = source["id"]
        url = source["url"]
        out_md = SCRAPED_DIR / f"{source_id}.md"
        out_meta = SCRAPED_DIR / f"{source_id}.json"

        try:
            print(f"Scraping {source_id}: {url}")
            result = scrape_url(api_key, url)
            header = (
                f"# {source.get('title', source_id)}\n\n"
                f"- **Source:** {source.get('label', '')}\n"
                f"- **URL:** {url}\n"
                f"- **Category:** {source.get('category', '')}\n"
                f"- **Tier:** {source.get('tier', 'secondary')}\n"
                f"- **Scraped:** {manifest['generated_at']}\n\n---\n\n"
            )
            out_md.write_text(header + (result["markdown"] or ""), encoding="utf-8")
            meta = {
                "id": source_id,
                "url": url,
                "title": source.get("title"),
                "label": source.get("label"),
                "category": source.get("category"),
                "tier": source.get("tier"),
                "scraped_at": manifest["generated_at"],
                "page_metadata": result["metadata"],
                "markdown_path": str(out_md.relative_to(PROJECT_ROOT)),
            }
            out_meta.write_text(json.dumps(meta, indent=2), encoding="utf-8")
            manifest["scraped"].append(meta)
            time.sleep(1)
        except Exception as exc:
            manifest["failed"].append({"id": source_id, "url": url, "error": str(exc)})
            print(f"  Failed: {exc}")

    manifest_path = SCRAPED_DIR / "web_scrape_manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(f"\nScraped {len(manifest['scraped'])} source(s), {len(manifest['failed'])} failed")
    print(f"Manifest: {manifest_path}")


if __name__ == "__main__":
    main()
