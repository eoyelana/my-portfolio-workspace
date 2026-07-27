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
npm run build
npm run start -- --port 3111 &          # background it: next start blocks forever
until curl -sf -o /dev/null http://localhost:3111; do sleep 1; done
npx -y lighthouse@latest http://localhost:3111 \
  --only-categories=accessibility,performance,seo,best-practices \
  --chrome-flags="--headless=new --no-sandbox" \
  --output=json --output-path=./lh.json
kill %1
```

The `&` and the poll are load-bearing. Without them `next start` never returns, the Lighthouse line never runs, and the whole block hangs.

Run it on **every** affected route, not just the home page. Quote the score and the failing audit ids, and quote the same categories the command actually requested. Lighthouse cannot audit `not-found` locally: a real 404 aborts the run with `ERRORED_DOCUMENT_REQUEST` and reports score 0 with zero failing audits, which is an artifact rather than a result. Check that route another way and say which way.

Three rules that follow:

- **Measure the composited background, not the token.** `text-zinc-500` reads 4.12:1 on `#09090b` but 3.94:1 once `bg-white/[.03]` sits under it, and 3.78:1 on hover. Lighthouse never reaches the hover state, so hover and focus styles need their own arithmetic. Remember `outline-offset` paints a focus ring *outside* the border box, so the ring's backdrop is the page, not the card it surrounds.
- **Every interactive element's `hover:` needs a `focus-visible:`.** A keyboard user must get the state affordance a pointer user gets. The qualifier matters: `SkillCard.tsx` is a non-interactive `<div>` with a decorative `hover:` and correctly has no focus counterpart.
- **Keep the global focus ring in `@layer base`, never unlayered.** An unlayered rule outranks every layered one including `@layer utilities`, which silently makes a future `focus-visible:outline-none` inert: the class compiles and does nothing, with no lint or build error. Tailwind's preflight has no outline-removing rule to beat, so unlayering wins nothing.

## Conventions

- App Router pages live under `frontend/src/app`.
- Import alias: `@/*` maps to `frontend/src/*`.
- Project routes are grouped under `/projects/<domain>`.

## Copy and findings (strict)

- All prose follows the global `/deslop` skill. Read its dash rule before filing **or acting on** a dash finding: a name-tagline separator in a headline lockup is exempt (`the deslop dash rule`).
- `the local copy decision record` is the decision record for site copy. Check it before filing a copy finding. A finding that contradicts a decision already recorded there gets closed with the reference, never implemented.
- **Settled, do not re-raise:** the `<h1>` lockup dash in `Hero.tsx`, decided 25 July 2026, re-raised as issue #66 item 2 and reverted in f684658.
- A commit that changes user-facing copy says so in its subject line. PR #67 changed the h1 under an SEO-only subject and it survived to review.

## Workflow (strict)

- Every change starts as a GitHub issue stating the outcome and acceptance criteria.
- One branch per issue, cut from `develop`, named `<type>/<issue>-<slug>` (e.g. `feat/45-hero-copy`).
- PRs target `develop` and close their issue with `Closes #<n>`. No direct commits to `develop` or `main`.
- Release: PR `develop` → `main`, tag `vX.Y.Z` on merge; Vercel deploys `main`; CI back-merges `main` into `develop`.
