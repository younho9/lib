# @younho9/eslint-plugin

> Personal ESLint plugin with multiple configs

## Installation

Install `@younho9/eslint-plugin` with peerDependencies.

```sh
npx install-peerdeps --dev @younho9/eslint-plugin
```

## Usage

`.eslintrc.js` or `.eslintrc.cjs`

<!-- prettier-ignore-start -->
```js
/** @type {import("@types/eslint").Linter.Config } */
module.exports = {
  root: true,
  extends: [
    'plugin:@younho9/recommended',
  ],
  /** {@link https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration} */
  parserOptions: {
    project: [
      './tsconfig.json',
      './packages/*/tsconfig.json' // if you use monorepo
    ],
    ecmaVersion: 'latest',
  },
  settings: {
    /** {@link https://github.com/import-js/eslint-plugin-import#importparsers} */
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
```
<!-- prettier-ignore-end -->

## Configs

### [recommended](src/configs/recommended.ts)

#### env

- `browser`
- `node`
- `es2021`

#### extends

| configs                                                                                                     | files                             |
| ----------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [eslint:recommended](https://eslint.org/docs/rules/)                                                        | `*`                               |
| [plugin:node/recommended-module](https://github.com/mysticatea/eslint-plugin-node#-configs)                 | `*`                               |
| [plugin:node/recommended-script](https://github.com/mysticatea/eslint-plugin-node#-configs)                 | `*.cjs`                           |
| [plugin:import/recommended](https://github.com/import-js/eslint-plugin-import#installation)                 | `*`                               |
| [plugin:prettier/recommended](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration) | `*`                               |
| [plugin:@younho9/javascript](#javascript)                                                                   | `*.{js,jsx}`                      |
| [plugin:@younho9/jest](#jest)                                                                               | `**/__tests__/**/*.{spec,test}.*` |
| [plugin:@younho9/react](#react)                                                                             | `*.{jsx,tsx}`                     |
| [plugin:@younho9/typescript](#typescript)                                                                   | `*.{ts,tsx}`                      |

#### rules

| name                                                                                                            | Description                                                 | Options                                      |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------- |
| [import/no-unresolved](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md) | Ensure imports point to a file/module that can be resolved. | [`OFF`](src/configs/rules/import.ts#L7)      |
| [import/order](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md)                 | Enforce a convention in module import order.                | [`WARN`](src/configs/rules/import.ts#L8-L17) |

### [javascript](src/configs/javascript.ts)

#### extends

| configs                                                                                | files |
| -------------------------------------------------------------------------------------- | ----- |
| [plugin:jsdoc/recommended](https://github.com/gajus/eslint-plugin-jsdoc#configuration) | `*`   |

### [jest](src/configs/jest.ts)

#### env

- `jest`

#### extends

| configs                                                                                     | files |
| ------------------------------------------------------------------------------------------- | ----- |
| [plugin:jest/recommended](https://github.com/jest-community/eslint-plugin-jest#recommended) | `*`   |
| [plugin:jest/style](https://github.com/jest-community/eslint-plugin-jest#style)             | `*`   |

### [react](src/configs/react.ts)

#### extends

| configs                                                                                                                       | files |
| ----------------------------------------------------------------------------------------------------------------------------- | ----- |
| [plugin:react/recommended](https://github.com/yannickcr/eslint-plugin-react#recommended)                                      | `*`   |
| [plugin:react-hooks/recommended](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#installation) | `*`   |
| [plugin:jsx-a11y/recommended](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#usage)                                     | `*`   |

### [typescript](src/configs/typescript.ts)

#### extends

| configs                                                                                                                                                                        | files |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- |
| [plugin:@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#recommended-configs)                         | `*`   |
| [plugin:@typescript-eslint/recommended-requiring-type-checking](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#recommended-configs) | `*`   |
| [plugin:import/typescript](https://github.com/import-js/eslint-plugin-import#typescript)                                                                                       | `*`   |

#### rules

| name                                                                                                                           | Description                                                         | Options                                |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- | -------------------------------------- |
| [node/no-missing-import](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md)         | disallow `import` declarations which import non-existence modules   | [`OFF`](src/configs/rules/node.ts#L7)  |
| [node/no-missing-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md)       | disallow `require()` expressions which import non-existence modules | [`OFF`](src/configs/rules/node.ts#L8)  |
| [node/no-extraneous-import](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md)   | disallow `import` declarations which import extraneous modules      | [`OFF`](src/configs/rules/node.ts#L9)  |
| [node/no-extraneous-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md) | disallow `require()` expressions which import extraneous modules    | [`OFF`](src/configs/rules/node.ts#L10) |

## License

[MIT](../../LICENSE)
