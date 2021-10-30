/* eslint-disable @typescript-eslint/naming-convention */
import type {Linter} from 'eslint';

import {WARN} from '../../constants/index.js';

const IMPORT_RULES: Linter.RulesRecord = {
  'import/order': [
    WARN,
    {
      'newlines-between': 'always',
      'alphabetize': {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
};

export default IMPORT_RULES;
