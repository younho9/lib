import type {Linter} from 'eslint';

export default {
  extends: ['plugin:jsdoc/recommended'],
  settings: {
    jsdoc: {
      mode: 'typescript',
    },
  },
} as Linter.Config;
