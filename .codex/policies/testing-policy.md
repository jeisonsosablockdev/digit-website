# Testing Policy

## Canonical Sources
- `docs/governance/security-quality-policy.md`
- `docs/governance/frontend-ui-policy.md`
- `package.json`

## Apply When
- Any implementation, verification, or release-readiness task

## Hard Constraints
- Start with targeted tests first; untested implementation is not complete.
- `npm run validate` is mandatory before completion.
- Database schema or persistence changes require `npm run validate:db`; pending tracked migrations block completion.
- Frontend and auth critical paths require Playwright coverage when applicable.
- Browser-critical flows require artifact capture plus responsive coverage at 320, 375, 768, and 1024 widths.
- Record exact commands and unresolved gaps; failing tests or missing evidence block completion.

## Required Evidence
- commands run
- relevant unit or integration results
- Playwright results when in scope
- responsive and browser artifact references when in scope
