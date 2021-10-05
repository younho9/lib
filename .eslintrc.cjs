/** @type {import("@types/eslint").Linter.Config } */
module.exports = {
  root: true,
  extends: ['./packages/eslint-plugin/dist/configs/recommended'],
  /** @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration */
  parserOptions: {
    project: ['./tsconfig.json', './packages/*/tsconfig.json'],
    ecmaVersion: 'latest',
  },
  settings: {
    /** @see https://github.com/import-js/eslint-plugin-import#importparsers */
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    /** @see  https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration */
    'import/resolver': {
      typescript: {
        project: 'packages/*/tsconfig.json',
      },
    },
  },
};
