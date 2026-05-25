# Fix Implementation: Home Web Modern Layout

Last Updated: 2026-05-25 UTC
Status: implemented
Owner: app workflow
Related Problem Artifact: `docs/fixes/fix-home-web-modern-layout.md`
Mother Branch: `codex/fix-home-web-modern-layout`
Documentation Slice: `codex/fix-home-web-modern-layout-s00-docs`

## Current State

- mother branch created
- documentation slice created and merged
- implementation slices `S01` and `S02` merged to the mother branch
- `S03` closes QA, CWV notes, metadata alignment, and execution traceability

## ES

## Summary

Este artefacto define la conversión de la home actual hacia una landing web moderna, conservando la experiencia mobile existente.

La dirección visual recomendada se basa en el criterio de `ui-ux-pro-max` aplicado manualmente sobre sus datasets:

- producto híbrido: `Service Landing Page` + `Financial Dashboard`
- estilo base: `Dark Mode (OLED)` + `Glassmorphism` + `Trust & Authority`
- patrón principal: `Hero + Features + CTA`
- enfoque tipográfico: jerarquía web/editorial con titulares amplios y bloques de lectura más contenidos

## Goal

Implementar un desktop/home web moderno que:

- conserve el look mobile actual en `375px` y rangos cercanos
- use el espacio horizontal en `768+` y especialmente en `1024+`
- reemplace señales de app mobile por patrones de landing web en desktop
- mantenga SSR-first y no introduzca client-work innecesario

## Technical Defaults

- no se agregan librerías nuevas de UI
- se conservan `font-headline` y `font-body` actuales
- la paleta DIGIT negro + violeta + cyan se mantiene
- `HeroCarousel` puede seguir existiendo en mobile, pero desktop debe sentirse web-first
- `BottomNavBar` debe quedar acotada a mobile/tablet pequeña o desaparecer en desktop
- `TopAppBar` debe evolucionar hacia navegación web usable en escritorio

## Chosen Web Direction

- contenedor desktop: `max-w-[1280px]` como referencia de ancho principal
- hero desktop: split layout con copy/CTA a la izquierda y visual/carrusel a la derecha
- secciones intermedias: alternancia de grids `2 cols` / `3 cols` en vez de una sola columna
- cards: profundidad glass/dark con glow controlado, evitando look de app-only shell
- CTA strategy: CTA primario visible arriba y CTA secundarios contextuales por sección

## Atomic Slice Plan

| Slice | Branch | Objective | Scope | Tests First | Validation | Exit Gate |
| --- | --- | --- | --- | --- | --- | --- |
| S00 | `codex/fix-home-web-modern-layout-s00-docs` | Crear artefactos base y plan técnico | `docs/fixes/*`, `docs/features/*` | No | `npm run validate:docs-governance` | Artefactos listos y bilingües |
| S01 | `codex/fix-home-web-modern-layout-s01-shell-hero` | Convertir header y hero a composición web moderna manteniendo mobile | `components/home/home-page.tsx`, `hero-carousel.tsx`, `top-app-bar.tsx`, `bottom-nav-bar.tsx`, `app/page.tsx` | Sí | `npm run test`, `npm run build`, `npm run test:e2e` | Hero y shell ya se sienten web-first en desktop |
| S02 | `codex/fix-home-web-modern-layout-s02-sections-desktop` | Rehacer las secciones internas para desktop con grids/editorial blocks sin romper mobile | `structure-section.tsx`, `architecture-section.tsx`, `community-section.tsx`, `manifesto-section.tsx`, `membership-section.tsx` | Sí | `npm run test`, `npm run build`, `npm run test:e2e` | Secciones escalan bien en 768/1024/1440 |
| S03 | `codex/fix-home-web-modern-layout-s03-qa-docs-closeout` | Cerrar QA responsive, CWV y trazabilidad final | `docs/fixes/*`, `docs/features/*`, evidencia `tmp/qa/*` | No | `npm run validate`, `npm run validate:seo-performance`, `npm run validate:orchestration` | Fix listo para merge a develop |

## Slice Dependencies And Merge Order

