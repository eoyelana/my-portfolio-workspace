# CLAUDE.md

Guidance for Claude Code when working in this repository. These rules are **strict** - follow them on every change.

## Project

Personal portfolio for a **Data & LLMOps Engineer**. Monorepo workspace:

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
