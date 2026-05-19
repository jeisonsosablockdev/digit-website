# Testing Policy

## Canonical Sources
- `docs/governance/security-quality-policy.md`
- `docs/governance/frontend-ui-policy.md`
- `docs/governance/seo-performance-policy.md`
- `package.json`

## Apply When
- Any implementation, verification, or release-readiness task

## Hard Constraints
- Start with targeted tests first; untested implementation is not complete.
- `npm run validate` is mandatory before completion.
- `Vitest` is the unified repo runner for scripts, validators, and component tests.
- Public-route changes that touch SEO/performance surfaces require `npm run validate:seo-performance`.
- Database schema or persistence changes require `npm run validate:db`; pending tracked migrations block completion.
- Frontend and auth critical paths require Playwright coverage when applicable.
- Next.js and React UI tests should use `@testing-library/react` plus `@testing-library/jest-dom`.
- Browser-critical flows require artifact capture plus responsive coverage at 320, 375, 768, and 1024 widths.
- Public-route SEO/performance work must record explicit LCP/INP/CLS/TTFB reasoning; if field data is unavailable, lab or static evidence must say so.
- Lab-only performance discussions may use TBT as a proxy signal for INP risk, but must not claim that TBT is the field metric.
- Record exact commands and unresolved gaps; failing tests or missing evidence block completion.

## Required Evidence
- commands run
- relevant unit or integration results
- `validate:seo-performance` results when in scope
- Playwright results when in scope
- responsive and browser artifact references when in scope
- CWV/TTFB review notes, including whether the evidence is static, lab, or field-based
