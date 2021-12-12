module.exports = {
	extends: [
		'plugin:react/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		'@typescript-eslint',
	],
	rules: {
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: [
					'.tsx',
				],
			},
		],
	},
	settings: {
		react: {
			pragma: 'React',
		},
	},
};
