# App Mobile Manifesto Glow Composition

Last Updated: 2026-05-25 UTC

## Summary

Quick visual follow-up for the public home manifesto block.

This change tightens the mobile headline composition, keeps the headline order aligned with the approved reference, and refines the right-side cyan glow into a softer mobile half-circle accent without changing behavior or route structure.

## Scope

- `components/home/manifesto-section.tsx`
- mobile headline line breaks, width, and word grouping
- right-side decorative cyan radial glow
- reduced secondary purple spill so the cyan glow remains primary

## Notes

- Public route delivery remains SSR-first.
- The change is decorative only and does not introduce new client interactivity.
