module.exports = function (eleventyConfig) {
  // Passthrough copy para archivos estáticos
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("images/uploads");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("admin");

  // Ignorar archivos que no son páginas
  eleventyConfig.ignores.add("BITACORA.md");
  eleventyConfig.ignores.add("img/boceto.md");
  eleventyConfig.ignores.add("legacy-eleventy/**");
  eleventyConfig.ignores.add("legacy-eleventy/**");

  // Colección de proyectos desde _projects
  eleventyConfig.addCollection("projects", function (collection) {
    return collection.getFilteredByGlob("_projects/*.md").sort(function (a, b) {
      return a.data.order - b.data.order;
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix: "/"
  };
};
