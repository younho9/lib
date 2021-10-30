import type {Linter} from 'eslint';

const jest: Linter.Config = {
  env: {
    jest: true,
  },
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
};

export default jest;
