module.exports = {
	extends: 'airbnb',
	plugins: [
		'jsdoc',
	],
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'jsdoc/check-param-names': 'error',
		'jsdoc/check-types': 'error',
		'jsdoc/newline-after-description': 'error',
		'jsdoc/require-description-complete-sentence': 'error',
		'jsdoc/require-param': 'error',
		'jsdoc/require-param-name': 'error',
		'jsdoc/require-param-type': 'error',
		'jsdoc/require-returns-type': 'error',
		'jsx-quotes': ['error', 'prefer-single'],
		'max-len': ['error', 120],
		'no-tabs': 'off',
		'react/jsx-filename-extension': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'valid-jsdoc': ['error', {
			matchDescription: '^(?!\\[.*description\\])',
			requireParamDescription: false,
			requireReturnDescription: false,
			prefer: {
				arg: 'param',
				argument: 'param',
				returns: 'return',
			},
			preferType: {
				array: 'Array',
				bool: 'boolean',
				Bool: 'boolean',
				Boolean: 'boolean',
				event: 'Event',
				float: 'number',
				int: 'number',
				Number: 'number',
				Object: 'Object',
				ReactComponent: 'React.Component',
				ReactElement: 'React.Element',
				ReactNode: 'React.Node',
				String: 'string',
				Undefined: 'undefined',
			},
		}],
	},
};
