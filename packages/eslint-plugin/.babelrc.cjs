/** @type {import("@types/babel__core").ConfigFunction} */
module.exports = function (api) {
  const isDev = api.env('development');

  const presets = [
    [
      '@younho9/babel-preset',
      {
        development: isDev,
        isCJS: true,
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
