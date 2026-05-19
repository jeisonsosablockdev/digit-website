# SEO And Performance Policy

This policy defines the baseline for lightweight public delivery, strong initial-load SEO, and durable Core Web Vitals discipline from the beginning of the project.

## Canonical Intent

The goal is to avoid regressions by making SEO and performance part of the delivery system:
- agent routing
- workflows
- validation
- PR review

Public delivery is treated as a product contract, not a polish pass. Any AI-assisted implementation that touches public routes or first-load surfaces must reason about:

- search discovery and crawlability
- initial render strategy
- Largest Contentful Paint (LCP)
- Interaction to Next Paint (INP)
- Cumulative Layout Shift (CLS)
- Time to First Byte (TTFB)
- first-load JavaScript and third-party cost

## Applies When

Run this policy when changes touch any of these surfaces:
- `app/**`
- `components/**`
- route-level metadata
- `robots`
- `sitemap`
- images
- fonts
- analytics
- embeds
- third-party scripts
- `use client` boundaries
- package dependencies that affect browser delivery

## Baseline Rules

1. Server rendering is the default for public routes.
2. `use client` must stay narrowly scoped and justified by real interaction.
3. Public routes must provide valid metadata.
4. `robots` and `sitemap` coverage are mandatory for public discovery surfaces.
5. First-load JavaScript should stay minimal for public routes.
6. New third-party scripts, embeds, and analytics must be treated as performance-sensitive changes.
7. Images must avoid layout shift and use optimized delivery where practical.
8. Font loading strategy must avoid unnecessary blocking or duplicate external delivery.
9. Every public route should have an explicit LCP candidate and a strategy to keep that candidate fast.
10. Public delivery decisions must actively minimize INP risk by constraining hydration, main-thread work, and third-party execution on initial load.
11. Public delivery decisions must actively minimize CLS risk by reserving space for media, avoiding unstable UI insertion, and keeping typography/loading transitions predictable.
12. TTFB is a required supporting metric for loading analysis even though it is not a Core Web Vital; route architecture must not ignore server response time.

## Measurement Targets

Use the current web.dev guidance as the default quality targets for the 75th percentile of page loads, segmented by mobile and desktop:

- LCP: `<= 2.5s`
- INP: `<= 200ms`
- CLS: `<= 0.1`

Use the current web.dev guidance for TTFB as a supporting loading target:

- TTFB: strive for `<= 0.8s` as a rough guide, while evaluating it in the context of the route's delivery model

These targets are used for:

- planning and review
- lab diagnostics
- field measurement interpretation
- regression triage

They do not imply that CI can directly prove production field performance on its own.

## Required Design-Time Review

When this policy is in scope, the implementation and review flow must explicitly reason about:

- which element is the route's LCP candidate
- what can delay that LCP candidate: TTFB, render-blocking CSS, fonts, scripts, image delivery, or client hydration
- what can degrade INP: large client bundles, synchronous work, excessive listeners, heavy browser APIs, or third-party scripts
- what can degrade CLS: unsized media, icon/font fallback shifts, late UI insertion, or unstable conditional rendering
- what render mode best protects the route: static, server-rendered, or narrowly scoped client interactivity
- whether metadata, canonical data, `robots`, `sitemap`, and crawl surfaces still match the route intent

## AI System Integration

The AI development system must treat this policy as active operating guidance:

- `planner` must activate frontend and QA workflow gates when first-load SEO or browser delivery is touched.
- `frontend` must identify the LCP candidate, the main TTFB dependencies, the likely INP risks, and the likely CLS risks before closing implementation.
- `qa` must collect the repo gates plus responsive and browser evidence, and must call out whether the available evidence is static, lab, or field-adjacent.
- `reviewer` must block completion when public-route changes lack an explicit initial-load strategy or omit CWV/TTFB reasoning.
- `docs` must keep governance, feature notes, and traceability aligned when thresholds or workflow expectations change.

## Required Review Outputs

When this policy is in scope, the change should explicitly review:
- metadata impact
- render mode impact
- `use client` impact
- images and layout shift risk
- fonts and third-party dependency risk
- robots and sitemap impact when relevant
- LCP candidate and likely blockers
- INP risk surfaces and client-work justification
- CLS risk surfaces and reserved-space strategy
- TTFB considerations and server-delivery implications

## Evidence Expectations

Required evidence should combine the strongest available layers:

- executable repo guardrails via `npm run validate:seo-performance`
- targeted tests and Playwright when browser-critical behavior is involved
- responsive verification at required widths
- explicit notes on CWV/TTFB reasoning

When field data is unavailable, record that clearly and rely on:

- static guardrails
- lab evidence
- TBT as an INP proxy in lab-only discussions
- route-level architecture review for TTFB and LCP risk

## Validation Gate

`npm run validate:seo-performance` is the repository gate for this policy.

It should fail when baseline requirements are broken on critical public surfaces.

The validator is expected to enforce stable, reproducible repository rules such as:

- public-route metadata and crawl coverage
- SSR/client boundary hygiene
- obvious blocking resource risks
- unsafe image or script patterns

It does not replace field telemetry, but it must continually push the repo away from common regressions that harm initial-load SEO, LCP, INP, CLS, or TTFB.
