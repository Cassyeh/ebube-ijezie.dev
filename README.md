# ebube-ijezie.dev — Data Engineer Portfolio

> Personal portfolio of **Ebubechukwu Chigozie Ijezie** — Data Engineer transitioning from  
> 2+ years of SQL/Python data extraction at Access Bank Plc into full-stack data engineering.

**Live site →** [https://cassyeh.github.io/ebube-ijezie.dev](https://cassyeh.github.io/ebube-ijezie.dev)

---

## What this site covers

- **Hero section** — animated DE pipeline architecture diagram with real brand-colour tool logos
- **About** — honest career story, certifications (Azure DP-900, ITIL Foundation)
- **Experience** — Access Bank Plc role with real responsibilities
- **Skills** — animated skill bars, tool chips, cert cards
- **Solutions** — 3 real/realistic data engineering projects with full source code viewers
- **Analytics** — Metabase live dashboard integration (configurable iframe)
- **Contact** — mailto-powered contact form

---

## Tech stack

| Layer | Tools |
|---|---|
| Languages | Python, SQL |
| Orchestration | Apache Airflow |
| Cloud / Storage | AWS S3, GCP BigQuery, Azure (DP-900) |
| Transform | dbt, Pandas, PyArrow / Parquet |
| Ingestion | Tweepy (Twitter API v2), Boto3, requests |
| NLP | VADER Sentiment |
| BI | Metabase |
| Alerting | Slack Webhooks |
| Frontend | Vanilla HTML/CSS/JS — no frameworks |

---

## Project structure

```
ebube-ijezie.dev/
├── index.html              # Entry point — pure HTML, zero inline CSS/JS
├── .nojekyll               # Tells GitHub Pages not to run Jekyll
├── css/
│   ├── base.css            # Reset, CSS variables, keyframes, SVG utilities
│   ├── navbar.css          # Cursor, navbar, menu button, overlay menu
│   └── hero.css            # Hero, pills, name, bio, buttons, diagram wrapper
├── js/
│   ├── cursor.js           # Custom cursor dot + lagging ring
│   └── menu.js             # Menu toggle, Escape key, navbar scroll state
├── svg/
│   └── diagram.svg         # Pipeline diagram — source of truth for edits
├── assets/
│   └── images/             # Profile photo, project screenshots 
└── README.md
```

---

## Local development

```bash
# 1. Clone
git clone https://github.com/Cassyeh/ebube-ijezie.dev.git
cd ebube-ijezie.dev

# 2. Open in browser — no build step needed, it's plain HTML
# Option A: just open the file
open index.html

# Option B: serve with Python for correct MIME types
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Adding / updating images

Put all images in `assets/images/`. Reference them in HTML like:

```html
<img src="assets/images/your-image.png" alt="description" />
```

Recommended image formats and sizes:

| Image | Recommended size | Format |
|---|---|---|
| Profile / headshot | 400 × 400 px | `.webp` or `.jpg` |
| Project screenshots | 1200 × 700 px | `.webp` or `.png` |
| Open Graph preview | 1200 × 630 px | `.jpg` |

---

## Activating the Metabase dashboard

In `index.html`, find the iframe inside `#analytics` and replace the placeholder URL:

```html
<iframe
  src="https://your-metabase-instance.com/public/dashboard/YOUR_UUID"
  ...
/>
```

Steps:
1. In Metabase → your dashboard → **Sharing** → **Enable public sharing**
2. Copy the public link
3. Paste it as the `src` above
4. Push to GitHub — the live site updates automatically

---

## Deploying to GitHub Pages

See [DEPLOY.md](./DEPLOY.md) for the full step-by-step guide.

Quick version:

```bash
git add .
git commit -m "update portfolio"
git push origin main
```

---

## Projects featured

| Project | Stack | Repo |
|---|---|---|
| **transit-radar-411** | Python, asyncio, aiohttp, OpenSky API | [github.com/Cassyeh/transit-radar-411](https://github.com/Cassyeh/transit-radar-411) |
| **Amazon Scrape Flow: ID2URL** | Python, Requests, Pandas, Web Scraping | [github.com/Cassyeh/Amazon_Scrape_Flow_ID2URL](https://github.com/Cassyeh/Amazon_Scrape_Flow_ID2URL) |
| **Twitter/X Data Pipeline** | Airflow, Tweepy, S3, Parquet, VADER, Slack | [github.com/Cassyeh/twitter-data-pipeline](https://github.com/Cassyeh/twitter-data-pipeline) |
| **Multi-Source Airflow ETL** | Airflow, dbt, BigQuery, GCP, Metabase | [github.com/Cassyeh/multi-source-etl-platform](https://github.com/Cassyeh/multi-source-etl-platform) |
| **Cohort Analytics & A/B Testing** | Python, Pandas, scikit-learn, SciPy | [github.com/Cassyeh/cohort-ab-analytics](https://github.com/Cassyeh/cohort-ab-analytics) |

---

## Contact

| | |
|---|---|
| Email | [cassandraijezie@gmail.com](mailto:cassandraijezie@gmail.com) |
| LinkedIn | [linkedin.com/in/ebube-ijezie-68a9a4173](https://www.linkedin.com/in/ebube-ijezie-68a9a4173/) |
| GitHub | [github.com/Cassyeh](https://github.com/Cassyeh) |

---

*Built with plain HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies.*
