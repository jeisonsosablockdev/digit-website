# Fix Implementation: Home Clean Code And Visual Glow Polish

Last Updated: 2026-05-25 UTC
Status: in progress
Owner: app workflow
Related Problem Artifact: `docs/fixes/fix-home-clean-code-and-visual-glow-polish.md`
Linear Issue: `DIG-11`
Mother Branch: `jeisonsosablockdev/dig-11-fix-home-clean-code-and-visual-glow-polish`
Documentation Slice: `fix/docs-home-clean-code-and-visual-glow-polish-dig-11-s00-documentation`

## Current State

- mother branch created
- documentation slice created
- no implementation slices opened yet
- the active home already uses focused section components and shared mobile navigation from `DIG-10`

## ES

## Summary

Este artefacto define la ejecución de `DIG-11`: un fix pequeño, multi-slice y de bajo riesgo para cerrar detalles de clean code y fidelidad visual en la home.

La intención es no mezclar concerns. Primero se corrige la composición, luego la abstracción compartida, y finalmente el polish visual con validación.

## Goal

Implementar el fix para que:

- `HomePageSections` quede libre de bloques vacíos accidentales
- `MobileNavigationMenu` deje de recibir clases como contrato primario
- el manifiesto recupere el glow morado sutil visto en la referencia
- la arquitectura tenga iluminación detrás de cards clave
- el cambio cierre con evidencia visual y validación del repo

## Technical Defaults

- la home sigue siendo SSR-first
- `HeroCarousel` no cambia de comportamiento
- la navegación compartida mantiene `details/summary` nativo
- la mejora de API del menú debe conservar compatibilidad con `TopAppBar` y `SiteShell`
- el polish visual debe implementarse con capas decorativas existentes, sin nueva librería

## Atomic Slice Plan

| Slice | Branch | Objective | Scope | Tests First | Validation | Exit Gate |
| --- | --- | --- | --- | --- | --- | --- |
| S00 | `fix/docs-home-clean-code-and-visual-glow-polish-dig-11-s00-documentation` | Crear artefactos base y trazabilidad | `docs/fixes/*`, `docs/features/*` | No | `npm run validate:docs-governance` | Review documental aprobada |
| S01 | `fix/app-home-clean-code-and-visual-glow-polish-dig-11-s01-home-assembler-cleanup` | Eliminar la `section` vacía del ensamblador y dejar la composición explícita | `components/home/home-page.tsx` | Sí | `npm run test`, `npm run build`, `npm run test:e2e` | Ensamblador limpio y sin regresión |
| S02 | `fix/app-home-clean-code-and-visual-glow-polish-dig-11-s02-mobile-nav-api` | Volver semántica la API del menú móvil compartido | `components/navigation/*`, `components/home/top-app-bar.tsx`, `components/site-shell.tsx` | Sí | `npm run test`, `npm run build`, `npm run test:e2e` | Menú compartido sin API leaky |
| S03 | `fix/app-home-clean-code-and-visual-glow-polish-dig-11-s03-visual-glow-polish` | Agregar glow morado en manifesto e iluminación detrás de cards de arquitectura | `components/home/manifesto-section.tsx`, `components/home/architecture-section.tsx` | Sí | `npm run build`, `npm run test:e2e`, evidencia visual | Ajustes visuales alineados con referencia |
| S04 | `fix/app-home-clean-code-and-visual-glow-polish-dig-11-s04-docs-traceability` | Registrar hashes reales, evidencia y cierre del fix | `docs/fixes/*`, `docs/features/*` | No | `npm run validate:docs-governance`, `npm run validate` | Trazabilidad completa y cierre documental |

## Slice Dependencies And Merge Order

- `S00` ocurre primero y desbloquea implementación.
- `S01` y `S02` deben completarse antes del polish visual final para no mezclar cleanup estructural con ajuste estético.
- `S03` depende de la estructura final de los componentes.
- `S04` cierra la trazabilidad después de ejecutar los slices técnicos.
- cada slice mergea de vuelta a la mother branch antes del cierre final a `develop`.

## Tests-First Plan

- mantener Playwright sobre:
  - render principal de la home
  - menú superior
  - navegación inferior
  - estabilidad responsive sin overflow
- si el refactor del menú compartido cambia accesibilidad o roles, ajustar Playwright en el mismo slice
- capturar evidencia visual nueva después del polish de glows

## Validation Gates

