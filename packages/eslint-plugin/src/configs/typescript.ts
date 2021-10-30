import type {Linter} from 'eslint';

import {NODE_RULES, TSDOC_RULES} from './rules/index.js';

const typescript: Linter.Config = {
  parser: '@typescript-eslint/parser',
  plugins: ['eslint-plugin-tsdoc'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
  ],
  rules: {
    ...NODE_RULES,
    ...TSDOC_RULES,
  },
};

export default typescript;
