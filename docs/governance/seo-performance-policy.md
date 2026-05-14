# SEO And Performance Policy

This policy defines the baseline for lightweight public delivery and strong SEO from the beginning of the project.

## Canonical Intent

The goal is to avoid regressions by making SEO and performance part of the delivery system:
- agent routing
- workflows
- validation
- PR review

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

## Required Review Outputs

When this policy is in scope, the change should explicitly review:
- metadata impact
- render mode impact
- `use client` impact
- images and layout shift risk
- fonts and third-party dependency risk
- robots and sitemap impact when relevant

## Validation Gate

`npm run validate:seo-performance` is the repository gate for this policy.

It should fail when baseline requirements are broken on critical public surfaces.
