# Fix Implementation: Landing Home Modularizacion Hardening SEO Performance

Last Updated: 2026-05-19 UTC
Status: planned
Owner: app workflow
Related Problem Artifact: `docs/fixes/fix-landing-home-modularizacion-hardening-seoperformance.md`
Linear Issue: `DIG-8`
Mother Branch: `jeisonsosablockdev/dig-8-fix-landing-home-modularizacion-hardening-seoperformance`
Documentation Slice: `fix/docs-landing-home-modularizacion-hardening-seoperformance-dig-8-s00-documentation`

## Current State

- mother branch created
- documentation slice created
- landing is still monolithic in `app/page.tsx`
- current SEO/performance validation is structural and does not directly cover first-load risk

## ES

## Summary

Este artefacto describe la solución para `DIG-8`: corregir la home pública combinando modularización server-first con endurecimiento explícito de la entrega inicial.

La implementación no debe limitarse a “mover JSX a componentes”. Debe dejar la home más mantenible y al mismo tiempo reducir riesgo real sobre SEO, LCP, CLS, JS inicial y recursos bloqueantes.

## Goal

Implementar el fix para que:

- `app/page.tsx` quede como ensamblador SSR legible
- las secciones del landing vivan en componentes independientes y de responsabilidad clara
- la home preserve copy, jerarquía semántica y dirección visual actuales
- no se agreguen límites `use client` innecesarios
- la estrategia de fuentes/iconografía y carga inicial quede revisada
- la validación deje evidencia útil sobre la carga inicial y la home pública

## Non-Goals

- reescribir el sistema de diseño
- cambiar el copy de negocio
- agregar librerías pesadas de runtime para la home
- convertir este fix en una re-arquitectura del sitio completo

## Implementation Strategy

La iniciativa se ejecutará en slices porque combina documentación, frontend, QA y trazabilidad.

Orden:

1. documentación base y trazabilidad
2. modularización del landing
3. hardening de SEO/performance inicial
4. QA, evidencia responsive y validaciones finales

## Atomic Slice Plan

| Slice | Branch | Objective | Scope | Tests First | Validation | Exit Gate |
| --- | --- | --- | --- | --- | --- | --- |
| S00 | `fix/docs-landing-home-modularizacion-hardening-seoperformance-dig-8-s00-documentation` | Crear artefactos base y traceability | `docs/fixes/*`, `docs/features/*` | No | `npm run validate:docs-governance` | Artefactos problem/solution presentes |
| S01 | `fix/app-landing-home-modularizacion-hardening-seoperformance-dig-8-s01-home-structure` | Separar home en componentes SSR | `app/page.tsx`, `components/**`, tests asociados | Sí | `npm test`, `npm run build` | Home modular y sin regresión funcional |
| S02 | `fix/app-landing-home-modularizacion-hardening-seoperformance-dig-8-s02-seo-performance-hardening` | Endurecer carga inicial y validación | `app/layout.tsx`, `scripts/ci/validate-seo-performance.js`, docs y tests asociados | Sí | `npm test`, `npm run validate:seo-performance`, `npm run build` | Riesgos críticos revisados y gate reforzado |
| S03 | `fix/app-landing-home-modularizacion-hardening-seoperformance-dig-8-s03-qa-evidence` | Ejecutar QA responsive, Playwright y cierre | `e2e/**`, evidencia y docs de traceability | Sí cuando aplique | `npm run test:e2e`, `npm run validate` | Frontend cycle cerrado sin bloqueantes |

## Slice Dependencies And Merge Order

- `S00` debe existir antes de cualquier slice de implementación.
- `S01` depende de `S00`.
- `S02` depende de `S01`.
- `S03` depende de `S01` y `S02`.
- cada slice mergea de vuelta a la mother branch
- el PR final a `develop` solo ocurre cuando la mother branch integra todos los slices aprobados

## Technical Decisions

- La home seguirá siendo server component.
- No se introducirá `use client` para resolver una separación puramente estructural.
- `SiteShell` permanece como shell compartido.
- `app/page.tsx` conservará metadata y un único `<h1>`.
- Las secciones del landing se extraerán a componentes de presentación sin lógica cliente.
- Se revisará el uso de la hoja externa de `Material Symbols` en `app/layout.tsx` por su posible impacto en la ruta crítica.
- El hardening de performance se enfocará primero en:
  - recursos bloqueantes
  - riesgo de CLS
  - LCP candidate del hero
  - mantener JS inicial mínimo
- Si se endurece `validate:seo-performance`, el cambio será incremental y orientado a reglas reproducibles del repo, no a promesas imposibles de CWV reales en CI.

## Tests-First Plan

### S01 Home Structure

- actualizar o añadir test de render para la home si hace falta validar composición
- mantener Playwright mínimo de render/CTA para la home
- verificar que la separación a componentes no cambia el `<h1>` ni la CTA principal

### S02 SEO/Performance Hardening

- añadir pruebas del validador si cambia la lógica de `validate-seo-performance`
- comprobar que la home sigue pasando build y reglas SEO base
- revisar explícitamente metadata, `use client`, fuentes, iconografía e imágenes

### S03 QA Evidence

- ejecutar Playwright sobre la home
- validar widths `320`, `375`, `768`, `1024`
- registrar resultado de overflow, CTA visible y estabilidad visual básica
- cerrar con `npm run validate` y `npm run validate:orchestration`

## Docs And Traceability

- mantener este artefacto y el problem artifact sincronizados
- actualizar al menos una note bajo `docs/features/*.md`
- documentar mother branch, slices y commits en Linear
- si el hardening cambia reglas compartidas de performance del repo, actualizar también `docs/governance/seo-performance-policy.md`

## EN

## Summary

This artifact defines the `DIG-8` solution: fix the public home by combining server-first modularization with explicit hardening of initial delivery behavior.

The implementation should not stop at “move JSX into components.” It must leave the home easier to maintain while also reducing real risk around SEO, LCP, CLS, initial JavaScript, and blocking resources.

## Goal

Implement the fix so that:

- `app/page.tsx` becomes a readable SSR assembler
- landing sections live in isolated, clear-purpose components
- the home preserves current copy, semantic hierarchy, and visual direction
- no unnecessary `use client` boundaries are introduced
- font/iconography and first-load strategy are explicitly reviewed
- validation leaves useful evidence about first-load behavior on the public home

## Technical Defaults

- the home remains a server component
- `SiteShell` remains the shared shell
- `app/page.tsx` keeps route metadata and exactly one `<h1>`
- component extraction stays presentation-only unless a real interaction requires otherwise
- performance hardening focuses first on blocking resources, CLS risk, the hero LCP candidate, and minimal initial JavaScript
