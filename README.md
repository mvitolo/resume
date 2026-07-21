# Resume — Matteo Vitolo

Personal résumé built with [JSON Resume](https://jsonresume.org/) — an open standard for résumé data.

## Edit

Update `resume.json` to change content. Follow the [JSON Resume schema](https://jsonresume.org/schema).

## Export locally

```bash
npm install
npx resumed export -f html -t jsonresume-theme-macchiato -o docs/index.html resume.json
```

For PDF:

```bash
npx resumed export -f pdf -t jsonresume-theme-macchiato -o resume.pdf resume.json
```

## CI

GitHub Actions auto-exports `resume.json` → `docs/index.html` on push to `main`.
Do not edit `docs/index.html` directly — it's regenerated every push.

## Live

[GitHub Pages](https://matteovitolo.github.io/resume/) (serves from `docs/`).
