module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:eslint-comments/recommended',
	],
	parserOptions: {
		ecmaVersion: 8,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
	plugins: [
		'import',
	],
	rules: {
		semi: ['error', 'always'],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		quotes: ['error', 'single', { avoidEscape: true }],
		'quote-props': ['error', 'as-needed'],
		'no-console': [
			'error',
			{
				allow: Object.keys(console).filter(prop => prop !== 'log'),
			},
		],
		'operator-linebreak': [
			'error',
			'after',
		],
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'never',
			},
		],
		'no-use-before-define': 'error',
		'eslint-comments/no-unused-disable': 'error',
		'object-curly-spacing': [
			'error',
			'always',
			{
				arraysInObjects: false,
				objectsInObjects: false,
			},
		],
		'array-bracket-spacing': [
			'error',
			'never',
		],
		'import/order': [
			'error',
			{
				alphabetize: {
					order: 'asc',
					caseInsensitive: false,
				},
				'newlines-between': 'always',
				pathGroups: [
					{
						pattern: 'react',
						group: 'builtin',
						position: 'before',
					},
				],
				pathGroupsExcludedImportTypes: [
					'react',
				],
				groups: [
					[
						'builtin',
						'external',
					],
					[
						'internal',
					],
					[
						'parent',
						'sibling',
						'index',
						'object',
					],
				],
			},
		],
	},
	env: {
		'shared-node-browser': true,
		commonjs: true,
	},
};
