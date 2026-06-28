# Nail Salon Market Research

WAT-based workspace for US nail salon / beauty market research, consulting deliverables, and automation.

**Repository:** [github.com/wato-one/nailsalon_us_market](https://github.com/wato-one/nailsalon_us_market)

## Architecture

| Layer | Location | Purpose |
|-------|----------|---------|
| Workflows | `workflows/` | Markdown SOPs — what to do and how |
| Agents | (AI in Cursor) | Reads workflows, runs tools, handles failures |
| Tools | `tools/` | Python scripts for deterministic execution |
| Config | `config/` | Trusted local paths + web source URLs |

See `CLAUDE.md` for full agent instructions.

## Quick Start

```bash
cd "/Volumes/MI 02 (SSD)/CN Personal Projects/99.Nail Salon Market"
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env — DRIVE_SOURCE_DIR, FIRECRAWL_API_KEY
python tools/setup_google_auth.py          # one-time Google OAuth
python run_research.py                     # full research pipeline
```

## Workflows

| # | Workflow | Purpose |
|---|----------|---------|
| 00 | `workflows/00_setup_authentication.md` | Google OAuth for Sheets, Slides, Drive |
| 01 | `workflows/01_market_research_synthesis.md` | Combine trusted local + web research |

## Interactive Report (Vietnamese)

Single-page Next.js industry report in `report/` — PESTEL, Porter, competitors, consumer, journey, strategy.

```bash
cd report
npm install
npm run dev          # http://localhost:3000
npm run build
```

**Vercel:** Single project `nailsalon-us-market-report` with Root Directory = `report`. Deploys via GitHub Actions on push to `main` — do not run `vercel link` inside `report/` (causes duplicate path).

**Local manual deploy (optional):** from repo root, not `report/`:
```bash
vercel link   # once, creates .vercel at repo root
vercel deploy --prod
```

**Private access (Hobby plan):** Standard Protection is enabled for preview/deployment URLs. Production alias `*.vercel.app` may remain public on Hobby — use deployment Share to invite viewers, or upgrade to Pro to lock production domains.

## Directory Layout

```
99.Nail Salon Market/
├── CLAUDE.md
├── README.md
├── report/                 # Next.js interactive report (Vietnamese, Wato branding)
├── run_research.py         # Run full pipeline
├── config/
│   ├── local_sources.yaml  # Trusted: Drive + data/
│   └── web_sources.yaml    # Supplementary web URLs
├── data/                   # Curated reference files (trusted)
├── workflows/
├── tools/
└── .tmp/                   # Disposable (gitignored)
    ├── imports/            # Copied from Drive + data/
    ├── scraped/            # Firecrawl outputs
    └── exports/            # Parsed data + research manifest
```

## Source Priority

1. **Trusted** — Google Drive research folder + project `data/`
2. **Supplementary** — Web scrapes (GMI, BLS, Boulevard, industry sites)

Local sources override web on conflict. See workflow 01 for details.

## Data Flow

```
Drive + data/  →  import  →  .tmp/imports/
                                ↓
                         parse Statista
                                ↓
Web URLs  →  Firecrawl  →  .tmp/scraped/
                                ↓
                         build manifest  →  .tmp/exports/
                                                ↓
                              Sheets / Slides / Drive
```

## Related Projects

- `07.lknailsalon/` — Client-specific site and research (may merge assets later)
