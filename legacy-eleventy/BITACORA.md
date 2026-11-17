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

## 2026-11-17: Migración a Pages CMS + Eleventy (Alternativa 1)

### Decisiones tomadas
- Se elimina completamente TinaCMS y Next.js 14 por problemas de compatibilidad y errores de build persistentes.
- Se mantiene la arquitectura de galería con fotos centradas, overlay blanco translúcido al 30% al hover, y botón 👁 para ver proyecto completo.
- Se mantiene el diseño visual original: paleta neutra, tipografía system-ui, menú hamburguesa móvil con clase .active.
- Se crea rama `pagescms` en GitHub para trabajar de forma aislada.

### Cambios efectuados
- **2026-11-17**: Se eliminan todos los archivos de TinaCMS: `tina/`, `tina.config.ts`, `src/lib/tina.ts`, `src/pages/_app.tsx`, dependencias `tinacms` y `@tinacms/cli`.
- **2026-11-17**: Se elimina Next.js 14 y se instala Eleventy 3.1.8 como SSG.
- **2026-11-17**: Se crea `eleventy.config.js` con colecciones para proyectos.
- **2026-11-17**: Se crea `.pages.yml` con colección de proyectos y páginas estáticas (biografía, contacto, exposiciones).
- **2026-11-17**: Se crean plantillas Eleventy: `base.njk`, `proyecto.njk`, `pagina.njk`.
- **2026-11-17**: Se crean 5 proyectos con sus imágenes: Mapache, Reptil, Planta, Peludos, Insecto.
- **2026-11-17**: Se crean imágenes en `images/uploads/` (copia de las 5 fotos originales).
- **2026-11-17**: Se crea `style.css` y `script.js` con menú hamburguesa y GLightbox.
- **2026-11-17**: `legacy-eleventy/` se mantiene intacto como respaldo del trabajo anterior.

