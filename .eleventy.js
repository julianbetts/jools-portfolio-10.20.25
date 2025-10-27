module.exports = function(eleventyConfig) {
    // Copy assets directly to output
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("styles.css");
    eleventyConfig.addPassthroughCopy("app.js");
  
    return {
      dir: {
        input: "src",        // Where your content files are
        includes: "_includes", // Where your templates/layouts are
        output: "_site"      // Where 11ty outputs the built site
      }
    };
  };