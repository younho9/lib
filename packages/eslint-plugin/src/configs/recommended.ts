import {IMPORT_RULES} from './rules';

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
  rules: {
    ...IMPORT_RULES,
  },
};
