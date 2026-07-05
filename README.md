# eoyelana.com

Monorepo for [www.eoyelana.com](https://www.eoyelana.com), the personal
portfolio of Emmanuel Oyelana, Data & AI Engineer in Zürich.

## Structure

- `frontend/`: the Next.js site (App Router, TypeScript, Tailwind CSS v4),
  deployed on Vercel. Commands live in [frontend/README.md](frontend/README.md).
- `backend/`: reserved for future Python services, not scaffolded yet.

## Workflow

Fix and feature branches merge into `develop` via pull request. Releases go
from `develop` to `main` with a version tag; Vercel deploys production from
`main` and builds a preview for every pull request.
