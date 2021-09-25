const {ERROR} = require('@younho9/eslint-plugin/constants');

module.exports = {
  rules: {
    '@typescript-eslint/ban-types': [
      ERROR,
      {
        types: {
          object: false,
        },
        extendDefaults: true,
      },
    ],
  },
};