- `S00` desbloquea implementación
- `S01` define la nueva lectura web del shell y hero
- `S02` depende de la escala/layout resultante del hero y del ancho desktop canonical
- `S03` documenta resultados reales y cierra validación
- cada slice mergea de vuelta a `codex/fix-home-web-modern-layout` antes del cierre final a `develop`

## Executed Slice Traceability

| Slice | Branch | Commit | Merge Back To Mother |
| --- | --- | --- | --- |
| S00 | `codex/fix-home-web-modern-layout-s00-docs` | `80036d07` `docs(app): define home web modern layout fix` | `5754820a` `merge: home web modern layout docs` |
| S01 | `codex/fix-home-web-modern-layout-s01-shell-hero` | `0ee962f6` `feat(app): shift home shell and hero to web layout` | `c840686d` `merge: home web modern layout s01 shell hero` |
| S02 | `codex/fix-home-web-modern-layout-s02-sections-desktop` | `6150eae7` `feat(app): adapt home sections for desktop web` | `a417b2b4` `merge: home web modern layout s02 sections desktop` |
| S03 | `codex/fix-home-web-modern-layout-s03-qa-docs-closeout` | `04271827` `docs(app): close home web modern layout validation` | pending |

## Tests-First Plan

- mantener Playwright sobre home pública
- verificar que navegación móvil siga operativa
- agregar o ajustar evidencia visual desktop en `1024` y `1440`
- confirmar no overflow horizontal en `320`, `375`, `768`, `1024`

## Validation Gates

- `S00`: `npm run validate:docs-governance`
- `S01`: `npm run test`, `npm run build`, `npm run test:e2e`
- `S02`: `npm run test`, `npm run build`, `npm run test:e2e`
- `S03`: `npm run validate`, `npm run validate:seo-performance`, `npm run validate:orchestration`

## Responsive QA Evidence

- `tmp/qa/home-web-modern-layout/home-320.png`
- `tmp/qa/home-web-modern-layout/home-375.png`
- `tmp/qa/home-web-modern-layout/home-768.png`
- `tmp/qa/home-web-modern-layout/home-1024.png`
- `tmp/qa/home-web-modern-layout/home-1440.png`

## Final CWV Notes

- `LCP`: el candidato principal sigue siendo hero SSR con copy e imagen ya presentes en HTML; el desktop split layout agrega estructura, no assets pesados nuevos
- `INP`: la interactividad cliente se mantiene acotada al carrusel y a selectores ya existentes; no se agregó una capa JS nueva para desktop
- `CLS`: hero, cards y CTA reservan espacio estable en desktop y mobile, evitando saltos perceptibles
- `TTFB`: la home se mantiene estática/SSR-first y no introduce fetches server-side adicionales

## Final Outcome

- mobile conserva su shell visual, bottom nav y lectura phone-first
- desktop ahora presenta navegación superior web, hero editorial de dos columnas y secciones internas escalables
- la metadata de la home ya refleja el nuevo posicionamiento web moderno

## CWV And Delivery Constraints

- `LCP`: el hero desktop no debe volverse más pesado que la versión actual; priorizar copy SSR y media controlada
- `INP`: evitar nueva interactividad cliente innecesaria; el cambio es principalmente de layout
- `CLS`: reservar espacio estable en hero desktop y cards
- `TTFB`: no introducir fetches o dependencias server-side nuevas

## EN

## Summary

This artifact defines the conversion of the current home into a modern web landing page while preserving the existing mobile experience.

The visual direction is derived from `ui-ux-pro-max` guidance applied manually to its datasets:

- product blend: `Service Landing Page` + `Financial Dashboard`
- base style: `Dark Mode (OLED)` + `Glassmorphism` + `Trust & Authority`
- primary pattern: `Hero + Features + CTA`
- typographic approach: broader editorial headline hierarchy and more controlled reading blocks

## Goal

Implement a modern web desktop home that:

- preserves the current mobile look at `375px` and nearby widths
- uses horizontal space effectively at `768+` and especially `1024+`
- replaces mobile-app signals with landing-page patterns on desktop
- stays SSR-first without unnecessary new client work
