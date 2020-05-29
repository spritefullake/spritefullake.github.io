module.exports = {

};

const CleanCSS = require("clean-css");
function cssmin(code) {
    return new CleanCSS({}).minify(code).styles;
}
module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("cssmin", cssmin);
    eleventyConfig.setPugOptions({
        filters: {
            cssmin
        }
    });

    eleventyConfig.dir = {
        // ⚠️ These values are both relative to your input directory.
        includes: "_includes",
        layouts: "_layouts"
    };
    return eleventyConfig;
};