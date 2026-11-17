const eleventy = require('@11ty/eleventy');

module.exports = function(eleventyConfig) {
  // Copiar imágenes y assets estáticos
  eleventyConfig.addPassthroughCopy('images');
  
  // Recopilar todos los proyectos para la galería
  eleventyConfig.addCollection('proyectos', function(collection) {
    return collection.getFilteredByGlob('content/proyectos/*.md');
  });

  return {
    dir: {
      input: '.',
      output: '_site'
    },
    templateFormats: ['md', 'njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};
