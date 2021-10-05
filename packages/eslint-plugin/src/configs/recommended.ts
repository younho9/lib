import type {Linter} from 'eslint';

import {IMPORT_RULES, UNICORN_RULES} from './rules/index.js';

const ignorePatterns = ['**/dist/*'];

export default {
  ignorePatterns,
  parserOptions: {
    ecmaVersion: 2021,
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
      extends: ['plugin:@younho9/javascript'],
    },
    {
      files: ['*.cjs'],
      extends: ['plugin:@younho9/javascript', 'plugin:node/recommended-script'],
    },
    {
      files: ['*.jsx'],
      extends: ['plugin:@younho9/javascript', 'plugin:@younho9/react'],
    },
    {
      files: ['*.ts'],
      extends: ['plugin:@younho9/typescript'],
    },
    {
      files: ['*.tsx'],
      extends: ['plugin:@younho9/typescript', 'plugin:@younho9/react'],
    },
    {
      files: ['**/__tests__/**/*.{spec,test}.*'],
      extends: ['plugin:@younho9/jest'],
    },
  ],
} as Linter.Config;
