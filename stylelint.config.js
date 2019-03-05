module.exports = {
	extends: "stylelint-config-recommended",
	plugins: [
		"stylelint-declaration-use-variable",
		"stylelint-order"
	],
	rules: {
		"sh-waqar/declaration-use-variable": [ [ "/color/", { ignoreValues: ["transparent", "inherit"] } ] ],
		"order/properties-alphabetical-order": true,
		"indentation": "tab",
		"selector-class-pattern": null,
		"no-eol-whitespace": null,
		"string-quotes": "double",
		"color-hex-case": "lower",
		"color-hex-length": "short",
		"color-named": "never",
		"selector-combinator-space-after": "always",
		"selector-attribute-quotes": "always",
		"selector-attribute-brackets-space-inside": "never",
		"declaration-block-trailing-semicolon": "always",
		"declaration-colon-space-before": "never",
		"declaration-colon-space-after": "always",
		"function-url-quotes": "always",
		"comment-whitespace-inside": "always",
		"comment-empty-line-before": "always",
		"rule-empty-line-before": "always",
		"media-feature-colon-space-after": "always"
	},
};
