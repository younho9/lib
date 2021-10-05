/** @type {import("@types/eslint").Linter.Config } */
module.exports = {
  root: true,
  extends: ['./packages/eslint-plugin/dist/configs/recommended'],
  parserOptions: {
    project: ['./tsconfig.json', './packages/*/tsconfig.json'],
    ecmaVersion: 'latest',
  },
  overrides: [
    {
      files: ['*.jsx'],
      extends: ['./packages/eslint-plugin/dist/configs/react'],
    },
    {
      files: ['*.ts'],
      extends: ['./packages/eslint-plugin/dist/configs/typescript'],
    },
    {
      files: ['*.tsx'],
      extends: [
        './packages/eslint-plugin/dist/configs/react',
        './packages/eslint-plugin/dist/configs/typescript',
      ],
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: 'packages/*/tsconfig.json',
      },
    },
  },
};
