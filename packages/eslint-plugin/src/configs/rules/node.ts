import type {Linter} from 'eslint';

import {OFF} from '../../constants/index.js';

export default {
  'node/no-missing-import': OFF,
  'node/no-missing-require': OFF,
  'node/no-extraneous-import': OFF,
  'node/no-extraneous-require': OFF,
} as Linter.RulesRecord;
