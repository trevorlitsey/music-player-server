modules.exports = {
	extends: 'airbnb-base',
	plugins: ['import'],
	rules: {
		'comma-dangle': [
			'always-multiline',
			{
				functions: 'ignore',
			},
		],
	},
};
