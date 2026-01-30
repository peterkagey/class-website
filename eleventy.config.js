import { IdAttributePlugin, InputPathToUrlTransformPlugin, HtmlBasePlugin } from "@11ty/eleventy";
// import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";

import pluginFilters from "./_config/filters.js";
import markdownItFootnote from "markdown-it-footnote";
import markdownIt from "markdown-it";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function(eleventyConfig) {
	eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if (data.draft) {
      data.title = `${data.title} (draft)`;
    }

		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});

  const mdLib = markdownIt({ html: true });
  eleventyConfig.setLibrary("md", mdLib);

	eleventyConfig.addCollection("proof_techniques", function(collectionApi) {
		return collectionApi.getFilteredByGlob("content/F25/MAT4111A/proof_techniques/*.md");
	});

	eleventyConfig.addPairedShortcode("md", (content) => {
    return mdLib.render(content);
  });

  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
	eleventyConfig
		.addPassthroughCopy({"./public/": "/"})
		.addPassthroughCopy("./content/feed/pretty-atom-feed.xsl")
		.addPassthroughCopy("./content/**/*.tex")
		.addPassthroughCopy("./content/assets/**/*.png")
		.addPassthroughCopy("./content/assets/**/*.glb")
		.addPassthroughCopy("./content/assets/*.jpeg")
		.addPassthroughCopy("./content/assets/favicon.svg")
		.addPassthroughCopy({ "node_modules/@mathjax": "vendor/mathjax" })
		.addPassthroughCopy({"content/assets/_global": "assets"})
		.addPassthroughCopy("./css/index-2026-01-30.css")
		.addPassthroughCopy({"node_modules/prismjs/themes/prism.min.css": "css/prism.css"})
	;
	eleventyConfig.addWatchTarget("css/**/*.css");
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpg,jpeg,gif}");
	eleventyConfig.addBundle("css", {
		toFileDirectory: "dist",
		bundleHtmlContentFromSelector: "style",
	});
	eleventyConfig.addBundle("js", {
		toFileDirectory: "dist",
		bundleHtmlContentFromSelector: "script",
	});
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
	eleventyConfig.addPlugin(pluginFilters);

	eleventyConfig.addPlugin(IdAttributePlugin, {
	});

	eleventyConfig.addFilter("dueDate", function (dateObj) {
    const d = new Date(dateObj);

	  const weekday = ["Su", "M", "Tu", "W", "Th", "F", "Sa"][d.getUTCDay()];
    const month   = d.toLocaleDateString("en-US", { timeZone: "UTC", month: "2-digit" });
		const day     = d.toLocaleDateString("en-US", { timeZone: "UTC", day: "2-digit" });

    return `${weekday}, ${month}/${day}`;
  });

	eleventyConfig.amendLibrary("md", mdLib => {
  	mdLib.use(markdownItFootnote);
	})
};

export const config = {
	templateFormats: [
		"md",
		"njk",
		"html",
		"liquid",
		"11ty.js",
	],
	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk",
	dir: {
		input: "content",
		includes: "../_includes",
		data: "../_data",
		output: "_site"
	},
};
