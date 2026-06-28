# Workflow: Market Research Synthesis

## Objective
Combine **trusted local research** (Google Drive + project `data/`) with **supplementary web sources** into a single research manifest ready for Sheets, Slides, and Drive deliverables.

## Source Priority (conflict policy)

| Priority | Source | Use for |
|----------|--------|---------|
| **1 — Trusted** | Google Drive `Nail Salon Research` folder | Statista exports, purchased reports, curated data |
| **1 — Trusted** | Project `data/` folder | Files you add directly to the repo |
| **2 — Supplementary** | Web scrapes (`config/web_sources.yaml`) | Market sizing, trends, BLS labor data, industry stats |

When numbers conflict, **trusted local sources win**. Note discrepancies in deliverables.

---

## Required Inputs

### Local (trusted)
- Statista CSV exports in Google Drive (synced locally via `DRIVE_SOURCE_DIR`)
- Optional files in `data/`

### Environment
- `.env` with `DRIVE_SOURCE_DIR` and `FIRECRAWL_API_KEY`
- Google OAuth (`credentials.json` + `token.json`) — see `00_setup_authentication.md`

### Config
- `config/local_sources.yaml` — trusted source paths
- `config/web_sources.yaml` — URLs to scrape

---

## Tools Used

| Tool | Purpose |
|------|---------|
| `tools/import_local_sources.py` | Copy Drive + `data/` files → `.tmp/imports/` |
| `tools/parse_statista_export.py` | Parse Statista CSV → structured JSON |
| `tools/scrape_web_sources.py` | Scrape web sources via Firecrawl |
| `tools/build_research_manifest.py` | Merge all sources into master index |
| `run_research.py` | Run full pipeline |

---

## Research Scope

### Tier 1 — Trusted local
- **Statista** — US nail product user demographics (gender, age, region, ethnicity)
- **Google Drive folder** — any additional exports you add over time
- **Project `data/`** — curated reference files

### Tier 2 — Supplementary web (chosen for this project)
- **[GMI Insights](https://www.gminsights.com/industry-analysis/nail-salon-market)** — global/US market size, CAGR, independent salon share
- **[Boulevard](https://www.joinblvd.com/blog/salon-trends-industry-statistics)** — US salon count, hair+nail combined market
- **[BLS Cosmetologists](https://www.bls.gov/ooh/personal-care-and-service/barbers-hairstylists-and-cosmetologists.htm)** — employment outlook, wages
- **[BLS Manicurists](https://www.bls.gov/ooh/personal-care-and-service/manicurists-and-pedicurists.htm)** — nail-specific labor data
- **[BrightLocal](https://www.brightlocal.com/research/local-consumer-review-survey-2024/)** — review/Local SEO behavior
- **[Salon Today](https://www.salontoday.com/)** — retention and booking trends
- **[NAILS Magazine](https://www.nailsmag.com/)** — industry news
- **[Professional Beauty Association](https://www.probeauty.org/)** — trade association resources

Edit `config/web_sources.yaml` to add or remove URLs.

---

## Steps

### 0. One-time setup
```bash
cd "/Volumes/MI 02 (SSD)/CN Personal Projects/99.Nail Salon Market"
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env — set DRIVE_SOURCE_DIR and FIRECRAWL_API_KEY
python tools/setup_google_auth.py   # see workflows/00_setup_authentication.md
```

### 1. Import trusted local sources
```bash
python tools/import_local_sources.py
```
**Output:** `.tmp/imports/` + `local_import_manifest.json`

Copies CSV/PDF/XLSX from:
- Google Drive sync folder (`DRIVE_SOURCE_DIR`)
- Project `data/` folder

### 2. Parse Statista exports
```bash
python tools/parse_statista_export.py
```
**Output:** `.tmp/exports/*_parsed.json`

Extracts survey sections and key metrics (e.g. nail polish users 67%, demographics breakdown).

### 3. Scrape supplementary web sources
```bash
python tools/scrape_web_sources.py
# Or limit for testing:
python tools/scrape_web_sources.py --limit 3
```
**Output:** `.tmp/scraped/*.md` + `web_scrape_manifest.json`

Requires `FIRECRAWL_API_KEY` in `.env`. Skip with `--skip-scrape` on `run_research.py` if not configured.

### 4. Build combined manifest
```bash
python tools/build_research_manifest.py
```
**Output:**
- `.tmp/exports/research_manifest.json` — master index
- `.tmp/exports/research_manifest.csv` — import to Google Sheets

### 5. Run full pipeline (recommended)
```bash
python run_research.py
# Without web scraping:
python run_research.py --skip-scrape
```

### 6. Publish deliverables (manual for now)
1. Upload `research_manifest.csv` to a new Google Sheet
2. Use parsed Statista JSON + scraped markdown as source material for Slides
3. Store final PDFs/reports in Google Drive `Nail Salon Research` folder

Future tools can automate Sheets/Slides creation once OAuth is configured.

---

## Expected Outputs

| File | Description |
|------|-------------|
| `.tmp/imports/local_import_manifest.json` | Index of trusted imported files |
| `.tmp/exports/*_parsed.json` | Structured Statista data |
| `.tmp/scraped/*.md` | Web source content |
| `.tmp/exports/research_manifest.json` | Combined research index |
| `.tmp/exports/research_manifest.csv` | Sheet-ready summary |

---

## Edge Cases

- **Drive folder not synced:** Set `DRIVE_SOURCE_DIR` in `.env` or copy CSVs to `data/`
- **Firecrawl rate limit:** Run `scrape_web_sources.py --limit 3` in batches; wait between runs
- **Statista CSV format changes:** Update `parse_statista_export.py` and note change here
- **Conflicting market size figures:** Prefer Statista for consumer data; GMI/Boulevard for industry TAM — cite both with dates
- **Web scrape blocked:** Some sites block bots; add alternative URL or manual PDF to `data/`

## Notes
- Repository: https://github.com/wato-one/nailsalon_us_market
- Related client project: `07.lknailsalon/` (may merge assets later)
