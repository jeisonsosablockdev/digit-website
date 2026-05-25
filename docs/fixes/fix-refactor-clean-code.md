# Fix: Refactor Clean Code

Last Updated: 2026-05-25 UTC
Status: implemented
Owner: app workflow
Related Solution Artifact: `docs/fixes/fix-refactor-clean-code-implementation.md`

## Current State

- mother branch created: `jeisonsosablockdev/dig-10-fix-refactor-clean-code`
- documentation slice created: `jeisonsosablockdev/dig-10-fix-refactor-clean-code-docs`
- implementation slices have not been opened yet
- all planned slices `S00-S05` were executed and integrated into the mother branch
- `DIG-10` starts after `DIG-8` redesign and Stitch MCP integration were already merged into `develop`

## ES

## Summary

La home pública quedó funcional y visualmente alineada con Stitch, pero el refactor dejó deuda estructural que ahora complica el mantenimiento.

El problema principal no es de diseño ni de entrega inicial crítica. El problema es de clean code y arquitectura local de frontend:

- conviven dos implementaciones de la home dentro del repo
- la navegación móvil quedó duplicada entre la home especial y el shell compartido
- el archivo principal de la home volvió a concentrar demasiadas responsabilidades
- algunos bloques de UI comunican comportamientos que no tienen un contrato real detrás

## Why This Matters

Esto introduce costo operativo inmediato:

- hace más fácil editar el archivo equivocado
- aumenta el riesgo de divergencia visual o funcional entre implementaciones
- vuelve más lento incorporar nuevas mejoras a la home
- incrementa el costo de QA porque el comportamiento real ya no coincide siempre con lo que la UI sugiere

También deja deuda que puede afectar futuras iniciativas:

- refactors de navegación
- evolución del layout mobile-first
- hardening de SEO/performance sobre la home
- trazabilidad de cambios por slice

## Expected Outcome

Al cerrar `DIG-10`, la home debe quedar:

- con una sola source of truth canónica
- con componentes pequeños y de responsabilidad clara
- sin duplicación innecesaria de navegación compartida
- con contratos de comportamiento explícitos para CTAs y bloques interactivos
- con validación explícita sobre LCP, INP, CLS y TTFB después del cleanup

## Initial Scope

Este fix cubre:

- consolidación de la implementación canónica de la home
- limpieza de componentes legacy o duplicados
- recomposición de la home en componentes más pequeños
- deduplicación de navegación entre home y shell
- revisión de contratos UI visibles
- revisión y evidencia de Web Core Vitals sobre la home ya refactorizada
- trazabilidad documental completa antes de abrir slices técnicos

## Non-Goals

Este fix no busca:

- rediseñar la home otra vez
- cambiar copy comercial por razones de marketing
- introducir librerías nuevas de UI por defecto
- reabrir la integración MCP de Stitch como trabajo principal

## Open Questions

Por ahora no hay preguntas bloqueantes de producto.

Las decisiones operativas asumidas son:

- la home tipo Stitch sigue siendo la dirección visual vigente
- `DIG-10` es un fix/refactor de estructura y mantenibilidad
- cualquier cleanup debe preservar SSR-first y no degradar la entrega pública

## EN

## Summary

The public home is functional and visually aligned with Stitch, but the refactor left structural debt that now makes maintenance harder.

The main issue is not design quality or critical first-load delivery. The issue is local frontend architecture and clean code:

- two home implementations now coexist in the repository
- mobile navigation is duplicated between the special home and the shared shell
- the main home file concentrates too many responsibilities again
- some UI blocks suggest behavior that does not have a real contract behind it

## Why This Matters

This creates immediate operational cost:

- it becomes easier to edit the wrong file
- it increases the risk of visual or behavioral drift between implementations
- it slows down future improvements to the home
- it raises QA cost because actual behavior does not always match what the UI suggests

It also leaves debt that can affect future work:

- navigation refactors
- mobile-first layout evolution
- SEO/performance hardening on the home
- slice-level implementation traceability

## Expected Outcome

When `DIG-10` closes, the home should have:

- one canonical source of truth
- small, clear-responsibility components
- no unnecessary duplication of shared navigation
- explicit behavior contracts for CTAs and interactive blocks
- explicit validation notes for LCP, INP, CLS, and TTFB after cleanup

## Initial Scope

This fix covers:

- consolidating the canonical home implementation
- cleaning up legacy or duplicate components
- recomposing the home into smaller components
- deduplicating navigation between the home and the shared shell
- reviewing visible UI behavior contracts
- reviewing and evidencing Web Core Vitals on the refactored home
- complete documentation traceability before technical slices begin

## Non-Goals

This fix does not aim to:

- redesign the home again
- change commercial copy for marketing reasons
- introduce new UI libraries by default
- reopen Stitch MCP integration as the main workstream
