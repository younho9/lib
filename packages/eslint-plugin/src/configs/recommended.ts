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
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['unicorn'],
  rules: {
    ...IMPORT_RULES,
    ...UNICORN_RULES,
  },
};
