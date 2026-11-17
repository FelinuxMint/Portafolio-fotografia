---
title: Portafolio de Fotografía - Paz Javiera
layout: base.njk
---

<h1>Portafolio de Fotografía</h1>
<p>Imágenes capturadas con mirada propia.</p>

<div class="fotos-grid">
  {% for foto in collections.proyectos %}
  <figure class="foto-item">
    <div class="foto-overlay">
      <span class="proyecto-nombre">{{ foto.data.title }}</span>
      <a href="/proyectos/{{ foto.data.slug }}/" class="btn-ver-proyecto" aria-label="Ver proyecto {{ foto.data.title }}">👁</a>
    </div>
    <a href="{{ foto.data.featuredImage }}" class="glightbox" data-gallery="portafolio">
      <img src="{{ foto.data.featuredImage }}" alt="{{ foto.data.title }}" loading="lazy">
    </a>
  </figure>
  {% endfor %}
</div>
