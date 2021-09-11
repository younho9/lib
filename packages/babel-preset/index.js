import {declare} from '@babel/helper-plugin-utils';

export default declare((api, opts) => {
  api.assertVersion(7);

  const {
    development = false,
    useTypescript = false,
    useReact = false,
    isCJS = false,
    isESM = false,
  } = opts;

  const config = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: isCJS ? 'commonjs' : false,
          targets: {
            esmodules: isESM,
          },
        },
      ],
      useReact && [
        '@babel/preset-react',
        {
          development,
          runtime: 'automatic',
        },
      ],
      useTypescript && [
        '@babel/preset-typescript',
        {
          onlyRemoveTypeImports: true,
        },
      ],
    ].filter(Boolean),
    plugins: ['@babel/plugin-proposal-class-properties'].filter(Boolean),
  };

  return config;
});
