module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	rules: {
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'error',
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				enums: 'always-multiline',
				tuples: 'always-multiline',
				generics: 'always-multiline',
				functions: 'never',
			},
		],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true,
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false,
				},
			},
		],
	},
};
