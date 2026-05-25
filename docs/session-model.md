# Session Model

Last Updated: 2026-05-25 UTC

## Current State

- No existe almacenamiento de sesion en la version inicial.
- El render actual es SSR estatico para una capa publica de rutas marketing.
- La homepage se mantiene dentro del baseline SEO/performance sin introducir estado de sesion en cliente.
- Las rutas publicas nuevas comparten una navegacion server-rendered y no introducen almacenamiento local, cookies ni estado de autenticacion.
- `DIG-8` mantiene ese modelo: la modularizacion del landing y el hardening de performance no agregan sesion, persistencia local ni transiciones de confianza en frontend.
- El rediseño Stitch-inspired de `redesign-ui` solo reorganiza contenido y jerarquia visual en componentes SSR; no introduce `localStorage`, cookies, tokens, hydration state de sesion ni dependencias cliente para identidad.
- La version mas fiel al export de Stitch sigue siendo una experiencia publica SSR: los botones, campos y la bottom nav son solo superficies de navegacion o captura visual, no un contenedor de sesion ni una fuente de autoridad cliente.

## Notes

- Cualquier introduccion futura de cookies, tokens o sesiones de usuario debe documentarse aqui.
