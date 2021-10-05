import type {Linter} from 'eslint';

import {ERROR} from '../../constants/index.js';

export default {
  'unicorn/prefer-module': ERROR,
} as Linter.RulesRecord;
