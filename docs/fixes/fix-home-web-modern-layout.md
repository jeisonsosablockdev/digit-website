# Fix: Home Web Modern Layout

Last Updated: 2026-05-25 UTC
Status: in progress
Owner: app workflow
Related Solution Artifact: `docs/fixes/fix-home-web-modern-layout-implementation.md`

## Current State

- mother branch created: `codex/fix-home-web-modern-layout`
- documentation slice created: `codex/fix-home-web-modern-layout-s00-docs`
- implementation slices have not been opened yet
- the public home currently preserves a strong mobile-first app shell even on desktop widths

## ES

## Summary

La home pública actual funciona bien en mobile, pero en desktop todavía se comporta más como una app móvil ampliada que como una landing web moderna.

Los síntomas principales son:

- hero de pantalla completa con composición pensada para teléfono
- barra inferior fija tipo app que no aporta valor en desktop
- secciones limitadas a `max-w-md` y una sola columna incluso en pantallas amplias
- jerarquía visual, ritmo y densidad más cercanos a una app mobile que a una página web de autoridad

## Why This Matters

La home es una superficie pública crítica.

En desktop hoy no capitaliza:

- espacio horizontal disponible
- lectura editorial de titulares y claims
- patrones web de conversión y credibilidad
- una percepción más premium y moderna para una academy/trading platform

Esto afecta conversión, confianza y claridad de producto en el contexto de navegación web.

## Expected Outcome

Al cerrar este fix, la home debe:

- mantener la experiencia mobile actual como baseline visual y funcional
- transformarse en una landing web moderna en desktop y laptop
- usar un hero web-first con mejor distribución de contenido y CTA
- convertir secciones lineales en composiciones de grid, cards y bloques editoriales para escritorio
- reducir patrones de app mobile en desktop, especialmente la bottom nav fija
- conservar SSR-first, rendimiento inicial fuerte y el modelo actual de rutas/autenticación

## Initial Scope

Este fix cubre:

- layout desktop de la home pública
- hero, navegación superior y CTA de entrada para desktop
- reflujo de secciones `Structure`, `Architecture`, `Community`, `Manifesto` y `Membership`
- responsive QA para asegurar que mobile no se degrade
- trazabilidad documental y feature note

## Non-Goals

Este fix no busca:

- rehacer la experiencia mobile desde cero
- cambiar el contenido base del producto
- introducir nuevas dependencias visuales pesadas
- convertir la home en una app cliente o en una experiencia dependiente de JS adicional

## Open Questions

No hay bloqueos funcionales.

Suposiciones activas:

- mobile actual se conserva salvo ajustes mínimos de coexistencia responsive
- desktop puede adoptar una dirección visual más web/premium sin perder la paleta y tono DIGIT ya establecidos

## EN

## Summary

The current public home works well on mobile, but on desktop it still behaves more like an enlarged mobile app shell than a modern web landing page.

Main symptoms:

- full-screen hero composed like a phone-first surface
- fixed bottom app-style navigation that adds little value on desktop
- sections constrained to `max-w-md` single-column layouts even on wide screens
- visual hierarchy and pacing that feel closer to a mobile app than to an authoritative web page

## Why This Matters

The home is a critical public surface.

Today on desktop it underuses:

- available horizontal space
- editorial headline composition
- proven web conversion and trust patterns
- a more premium modern impression for a trading academy/platform

This affects conversion, trust, and product clarity in web browsing contexts.

## Expected Outcome

When this fix closes, the home should:

- preserve the current mobile experience as the visual and functional baseline
- become a modern web landing page on desktop and laptop widths
- use a web-first hero with stronger content distribution and CTA placement
- transform linear sections into desktop grids, editorial blocks, and clearer card systems
- reduce mobile-app patterns on desktop, especially the fixed bottom navigation
- preserve SSR-first delivery, strong initial performance, and the current route/auth model
