/* eslint-disable @typescript-eslint/naming-convention */
import type {Linter} from 'eslint';

import {WARN, OFF} from '../../constants/index.js';

const IMPORT_RULES: Linter.RulesRecord = {
  'import/no-unresolved': OFF, // Disabled because it's buggy and it also doesn't work with TypeScript
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
