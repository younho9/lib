import type {Linter} from 'eslint';

const javascript: Linter.Config = {
  extends: ['plugin:jsdoc/recommended'],
  settings: {
    jsdoc: {
      mode: 'typescript',
    },
  },
};

export default javascript;
