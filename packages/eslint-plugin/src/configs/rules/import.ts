import {WARN} from '../../constants/rule-values';

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
