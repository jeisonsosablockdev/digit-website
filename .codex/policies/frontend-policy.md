# Frontend Policy

## Canonical Sources
- `docs/governance/frontend-ui-policy.md`
- `docs/governance/security-quality-policy.md`
- `docs/governance/documentation-policy.md`

## Apply When
- `/app`, `components`, auth, or browser-facing flow changes

## Hard Constraints
- SSR-first is the default; move trust-sensitive logic to the server.
- Browser-only APIs and extension-dependent logic stay in client-only boundaries.
- Never trust client session or role state as authority; verify privileges on the server.
- Responsive acceptance is mandatory for UI changes and is closed through `responsive-qa` plus `testing-policy`.
- Do not use mocked browser or auth behavior as final proof for critical flows.
- Coordinate with `security` for auth, replay, or privilege changes.

## Required Evidence
- touched routes and UI surfaces
- server and client trust-boundary notes
- matching E2E and responsive artifacts required by the active workflow
