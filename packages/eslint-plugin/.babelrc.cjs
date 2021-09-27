const BABEL_ENV = process.env.BABEL_ENV;
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
        useReact: false,
        addModuleExports: true,
      },
    ],
  ];

  return {
    presets,
  };
};
