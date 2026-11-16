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
     2) Inicializar GLightbox para la galería
     ======================================== */
  // Se configura para abrir las imágenes en tamaño completo
  // con navegación táctil, ciclo continuo y selector por clase.
  GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true
  });

});
