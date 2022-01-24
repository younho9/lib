const {env} = require('process');

const {BABEL_ENV} = env;
const isCJS = BABEL_ENV !== undefined && BABEL_ENV === 'cjs';
const isESM = BABEL_ENV !== undefined && BABEL_ENV === 'esm';

/** @type {import("@types/babel__core").ConfigFunction} */
module.exports = function (api) {
	const isDev = api.env('development');

	const presets = [
		[
			'@younho9/babel-preset',
			{
				development: isDev,
				isCJS,
				isESM,
				useTypescript: true,
				useReact: true,
				addModuleExports: false,
			},
		],
	];

	const ignore = [
		'**/*.spec.js',
		'**/*.spec.ts',
		'**/*.spec.jsx',
		'**/*.spec.tsx',
		'**/*.test.js',
		'**/*.test.ts',
		'**/*.test-d.ts',
		'**/*.test.jsx',
		'**/*.test.tsx',
	];

	return {
		presets,
		ignore,
	};
};
