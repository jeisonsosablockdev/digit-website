# Frontend Cycle

## Trigger
- Changes to `/app`, `components`, or browser-facing routes
- Auth or other browser-critical flow changes
- SSR/client boundary changes in Next.js App Router code
- Metadata, robots, sitemap, image, font, analytics, or third-party frontend script changes

## Participants
- `planner`
- `frontend`
- `qa`
- `docs`
- `reviewer`
- Add `security` for auth, session, role, or other trust-boundary work.

## Required Policies
- `frontend-policy`
- `security-policy`
- `docs-policy`
- `testing-policy`

## Execution Sequence
| Step | Owner | Goal | Gate |
| --- | --- | --- | --- |
| 1 | `planner` | Detect frontend scope and activate this workflow | Routes, UI surfaces, and evidence needs are identified |
| 2 | `frontend` | Define the SSR/client split, server trust boundary, and SEO/performance surfaces | Client-only code, metadata, fonts, scripts, and asset decisions are explicit |
| 3 | `security` | Review auth, session, and privilege assumptions when in scope | Trust-boundary gaps are surfaced before implementation closes |
| 4 | `frontend` | Implement with tests first and keep the diff local to the touched surface | Relevant tests are updated before final verification |
| 5 | `docs` | Sync auth, session, feature-note, or SEO/performance governance docs as required | Canonical docs and traceability stay current |
| 6 | `qa` | Run targeted tests, `validate:seo-performance`, Playwright, and browser evidence as required | Workflow-specific gates pass with deterministic artifacts |
| 7 | `reviewer` | Audit the final diff and completion status | No unresolved blocking findings remain |
