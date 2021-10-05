import type {Linter} from 'eslint';

export default {
  env: {
    jest: true,
  },
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
} as Linter.Config;
