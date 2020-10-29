const CleanCSS = require("clean-css");
function cssmin(code) {
    return new CleanCSS({}).minify(code).styles;
}
function characterCount(content) {
    return content.split("").length;
}
module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("cssmin", cssmin);
    eleventyConfig.addFilter("characterCount", characterCount);
    eleventyConfig.setPugOptions({
        filters: {
            cssmin,
            characterCount,
        }
    });

    eleventyConfig.dir = {
        // ⚠️ These values are both relative to your input directory.
        includes: "_includes",
        layouts: "_layouts"
    };
    //create a posts key for the collections object
    //which pulls everything from the ./posts directory
    eleventyConfig.addCollection("posts",
        collection => collection
            .getAllSorted()
            .filter(item => item.url
                && item.inputPath.startsWith("./posts")));

    eleventyConfig.addCollection("pages",
        collection => collection
            .getAllSorted()
            .filter(item => item.url
                && item.inputPath.startsWith("./pages")));

    return eleventyConfig;
};