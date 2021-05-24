module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("static");
	eleventyConfig.addWatchTarget("static");
	eleventyConfig.addPassthroughCopy("posts/img");
	eleventyConfig.addWatchTarget("posts/img");
	return {
		pathPrefix: "/blog/",
	};
};
