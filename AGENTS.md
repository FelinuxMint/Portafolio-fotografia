# AGENTS.md — Portafolio Fotografía

## Objetivo del proyecto
Portafolio fotográfico mantenible para un usuario no técnico, priorizando simplicidad operativa, bajo acoplamiento y control local. *(Nota: El proyecto no utiliza ni utilizará Netlify como plataforma de despliegue).*

## Reglas de oro (No negociables)
1. **Respaldo intacto:** Nunca modifiques, muevas ni borres `legacy-eleventy/`.
2. **Plan antes de ejecutar:** En tareas de limpieza, arquitectura o multiarchivo, propone primero el plan exacto y espera confirmación antes de editar/borrar.
3. **Alcance acotado:** Resuelve exactamente lo pedido en el turno actual. No hagas refactorizaciones masivas ni cambios no solicitados.
4. **Rama de trabajo aislada:** Realiza pruebas o migraciones en una rama nueva (ej. `feat/pages-cms-git`). Nunca hagas *push* forzado ni alteres la rama base anterior ni `legacy-eleventy/`.

## Directrices de Desarrollo y Arquitectura
- **Gestión de Contenido:** Pages CMS y Git (`.pages.yml`). Está estrictamente prohibido reintroducir dependencias o flujos de TinaCMS.
- **Hosting / Despliegue:** Proyecto agnóstico de hosting (sin Netlify).
- **Componentes Globales y Plantillas Nunjucks:** Si un elemento en layouts compartidos (`_includes/base.njk`) es exclusivo de una página (ej. subtítulo "Obra" en el logotipo), utilizar condicionales de Nunjucks (`{% if page.url == '/' or page.url == '/index.html' %}`) para evitar renderizarlo en páginas secundarias (Biografía, Contacto, etc.).
- Valida siempre con compilación local (`npm run build`) antes de dar por buena una tarea.

## Eficiencia y eficacia de tokens
- **Lectura dirigida:** Inspecciona primero solo los archivos y carpetas relevantes a la tarea (`package.json`, archivos de configuración, rutas afectadas). Evita recorrer carpetas pesadas, `node_modules`, `legacy-eleventy/` o archivos binarios/imágenes si no hace falta.
- **Respuestas concisas:** Ve al grano. Resume hallazgos clave, rutas exactas y próximos pasos sin relleno.
- **Cambios por incrementos:** Aplica cambios en bloques pequeños y verificables. Si algo falla, reporta el error exacto y la corrección mínima antes de seguir.

## Verificación mínima antes de cerrar una tarea
- Indicar qué archivos se crearon, modificaron o eliminaron.
- Ejecutar o indicar la comprobación correspondiente (build local).
- Listar explícitamente cualquier paso manual pendiente en paneles externos (GitHub, Cloudinary, CMS).

## Gestión de tokens y límites de cuota (Free Tier — 250k TPM)
Para evitar errores de `Quota exceeded` (límite de 250,000 tokens de entrada por minuto):
1. **Un paso a la vez:** Ejecuta como máximo 1 tarea o bloque de cambios por turno. No encadenes múltiples auditorías, ediciones y builds masivos en una sola respuesta.
2. **Lectura quirúrgica:** Lee únicamente los archivos estrictamente necesarios para el paso actual. Nunca leas carpetas completas ni archivos pesados, lockfiles (`package-lock.json`), builds (`_site/`, `public/`, `.next/`), `node_modules/` o `legacy-eleventy/`.
3. **Búsquedas acotadas:** Usa `grep` o listados puntuales en lugar de leer archivos enteros cuando solo necesites verificar una ruta o variable.
4. **Salidas de consola breves:** Al ejecutar comandos (`npm run build`, `git status`, `ls`), muestra solo el resumen del resultado o las líneas de error relevantes, evitando volcar logs extensos al contexto.
5. **Pausa tras errores de límite:** Si ocurre un error de cuota o alta demanda, detente y resume el estado actual en 3 líneas para continuar en el siguiente turno sin reintentar en bucle.
