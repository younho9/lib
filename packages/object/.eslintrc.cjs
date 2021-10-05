/** @type {import("@types/eslint").Linter.Config } */
module.exports = {
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          object: false,
        },
        extendDefaults: true,
      },
    ],
  },
};
