import type {Linter} from 'eslint';

import {NODE_RULES} from './rules/index.js';

const typescript: Linter.Config = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
  ],
  rules: {
    ...NODE_RULES,
  },
};

export default typescript;
