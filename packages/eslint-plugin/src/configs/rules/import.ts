import {WARN} from '../../constants/index.js';

export default {
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
