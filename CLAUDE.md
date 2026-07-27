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

## Conventions

- App Router pages live under `frontend/src/app`.
- Import alias: `@/*` maps to `frontend/src/*`.
- Project routes are grouped under `/projects/<domain>`.

## Copy and findings (strict)

- All prose follows the global `/deslop` skill. Read its dash rule before filing **or acting on** a dash finding: a name-tagline separator in a headline lockup is exempt (`~/.claude/skills/deslop/SKILL.md:42`).
- `notes/site-cv-review-2026-07.md` is the decision record for site copy. Check it before filing a copy finding. A finding that contradicts a decision already recorded there gets closed with the reference, never implemented.
- **Settled, do not re-raise:** the `<h1>` lockup dash in `Hero.tsx`, decided 25 July 2026, re-raised as issue #66 item 2 and reverted in f684658.
- A commit that changes user-facing copy says so in its subject line. PR #67 changed the h1 under an SEO-only subject and it survived to review.

## Workflow (strict)

- Every change starts as a GitHub issue stating the outcome and acceptance criteria.
- One branch per issue, cut from `develop`, named `<type>/<issue>-<slug>` (e.g. `feat/45-hero-copy`).
- PRs target `develop` and close their issue with `Closes #<n>`. No direct commits to `develop` or `main`.
- Release: PR `develop` → `main`, tag `vX.Y.Z` on merge; Vercel deploys `main`; CI back-merges `main` into `develop`.
