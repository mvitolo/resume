# CLAUDE.md

## What this is

Personal résumé for Matteo Vitolo. Single source of truth: `resume.json` (JSON Resume schema).

## Key files

- `resume.json` — résumé data, edit this
- `docs/index.html` — generated HTML, do NOT edit
- `.github/workflows/resume.yml` — CI: runs `npm run build` to render resume.json → HTML
- `build.mjs` — render script (theme.render, no puppeteer)
- `package.json` — single dep: `jsonresume-theme-creative-confidence`

## Commands

- `npm install` — install deps
- `npm run build` — render resume.json → docs/index.html (via build.mjs, calls theme.render directly)

## Rules

- Don't edit `docs/index.html` directly — it's auto-generated
- Don't add dependencies without clear need (YAGNI)
- Validate `resume.json` against JSON Resume schema before committing
- CI uses `actions/checkout@v2` — outdated but functional, don't upgrade unless asked
