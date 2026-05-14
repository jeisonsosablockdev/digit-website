# Frontend Policy

## Canonical Sources
- `docs/governance/frontend-ui-policy.md`
- `docs/governance/seo-performance-policy.md`
- `docs/governance/security-quality-policy.md`
- `docs/governance/documentation-policy.md`

## Apply When
- `/app`, `components`, auth, browser-facing flow changes, metadata, images, fonts, analytics, or other first-load surfaces

## Hard Constraints
- SSR-first is the default; move trust-sensitive logic to the server.
- Public routes should remain static or server-rendered by default unless a clear product need requires client interactivity.
- Browser-only APIs and extension-dependent logic stay in client-only boundaries.
- Never trust client session or role state as authority; verify privileges on the server.
- `use client` is opt-in and must stay narrowly scoped to the interactive surface that needs it.
- Metadata, canonical data, robots, and sitemap coverage are part of the frontend contract for public pages.
- Images in public pages must avoid layout shift and use optimized delivery where practical.
- New third-party scripts, analytics, embeds, or external font dependencies are performance-sensitive changes and require explicit review.
- Responsive acceptance is mandatory for UI changes and is closed through `responsive-qa` plus `testing-policy`.
- Do not use mocked browser or auth behavior as final proof for critical flows.
- Coordinate with `security` for auth, replay, or privilege changes.

## Required Evidence
- touched routes and UI surfaces
- server and client trust-boundary notes
- SEO/performance surfaces touched: metadata, robots, sitemap, fonts, images, scripts, and `use client` scope
- matching E2E and responsive artifacts required by the active workflow
