/* eslint-disable @typescript-eslint/naming-convention */
import type {Linter} from 'eslint';

import {OFF} from '../../constants/index.js';

const NODE_RULES: Linter.RulesRecord = {
  'node/no-missing-import': OFF,
  'node/no-missing-require': OFF,
  'node/no-extraneous-import': OFF,
  'node/no-extraneous-require': OFF,
};

export default NODE_RULES;
