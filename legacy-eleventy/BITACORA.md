# Bitácora del Portafolio de Fotografía - Paz Javiera

## Decisiones tomadas

- **2026-11-16**: Se eligió Eleventy (11ty) como SSG para permitir que el cliente agregue, edite y borre proyectos desde Decap CMS sin tocar código, manteniendo archivos HTML separados generados automáticamente y URLs compartibles.
- **2026-11-16**: Se descartó una plantilla única dinámica para todos los proyectos porque limita la libertad creativa del cliente. Cada proyecto se genera como archivo HTML independiente.
- **2026-11-16**: Se migran las imágenes de `img/` a `images/uploads/` para que Decap CMS pueda gestionar subidas nuevas.
- **2026-11-16**: Se conserva el menú hamburguesa con botón de cierre (X) y fondo con 70% de transparencia en móvil.
- **2026-11-16**: La galería principal muestra solo imágenes con overlay blanco translúcido al hover, mostrando nombre del proyecto y botón 👁 para ver el proyecto completo.

## Cambios efectuados

- **2026-11-16**: Se inicializa proyecto con Eleventy (11ty) y Decap CMS.
- **2026-11-16**: Se crean plantillas: base.njk, project.njk, index.njk.
- **2026-11-16**: Se crean páginas estáticas: biografía, contacto, exposiciones, proyectos.
- **2026-11-16**: Se crean 5 proyectos en Markdown: Mapache, Reptil, Planta, Peludos, Insecto.
- **2026-11-16**: Se configura Decap CMS con colección tipo folder para _projects.
- **2026-11-16**: Se crea BITACORA.md para registrar decisiones y cambios.
