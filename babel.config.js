const BABEL_ENV = process.env.BABEL_ENV;
const isCJS = BABEL_ENV !== undefined && BABEL_ENV === 'cjs';
const isESM = BABEL_ENV !== undefined && BABEL_ENV === 'esm';

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
      },
    ],
  ];

  return {
    presets,
  };
};
