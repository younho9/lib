# @younho9/babel-preset

> Sharable set of Babel plugins and config options

## Usage

Install `@younho9/babel-preset` with peerDependencies.

```sh
npx install-peerdeps --dev @younho9/babel-preset
```

Add `babel` key to your `package.json` or [babel configuration file](https://babeljs.io/docs/en/config-files#configuration-file-types). (ex. `babel.config.json`)

```json
{
  // ...
  "babel": {
    "presets": [
      [
        "@younho9/babel-preset",
        {
          "development": false,
          "isCJS": false,
          "isESM": true,
          "useTypescript": true,
          "useReact": true,
          "addModuleExports": false
        }
      ]
    ]
  }
  // ...
}
```

## Options

### `development`

`boolean`, defaults to `false`.

This toggles behavior specific to development for `@babel/preset-react`, such as adding `__source` and `__self`.

- https://babeljs.io/docs/en/babel-preset-react#development

### `isCJS`

`boolean`, defaults to `false`.

This is whether to use `commonjs` among `commonjs` or `false (esmodule)` module system options.

- https://babeljs.io/docs/en/babel-preset-env#modules

### `isESM`

`boolean`, defaults to `false`.

This toggles whether to target browsers that support `esmodule`.

- https://babeljs.io/docs/en/babel-preset-env#targetsesmodules

### `useTypescript`

`boolean`, defaults to `false`.

This toggles whether or not `@babel/preset-typescript` are used.

### `useReact`

`boolean`, defaults to `false`.

This toggles whether or not `@babel/preset-react` are used.

### `addModuleExports`

`boolean`, defaults to `false`.

This toggles whether or not `babel-plugin-add-module-exports` are used.

- https://www.npmjs.com/package/babel-plugin-add-module-exports

## License

[MIT](../../LICENSE)
