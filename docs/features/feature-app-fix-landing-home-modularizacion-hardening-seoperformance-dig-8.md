# App Landing Home Fix DIG-8

Last Updated: 2026-05-19 UTC

## Summary

`DIG-8` corrige la home pública de DIGIT con dos objetivos conectados:

- modularizar el landing actual para que deje de vivir como un bloque monolítico
- endurecer la estrategia de SEO/performance inicial para reducir riesgo en carga crítica

## Mother Issue

- Issue: `DIG-8`
- Mother branch: `jeisonsosablockdev/dig-8-fix-landing-home-modularizacion-hardening-seoperformance`

## Active Slice

- Slice: `fix/app-landing-home-modularizacion-hardening-seoperformance-dig-8-s01-home-structure`
- Objective: modularizar la home en componentes SSR, eliminar dependencia externa de iconografía y dejar QA responsive ejecutable en el repo

## Notes

- El detalle del problema vive en `docs/fixes/fix-landing-home-modularizacion-hardening-seoperformance.md`.
- El detalle de implementación vive en `docs/fixes/fix-landing-home-modularizacion-hardening-seoperformance-implementation.md`.
- Esta note existe para cumplir el gate actual de `docs/features` y como capa compartida de trazabilidad.
- `S00` ya dejó creados los artefactos base y esta slice implementa la primera entrega técnica del fix.
