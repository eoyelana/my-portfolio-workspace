# CLAUDE.md

Guidance for Claude Code when working in this repository. These rules are **strict** - follow them on every change.

## Project

Personal portfolio for a **Data & AI Engineer**. Monorepo workspace:

- `frontend/` - Next.js app (TypeScript, Tailwind CSS, App Router, ESLint).
- `backend/` - Python services (placeholder; not yet scaffolded).

## Primary Tech Stack

- **Frontend:** Next.js (TypeScript, App Router)
- **Languages:** Python, SQL
- **Data & Orchestration:** Databricks, Apache Airflow
- **Cloud:** GCP / Azure

## Formatting Rules (strict)

- **Use Prettier** as the single source of truth for formatting. Format every file you touch.
- **No trailing commas in JSON.** This applies to `.json`, `.code-workspace`, and any JSON-like config.
- Prefer Prettier defaults elsewhere; do not hand-format against Prettier.

## Build / Run Commands (frontend)

Run all commands from the `frontend/` directory.

```bash
npm run dev     # Start the local dev server (http://localhost:3000)
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # Run ESLint
```

## Validation, not just verification (strict)

`npm run lint` and `npm run build` exiting 0 is **verification**: the code matches the spec those tools check. It is not **validation**: it cannot tell you the page works for the person using it. A WCAG contrast failure shipped to production in July 2026 with both commands green, because neither looks at a rendered pixel.

So for any change touching markup, CSS, or a Tailwind class, lint and build are the entry fee, not the receipt. Before calling it done:

```bash
npm run build && npm run start -- --port 3111
npx -y lighthouse@latest http://localhost:3111 \
  --only-categories=accessibility,performance,seo \
  --chrome-flags="--headless=new" --output=json --output-path=./lh.json
```

Run it on **every** affected route, not just the home page. Quote the score and the failing audit ids. Lighthouse cannot audit `not-found` locally: a real 404 status aborts the run with `ERRORED_DOCUMENT_REQUEST`, so check that route by other means and say so.

Two rules that follow:

- **Measure the composited background, not the token.** `text-zinc-500` reads 4.12:1 on `#09090b` but 3.94:1 once `bg-white/[.03]` sits under it, and 3.78:1 on hover. Lighthouse never reaches the hover state, so hover and focus styles need their own arithmetic.
- **Every `hover:` needs a `focus-visible:`.** A keyboard user must get the same state affordance a pointer user gets. `globals.css` carries one unlayered `:focus-visible` ring so a new component cannot ship without an indicator; component classes add to it and never replace it.

## Conventions

- App Router pages live under `frontend/src/app`.
- Import alias: `@/*` maps to `frontend/src/*`.
- Project routes are grouped under `/projects/<domain>`.

## Workflow (strict)

- Every change starts as a GitHub issue stating the outcome and acceptance criteria.
- One branch per issue, cut from `develop`, named `<type>/<issue>-<slug>` (e.g. `feat/45-hero-copy`).
- PRs target `develop` and close their issue with `Closes #<n>`. No direct commits to `develop` or `main`.
- Release: PR `develop` → `main`, tag `vX.Y.Z` on merge; Vercel deploys `main`; CI back-merges `main` into `develop`.
