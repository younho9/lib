/** @type {import("@types/eslint").Linter.Config } */
module.exports = {
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          object: false,
          Function: false,
        },
        extendDefaults: true,
      },
    ],
  },
};
