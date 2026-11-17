document.addEventListener('DOMContentLoaded', function () {

  /* ========================================
     1) Toggle del menú móvil
     ======================================== */
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

      navMenu.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', !isExpanded);
    });

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
  GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true
  });

});
