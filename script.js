document.addEventListener('DOMContentLoaded', function () {

  /* ========================================
     1) Toggle del menú móvil
     ======================================== */
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

      // Alternar clase .active en el menú
      navMenu.classList.toggle('active');

      // Actualizar atributo ARIA para accesibilidad
      navToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Cerrar menú al hacer clic en un enlace (móvil)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ========================================
     2) Cargar datos de la galería desde JSON
     ======================================== */
  const galeriaSection = document.querySelector('.galeria');

  fetch('/content/galeria.json')
    .then(function (response) {
      if (!response.ok) {
        throw new Error('No se pudo cargar la galería');
      }
      return response.json();
    })
    .then(function (data) {
      const fotos = data && data.fotos ? data.fotos : [];

      // 3) Si no hay fotos o falló la carga: mostrar estado vacío
      if (!fotos || fotos.length === 0) {
        mostrarEstadoVacio();
        return;
      }

      // 4) Renderizar cada foto como figura con GLightbox
      fotos.forEach(function (foto) {
        const figure = document.createElement('figure');
        figure.className = 'foto-item';

        const link = document.createElement('a');
        link.className = 'glightbox';
        link.href = foto.image || '#';
        link.setAttribute('data-gallery', 'portafolio');

        // data-title permite título + HTML opcional en GLightbox
        let tituloHtml = '';
        if (foto.title) {
          tituloHtml += '<strong>' + escapeHtml(foto.title) + '</strong>';
        }
        if (foto.description) {
          if (tituloHtml) tituloHtml += '<br>';
          tituloHtml += escapeHtml(foto.description);
        }
        if (foto.project_link) {
          if (tituloHtml) tituloHtml += '<br>';
          tituloHtml += "<a href='" + escapeHtml(foto.project_link) + "' target='_blank' rel='noopener'>Ver proyecto completo</a>";
        }
        if (tituloHtml) {
          link.setAttribute('data-title', tituloHtml);
        }

        const img = document.createElement('img');
        img.src = foto.image || '';
        img.alt = foto.title ? escapeHtml(foto.title) : 'Fotografía';
        img.loading = 'lazy';

        link.appendChild(img);

        const figcaption = document.createElement('figcaption');

        const h2 = document.createElement('h2');
        h2.textContent = foto.title || 'Sin título';
        figcaption.appendChild(h2);

        if (foto.description) {
          const p = document.createElement('p');
          p.textContent = foto.description;
          figcaption.appendChild(p);
        }

        if (foto.project_link) {
          const enlaceProyecto = document.createElement('a');
          enlaceProyecto.href = foto.project_link;
          enlaceProyecto.target = '_blank';
          enlaceProyecto.rel = 'noopener';
          enlaceProyecto.textContent = 'Ver proyecto completo';
          figcaption.appendChild(enlaceProyecto);
        }

        figure.appendChild(link);
        figure.appendChild(figcaption);

        galeriaSection.appendChild(figure);
      });

      // 5) Inicializar GLightbox tras insertar todas las imágenes
      GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true
      });
    })
    .catch(function (error) {
      console.error('Error cargando la galería:', error);
      mostrarEstadoVacio();
    });

  /* ========================================
     Helper: mostrar mensaje de estado vacío
     ======================================== */
  function mostrarEstadoVacio() {
    if (!galeriaSection) return;

    galeriaSection.innerHTML = '';

    const contenedor = document.createElement('div');
    contenedor.className = 'estado-vacio';

    const parrafo = document.createElement('p');
    parrafo.textContent = 'Aún no hay fotos publicadas';

    contenedor.appendChild(parrafo);
    galeriaSection.appendChild(contenedor);
  }

  /* ========================================
     Helper: escapar HTML para evitar XSS
     ======================================== */
  function escapeHtml(texto) {
    if (!texto) return '';
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
  }

});
