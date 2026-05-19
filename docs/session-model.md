# Session Model

Last Updated: 2026-05-19 UTC

## Current State

- No existe almacenamiento de sesion en la version inicial.
- El render actual es SSR estatico para una capa publica de rutas marketing.
- La homepage se mantiene dentro del baseline SEO/performance sin introducir estado de sesion en cliente.
- Las rutas publicas nuevas comparten una navegacion server-rendered y no introducen almacenamiento local, cookies ni estado de autenticacion.
- `DIG-8` mantiene ese modelo: la modularizacion del landing y el hardening de performance no agregan sesion, persistencia local ni transiciones de confianza en frontend.

## Notes

- Cualquier introduccion futura de cookies, tokens o sesiones de usuario debe documentarse aqui.
