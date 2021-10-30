/* eslint-disable @typescript-eslint/naming-convention */
import type {Linter} from 'eslint';

import {ERROR} from '../../constants/index.js';

const UNICORN_RULES: Linter.RulesRecord = {
  'unicorn/prefer-module': ERROR,
};

export default UNICORN_RULES;
