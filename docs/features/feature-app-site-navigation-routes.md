# App Site Navigation Routes

Last Updated: 2026-05-18 UTC

## Summary

Se agregan las rutas publicas base del sitio y una navegacion principal funcional para recorrerlas sin introducir contenido adicional ni logica cliente.

## Routes

- `/`
- `/metodo-digit`
- `/plataforma`
- `/academia`
- `/biblioteca`
- `/membresia`
- `/elite`
- `/recursos`
- `/iniciar-sesion`

## Notes

- Todas las rutas nuevas son SSR y se sirven como placeholders en blanco.
- La navegacion principal queda compartida entre la home y las paginas publicas nuevas.
- `iniciar-sesion` sigue siendo solo una ruta placeholder; no implementa auth en esta fase.
- En mobile y tablet el header usa una sola fila compacta con trigger de menu, marca y CTA `Empieza`.
- `Empieza` enlaza a `/iniciar-sesion` como estado de sesion no autenticada.
- La home ajusta el ancho del hero en pantallas pequenas para evitar overflow horizontal durante la navegacion responsive.
