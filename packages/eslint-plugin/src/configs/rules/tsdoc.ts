/* eslint-disable @typescript-eslint/naming-convention */
import type {Linter} from 'eslint';

import {WARN} from '../../constants/index.js';

const TSDOC_RULES: Linter.RulesRecord = {
  'tsdoc/syntax': WARN,
};

export default TSDOC_RULES;
