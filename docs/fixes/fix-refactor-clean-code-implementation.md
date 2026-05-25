# Fix Implementation: Refactor Clean Code

Last Updated: 2026-05-25 UTC
Status: in progress
Owner: app workflow
Related Problem Artifact: `docs/fixes/fix-refactor-clean-code.md`
Linear Issue: `DIG-10`
Mother Branch: `jeisonsosablockdev/dig-10-fix-refactor-clean-code`
Documentation Slice: `jeisonsosablockdev/dig-10-fix-refactor-clean-code-docs`

## Current State

- mother branch created
- documentation slice created
- no implementation slices opened yet
- the current home in `develop` already includes:
  - Stitch-inspired redesign
  - client hero carousel
  - special top app bar and bottom nav outside `SiteShell`
  - duplicated legacy home modules still present in the repo

## ES

## Summary

Este artefacto define cómo se ejecutará `DIG-10`: pagar la deuda estructural dejada por el refactor/rediseño sin cambiar la dirección visual aprobada.

El trabajo se centra en clarificar la arquitectura de la home, eliminar ambigüedad de ownership entre componentes, y volver a cerrar el cambio con evidencia explícita sobre Web Core Vitals y entrega inicial.

## Goal

Implementar el fix para que:

- la home tenga una sola implementación canónica
- `app/page.tsx` siga siendo un ensamblador claro
- la versión activa de la home quede compuesta por piezas pequeñas y mantenibles
- el menú compartido no viva duplicado en dos superficies sin necesidad
- los bloques interactivos visibles reflejen comportamientos reales
- la home preserve SSR-first y mantenga control sobre LCP, INP, CLS y TTFB

## Web Core Vitals Gate

`DIG-10` no se considera cerrado sin revisión explícita de Web Core Vitals sobre la home pública ya limpia.

Métricas obligatorias a revisar:

- `LCP`
  - identificar el candidato real de la home
  - confirmar que no dependa de client work innecesario
  - revisar impacto del hero y de sus imágenes
- `INP`
  - revisar costo de hidratación de `HeroCarousel`
  - revisar interacciones de menú superior y bottom nav
  - evitar expansión innecesaria de `use client`
- `CLS`
  - confirmar estabilidad del hero, dots, app bar y bottom nav
  - revisar estabilidad de imágenes remotas y overlays
- `TTFB`
  - confirmar que la ruta siga estática o SSR
  - confirmar que el cleanup no introduzca fetches o boundaries innecesarios

Gate de salida:

- `npm run validate:seo-performance`
- `npm run test:e2e`
- evidencia responsive disponible
- nota final explícita de `LCP`, `INP`, `CLS` y `TTFB`

## Non-Goals

- reimaginar el diseño visual de Stitch
- cambiar el funnel comercial
- reabrir trabajo de MCP Stitch salvo referencias documentales
- introducir client logic nueva salvo que sea necesaria para corregir un contrato existente

## Technical Defaults

- la home pública seguirá tratándose como superficie SSR-first
- `use client` quedará restringido a la interacción ya necesaria del hero carousel o a comportamientos equivalentes estrictamente justificados
- `SiteShell` y la home especial deben converger en navegación compartida reutilizable
- no se mantendrán dos implementaciones activas de las mismas secciones de home sin una razón explícita y documentada
- la validación final debe incluir razonamiento explícito sobre LCP, INP, CLS y TTFB

## Slice Strategy

La iniciativa se ejecutará en slices pequeños y secuenciales desde la mother branch.

Orden de ejecución:

1. documentación base y trazabilidad
2. source of truth canónica para la home
3. recomposición de la home activa en componentes pequeños
4. deduplicación de navegación compartida
5. alineación de contratos de comportamiento visibles
6. verificación final de SEO/performance y Web Core Vitals

## Atomic Slice Plan

