# Workflow: Setup Google OAuth

## Objective
Configure Google Cloud OAuth so tools can publish deliverables to **Google Sheets**, **Google Slides**, and **Google Drive**.

## Prerequisites
- Google account
- Access to [Google Cloud Console](https://console.cloud.google.com/)

## Tools Used
- `tools/setup_google_auth.py`

## Required Inputs
- Google Cloud project (create new or reuse existing)
- OAuth Desktop client credentials (`credentials.json`)

## Expected Outputs
- `credentials.json` — OAuth client (gitignored)
- `token.json` — authorized user token (gitignored, auto-generated)

---

## Step-by-Step: Create Google OAuth

### 1. Create a Google Cloud project
1. Go to https://console.cloud.google.com/
2. Click the project dropdown → **New Project**
3. Name: `nailsalon-us-market` (or similar)
4. Click **Create** and select the new project

### 2. Enable APIs
1. Go to **APIs & Services** → **Library**
2. Search and **Enable** each:
   - **Google Sheets API**
   - **Google Slides API**
   - **Google Drive API**

### 3. Configure OAuth consent screen
1. Go to **APIs & Services** → **OAuth consent screen**
2. User type: **External** → Create
3. Fill in:
   - App name: `Nail Salon US Market Research`
   - User support email: your email
   - Developer contact: your email
4. Scopes: skip for now (the app requests scopes at runtime)
5. **Test users**: add your Google email
6. Save — app can stay in **Testing** mode for personal use

### 4. Create OAuth client credentials
1. Go to **APIs & Services** → **Credentials**
2. **+ CREATE CREDENTIALS** → **OAuth client ID**
3. Application type: **Desktop app**
4. Name: `Nail Salon Market Desktop Client`
5. Click **Create** → **Download JSON**
6. Rename the file to `credentials.json`
7. Move it to the project root:
   ```
   /Volumes/MI 02 (SSD)/CN Personal Projects/99.Nail Salon Market/credentials.json
   ```

### 5. Run the setup tool
```bash
cd "/Volumes/MI 02 (SSD)/CN Personal Projects/99.Nail Salon Market"
source .venv/bin/activate   # if using venv
python tools/setup_google_auth.py
```

Your browser opens. Sign in, review permissions, click **Allow**.

### 6. Verify
Expected output:
```
✅ Found credentials.json
✅ Token saved to token.json
✅ Google Sheets API: connected
✅ Google Slides API: connected
✅ Google Drive API: connected
🎉 SUCCESS! Ready to publish to Sheets, Slides, and Drive.
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `credentials.json not found` | Complete step 4 and place file in project root |
| `Access blocked` | Add your email as a Test user on OAuth consent screen |
| `API not enabled` | Enable Sheets, Slides, and Drive APIs in Cloud Console |
| Token expired | Delete `token.json` and run setup again |

## Security
- Never commit `credentials.json`, `token.json`, or `.env`
- `.gitignore` already excludes these files

## Next Step
Proceed to `workflows/01_market_research_synthesis.md`
