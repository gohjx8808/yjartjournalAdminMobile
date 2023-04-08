module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["tsconfig.json"],
	},
	plugins: ["react", "react-native"],
	rules: {
		"@typescript-eslint/explicit-function-return-type": "off",
		"react/react-in-jsx-scope": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
