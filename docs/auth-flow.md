# Auth Flow

Last Updated: 2026-05-25 UTC

## Current State

- La app inicial es un landing SSR en Next.js App Router.
- Existen rutas publicas SSR para Inicio, Metodo DIGIT, Plataforma, Academia, Biblioteca, Membresia, Elite, Recursos e Iniciar sesion.
- No existe autenticacion, sesion ni panel protegido en esta fase.
- Los CTAs visibles son de presentacion y no ejecutan login.
- La ruta `/iniciar-sesion` existe solo como placeholder visual y todavia no implementa credenciales ni flujo de acceso.
- La home publica ahora incorpora baseline inicial de metadata, robots y sitemap como parte del delivery frontend.
- `DIG-8` modulariza la home publica y endurece la entrega inicial sin introducir cambios de autenticacion, cookies, tokens ni decisiones de autoridad en cliente.
- La rama `redesign-ui` reemplaza la narrativa visual de la home con una composicion mobile-first inspirada en Stitch, pero mantiene la misma naturaleza publica SSR y no agrega formularios, credenciales, callbacks de auth ni almacenamiento de identidad.
- La iteracion actual de `redesign-ui` aproxima la home al export de Stitch de forma mucho mas literal, incluyendo top app bar, slider hero, CTA stack, secciones editoriales y bottom nav visual, sin convertir ninguno de esos controles en auth real.
- El fix `home-web-modern-layout` transforma la lectura desktop de la home hacia una landing web moderna, pero conserva intactos los limites de confianza: no agrega formularios de login reales, tokens, cookies, callbacks de proveedor ni middleware de autorizacion.
- La navegacion superior desktop y los CTA visibles siguen apuntando a rutas publicas o placeholders SSR; `/iniciar-sesion` continua siendo una superficie de entrada visual sin credenciales ni intercambio de identidad.

## Notes

- Cuando aparezca auth real, este documento debe registrar el flujo completo y sus limites de confianza.
