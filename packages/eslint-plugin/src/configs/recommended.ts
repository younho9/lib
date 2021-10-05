import {IMPORT_RULES, UNICORN_RULES} from './rules/index.js';

const ignorePatterns = ['**/dist/*'];

export default {
  ignorePatterns,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended-module',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['unicorn'],
  rules: {
    ...IMPORT_RULES,
    ...UNICORN_RULES,
  },
  overrides: [
    {
      files: ['*.js'],
      extends: ['plugin:jsdoc/recommended'],
    },
    {
      files: ['*.jsx'],
      extends: ['plugin:@younho9/react', 'plugin:jsdoc/recommended'],
    },
    {
      files: ['*.ts'],
      extends: ['plugin:@younho9/typescript'],
    },
    {
      files: ['*.tsx'],
      extends: ['plugin:@younho9/react', 'plugin:@younho9/typescript'],
    },
    {
      files: ['**/__tests__/**/*.{spec,test}.*'],
      env: {
        jest: true,
      },
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
    },
  ],
};
