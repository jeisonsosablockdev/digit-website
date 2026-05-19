# Fix: Landing Home Modularizacion Hardening SEO Performance

Last Updated: 2026-05-19 UTC
Status: planned
Owner: app workflow
Related Solution Artifact: `docs/fixes/fix-landing-home-modularizacion-hardening-seoperformance-implementation.md`

## Current State

- mother branch created: `jeisonsosablockdev/dig-8-fix-landing-home-modularizacion-hardening-seoperformance`
- documentation slice created: `fix/docs-landing-home-modularizacion-hardening-seoperformance-dig-8-s00-documentation`
- landing implementation still lives mostly in `app/page.tsx`
- SEO/performance validation exists, but it is mostly structural today

## ES

## Summary

La home pública de DIGIT tiene dos problemas conectados.

El primero es de mantenibilidad: la mayor parte del landing sigue concentrada en un solo archivo grande, con muchas secciones inline, datos mezclados con presentación y poca separación por bloques funcionales.

El segundo es de entrega inicial: aunque el repo ya tiene metadata, `robots`, `sitemap` y un gate básico de SEO/performance, todavía no existe una capa suficientemente fuerte para proteger la carga inicial, la ruta crítica de render y el riesgo de regresión sobre Core Web Vitals.

## Why This Matters

Esta combinación vuelve más costoso cambiar la home y más fácil degradar la experiencia pública sin que el sistema lo bloquee a tiempo.

Hoy el proyecto sí protege ciertas reglas base:

- SSR por defecto en rutas públicas
- metadata válida
- `robots` y `sitemap`
- evitar `use client` innecesario
- evitar `img` crudo y `script` crudo en superficies públicas

Pero todavía deja huecos importantes:

- no se mide ni presupone el impacto sobre LCP
- no existe una verificación real de riesgo para CLS
- no hay control directo sobre TTFB
- no hay una revisión suficientemente dura sobre recursos bloqueantes en la carga inicial
- la home sigue siendo demasiado grande para evolucionar con seguridad

## Expected Outcome

Al cerrar `DIG-8`, la home debe quedar:

- separada en componentes server-first de propósito claro
- con `app/page.tsx` reducido a un ensamblador legible
- sin introducir `use client` innecesario
- con estrategia explícita sobre fuentes, iconografía, hero y carga crítica
- con validaciones y evidencia suficientes para reducir riesgo de regresión en SEO/performance inicial

## Initial Scope

Este fix cubre:

- modularización del landing principal
- preservación de copy y dirección visual existentes
- endurecimiento de superficies SEO/performance de la home
- revisión de fuentes e iconografía en la ruta crítica
- actualización de artefactos y trazabilidad requeridos por el repo

## Non-Goals

Este fix no busca:

- rediseñar la home
- cambiar la propuesta comercial o el copy de negocio
- introducir interactividad cliente nueva si no hace falta
- rehacer toda la estrategia global del sitio fuera de la home y sus dependencias inmediatas

## Open Questions

Por ahora no quedan preguntas bloqueantes de producto.

La implementación puede asumir:

- mantener el diseño y la semántica actuales
- tratar el trabajo como fix de home pública
- elevar la exigencia de performance sin convertir el cambio en una re-arquitectura completa

## EN

## Summary

The public DIGIT home has two connected problems.

The first is maintainability: most of the landing still lives inside one large file, with many inline sections, content data mixed with presentation, and very limited separation by functional block.

The second is initial delivery quality: while the repo already has metadata, `robots`, `sitemap`, and a basic SEO/performance gate, it still lacks a strong enough layer to protect first load, critical render path behavior, and Core Web Vitals regression risk.

## Why This Matters

This makes the home harder to change and easier to regress without the system blocking the issue early enough.

The project already protects some baseline rules:

- SSR by default on public routes
- valid metadata
- `robots` and `sitemap`
- no unnecessary `use client`
- no raw `img` or raw `script` on public surfaces

But major gaps still remain:

- there is no LCP-oriented measurement or budget
- there is no direct CLS risk verification
- there is no direct TTFB control
- there is no strong enough review of blocking first-load resources
- the home is still too large to evolve safely

## Expected Outcome

When `DIG-8` closes, the home should be:

- split into clear server-first components
- reduced in `app/page.tsx` to a readable assembler
- free of unnecessary `use client` boundaries
- explicit about font, iconography, hero, and critical-load strategy
- backed by validation and evidence that reduce first-load SEO/performance regression risk

## Initial Scope

This fix covers:

- modularization of the main landing
- preservation of the current copy and visual direction
- hardening of home SEO/performance surfaces
- review of fonts and iconography on the critical path
- required documentation artifacts and traceability updates

## Non-Goals

This fix does not aim to:

- redesign the home
- change the commercial positioning or marketing copy
- add new client-side interactivity unless it is necessary
- rework the entire site strategy beyond the home and its immediate dependencies
