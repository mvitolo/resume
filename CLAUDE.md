# CLAUDE.md

## What this is

Personal résumé for Matteo Vitolo. Single source of truth: `resume.json` (JSON Resume schema).

## Key files

- `resume.json` — résumé data, edit this
- `docs/index.html` — generated HTML, do NOT edit
- `.github/workflows/resume.yml` — CI: exports resume.json → HTML
- `package.json` — single dep: `jsonresume-theme-macchiato`

## Commands

- `npm install` — install deps
- `npx resumed export -f html -t jsonresume-theme-macchiato -o docs/index.html resume.json` — build

## Rules

- Don't edit `docs/index.html` directly — it's auto-generated
- Don't add dependencies without clear need (YAGNI)
- Validate `resume.json` against JSON Resume schema before committing
- CI uses `actions/checkout@v2` — outdated but functional, don't upgrade unless asked