- `S00`: `npm run validate:docs-governance`
- `S01`: `npm run test`, `npm run build`, `npm run test:e2e`
- `S02`: `npm run test`, `npm run build`, `npm run test:e2e`
- `S03`: `npm run build`, `npm run test:e2e`
- `S04`: `npm run validate:docs-governance`, `npm run validate`

## Docs And Traceability

- crear problem artifact y solution artifact en esta slice
- crear feature note ligera bajo `docs/features/*.md`
- registrar en Linear:
  - mother branch
  - documentation slice
  - branches `S01-S04`
  - commits de cada slice
  - merge final a `develop`

## EN

## Summary

This artifact defines the execution of `DIG-11`: a small, low-risk, multi-slice fix to close clean-code and visual-fidelity gaps on the home.

The intent is to keep concerns separate. First composition cleanup, then shared abstraction cleanup, then visual polish with validation.

## Goal

Implement the fix so that:

- `HomePageSections` no longer contains accidental empty blocks
- `MobileNavigationMenu` stops using raw class strings as its primary contract
- the manifesto recovers the subtle purple glow from the reference
- the architecture section gains background illumination behind key cards
- the change closes with visual evidence and repo validation

## Technical Defaults

- the home remains SSR-first
- `HeroCarousel` behavior does not change
- shared navigation keeps the native `details/summary` interaction model
- the mobile-menu API improvement must remain compatible with both `TopAppBar` and `SiteShell`
- the visual polish should use the current decorative layering approach and must not introduce a new library

## Atomic Slice Plan

| Slice | Branch | Objective | Scope | Tests First | Validation | Exit Gate |
| --- | --- | --- | --- | --- | --- | --- |
| S00 | `fix/docs-home-clean-code-and-visual-glow-polish-dig-11-s00-documentation` | Create base artifacts and traceability | `docs/fixes/*`, `docs/features/*` | No | `npm run validate:docs-governance` | Documentation review approved |
| S01 | `fix/app-home-clean-code-and-visual-glow-polish-dig-11-s01-home-assembler-cleanup` | Remove the empty assembler `section` and keep composition explicit | `components/home/home-page.tsx` | Yes | `npm run test`, `npm run build`, `npm run test:e2e` | Clean assembler with no regressions |
| S02 | `fix/app-home-clean-code-and-visual-glow-polish-dig-11-s02-mobile-nav-api` | Make the shared mobile-menu API semantic | `components/navigation/*`, `components/home/top-app-bar.tsx`, `components/site-shell.tsx` | Yes | `npm run test`, `npm run build`, `npm run test:e2e` | Shared menu no longer leaks styling details |
| S03 | `fix/app-home-clean-code-and-visual-glow-polish-dig-11-s03-visual-glow-polish` | Add manifesto purple glow and architecture card backlighting | `components/home/manifesto-section.tsx`, `components/home/architecture-section.tsx` | Yes | `npm run build`, `npm run test:e2e`, visual evidence | Visual polish aligned with reference |
| S04 | `fix/app-home-clean-code-and-visual-glow-polish-dig-11-s04-docs-traceability` | Record real hashes, evidence, and fix closeout | `docs/fixes/*`, `docs/features/*` | No | `npm run validate:docs-governance`, `npm run validate` | Complete traceability and documentation closeout |

## Slice Dependencies And Merge Order

- `S00` happens first and unlocks implementation.
- `S01` and `S02` should finish before final visual polish so structural cleanup stays separate from aesthetic changes.
- `S03` depends on the final component structure.
- `S04` closes traceability after the technical slices are done.
- each slice merges back into the mother branch before the final integration to `develop`

## Tests-First Plan

- keep Playwright coverage over:
- the main home render
- the top menu
- the bottom navigation
- responsive stability with no horizontal overflow
- if the shared-menu refactor changes accessibility or roles, update Playwright in the same slice
- capture refreshed visual evidence after the glow polish lands

## Validation Gates

- `S00`: `npm run validate:docs-governance`
- `S01`: `npm run test`, `npm run build`, `npm run test:e2e`
- `S02`: `npm run test`, `npm run build`, `npm run test:e2e`
- `S03`: `npm run build`, `npm run test:e2e`
- `S04`: `npm run validate:docs-governance`, `npm run validate`

## Docs And Traceability

- create the problem artifact and solution artifact in this slice
- create a thin feature note under `docs/features/*.md`
- record in Linear:
- the mother branch
- the documentation slice
- branches `S01-S04`
- commit hashes for each slice
- the final merge to `develop`
