const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPassthroughCopy("static");
	eleventyConfig.addWatchTarget("static");
	eleventyConfig.addPassthroughCopy("posts/img");
	eleventyConfig.addWatchTarget("posts/img");
	return {
		pathPrefix: "/blog/",
	};
};
