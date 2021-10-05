import type {Linter} from 'eslint';

import {WARN} from '../../constants/index.js';

export default {
  'node/no-missing-import': WARN,
} as Linter.RulesRecord;
