# Fix: Home Clean Code And Visual Glow Polish

Last Updated: 2026-05-25 UTC
Status: completed
Owner: app workflow
Related Solution Artifact: `docs/fixes/fix-home-clean-code-and-visual-glow-polish-implementation.md`

## Current State

- mother branch created: `jeisonsosablockdev/dig-11-fix-home-clean-code-and-visual-glow-polish`
- documentation slice created: `fix/docs-home-clean-code-and-visual-glow-polish-dig-11-s00-documentation`
- implementation slices `S01-S03` executed and merged back into the mother branch
- final documentation traceability slice `S04` is closing the initiative state
- `DIG-11` started on top of `develop` after `DIG-10` cleanup was merged

## ES

## Summary

La home pública quedó estructuralmente más limpia después de `DIG-10`, pero persisten tres grupos de issues que ya justifican un fix pequeño en slices:

- un detalle de clean code: el ensamblador de la home todavía conserva una `section` vacía
- un detalle de diseño de API interna: el menú móvil compartido expone una abstracción demasiado dependiente de clases CSS
- dos huecos visuales frente a la referencia Stitch: falta el glow morado sutil en la sección de manifiesto y falta iluminación detrás de ciertos cards de arquitectura

## Why This Matters

Aunque son ajustes acotados, tocan una superficie pública crítica del producto.

Si no se corrigen:

- el ensamblador de la home sigue teniendo ruido innecesario
- la abstracción de navegación compartida sigue siendo más frágil de lo deseado
- la fidelidad visual respecto a la referencia aprobada se mantiene incompleta

Esto afecta mantenibilidad, coherencia visual y claridad del código en una ruta altamente visible.

## Expected Outcome

Al cerrar `DIG-11`, la home debe quedar:

- sin la `section` vacía en el ensamblador
- con una API más semántica para el menú móvil compartido
- con el glow morado sutil en la sección de manifiesto
- con iluminación de fondo detrás de los cards `Performance System` y `Library Intelligence`
- con validación visual y técnica suficiente para no introducir regresiones

## Initial Scope

Este fix cubre:

- limpieza puntual del ensamblador de la home
- refactor pequeño de la navegación móvil compartida
- polish visual en `ManifestoSection`
- polish visual en `ArchitectureSection`
- trazabilidad documental y feature note para el fix

## Non-Goals

Este fix no busca:

- rediseñar la home
- reabrir la arquitectura completa de `DIG-10`
- cambiar copy de negocio
- introducir nueva interactividad cliente

## Open Questions

No hay preguntas bloqueantes de producto.

Se asume:

- la referencia visual aportada por el usuario es la fuente de verdad para el ajuste de glows
- el fix debe preservar la estructura SSR-first ya consolidada

## EN

## Summary

The public home is structurally cleaner after `DIG-10`, but three issue groups still justify a small sliced fix:

- one clean-code issue: the home assembler still contains an empty `section`
- one internal API design issue: the shared mobile menu exposes an abstraction that still leaks CSS details
- two visual gaps against the approved Stitch reference: a missing subtle purple glow in the manifesto section and missing backlighting behind specific architecture cards

## Why This Matters

Even though these are scoped adjustments, they affect a critical public surface.

If left unresolved:

- the home assembler keeps unnecessary noise
- the shared navigation abstraction remains more fragile than desired
- visual fidelity against the approved reference remains incomplete

This affects maintainability, visual consistency, and code clarity on a highly visible route.

## Expected Outcome

When `DIG-11` closes, the home should:

- remove the empty `section` from the assembler
- expose a more semantic shared mobile-menu API
- include the subtle purple glow in the manifesto section
- include background illumination behind the `Performance System` and `Library Intelligence` cards
- keep enough visual and technical validation to avoid regressions

## Initial Scope

This fix covers:

- targeted cleanup of the home assembler
- a small refactor of shared mobile navigation
- visual polish in `ManifestoSection`
- visual polish in `ArchitectureSection`
- documentation traceability and the related feature note

## Non-Goals

This fix does not aim to:

- redesign the home
- reopen the full `DIG-10` architecture
- change product copy
- introduce new client-side interactivity

## Open Questions

There are no blocking product questions.

Assumptions:

- the user-provided visual reference is the source of truth for the glow adjustments
- the fix must preserve the existing SSR-first structure