| Slice | Branch | Objective | Scope | Tests First | Validation | Exit Gate |
| --- | --- | --- | --- | --- | --- | --- |
| S00 | `jeisonsosablockdev/dig-10-fix-refactor-clean-code-docs` | Crear artefactos base y trazabilidad | `docs/fixes/*`, `docs/features/*` | No | `npm run validate:docs-governance` o `npm run validate` | Review documental aprobada |
| S01 | `fix/app-refactor-clean-code-dig-10-s01-home-canonical-source` | Dejar una sola source of truth para la home | `app/page.tsx`, `components/home/*` | Sí | `npm run test`, `npm run build`, `npm run test:e2e` | No quedan implementaciones activas ambiguas |
| S02 | `fix/app-refactor-clean-code-dig-10-s02-home-composition` | Partir la home activa en componentes pequeños | `components/home/*` | Sí | `npm run test`, `npm run build`, `npm run test:e2e` | `home-page.tsx` queda como ensamblador legible |
| S03 | `fix/app-refactor-clean-code-dig-10-s03-navigation-dedup` | Unificar menú móvil y navegación compartida | `components/home/*`, `components/site-shell.tsx` | Sí | `npm run test:e2e`, `npm run validate` | Navegación compartida sin duplicación estructural |
| S04 | `fix/app-refactor-clean-code-dig-10-s04-behavior-contracts` | Alinear UI visible con comportamiento real | `components/home/*`, `e2e/*`, docs relacionadas si aplica | Sí | `npm run test:e2e`, `npm run validate` | No quedan CTAs o inputs con contrato ambiguo |
| S05 | `fix/app-refactor-clean-code-dig-10-s05-seo-performance-cwv` | Revisar y cerrar CWV/first-load después del cleanup | `app/page.tsx`, `components/home/*`, `e2e/*`, evidence artifacts | Sí | `npm run validate:seo-performance`, `npm run test:e2e`, `npm run validate` | LCP/INP/CLS/TTFB quedan documentados y validados |

## Slice Dependencies And Merge Order

- `S00` debe quedar revisado antes de abrir ramas hijas técnicas.
- `S01` desbloquea el resto porque fija la implementación canónica.
- `S02` depende de `S01`.
- `S03` debe ejecutarse después de `S02` para no duplicar trabajo de composición.
- `S04` depende de la estructura ya consolidada.
- `S05` cierra la validación de la superficie pública ya limpia.
- cada slice mergea primero a la mother branch; el merge a `develop` solo ocurre al final.

## Tests-First Plan

- mantener y extender Playwright sobre:
  - render principal de la home
  - menú superior
  - bottom nav
  - navegación a rutas reales
  - estabilidad responsive en `320`, `375`, `768`, `1024`
- añadir pruebas orientadas a contrato visible cuando exista una interacción que sugiera comportamiento real
- correr `npm run validate:seo-performance` de forma explícita en el slice de CWV y en el cierre final

## SEO/Performance Review Requirements

La revisión de Web Core Vitals para `DIG-10` debe registrar explícitamente:

- `LCP`
  - identificar el candidato real de la home después del cleanup
  - confirmar que no dependa de client work innecesario
- `INP`
  - revisar el costo de hidratación de `HeroCarousel`
  - revisar interacciones de menú superior y bottom nav
- `CLS`
  - confirmar estabilidad visual del hero, dots, app bar y bottom nav
  - revisar si el uso de imágenes remotas conserva dimensiones y comportamiento estable
- `TTFB`
  - confirmar que la ruta siga estática o SSR sin introducir fetches o boundaries innecesarios

Si la evidencia es de laboratorio o estática, eso debe decirse explícitamente.

## Docs And Traceability

- mantener sincronizados el problem artifact y este solution artifact
- actualizar una feature note bajo `docs/features/*.md`
- registrar en Linear:
  - mother branch
  - rama documental
  - ramas slice
  - commits de cada slice
  - merge final a `develop`

## EN

## Summary

This artifact defines how `DIG-10` will execute: pay down the structural debt left by the refactor/redesign without changing the approved visual direction.

The work focuses on clarifying home architecture, removing ambiguous ownership between components, and closing the effort with explicit Web Core Vitals and initial-delivery evidence.

## Goal

Implement the fix so that:

- the home has one canonical implementation
- `app/page.tsx` remains a clear assembler
- the active home is composed of small, maintainable pieces
- shared menu logic does not live in two surfaces unnecessarily
- visible interactive blocks reflect real behavior contracts
- the home preserves SSR-first delivery and keeps control over LCP, INP, CLS, and TTFB

## Technical Defaults

- the public home remains an SSR-first surface
- `use client` stays restricted to already necessary hero-carousel interaction or equally justified behavior
- `SiteShell` and the special home should converge on reusable shared navigation
- duplicate active implementations of the same home sections are not allowed without explicit documented reason
- final validation must include explicit LCP, INP, CLS, and TTFB reasoning
