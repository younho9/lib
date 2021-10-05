import type {Linter} from 'eslint';

import {WARN} from '../../constants/index.js';

export default {
  'tsdoc/syntax': WARN,
} as Linter.RulesRecord;
