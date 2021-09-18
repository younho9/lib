module.exports = {
  root: true,
  extends: ['plugin:@younho9/recommended'],
  parserOptions: {
    project: [
      './tsconfig.eslint.json',
      './tsconfig.json',
      './packages/*/tsconfig.json',
    ],
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ['*.jsx'],
      extends: ['plugin:@younho9/react'],
    },
    {
      files: ['*.ts'],
      extends: ['plugin:@younho9/typescript'],
    },
    {
      files: ['*.tsx'],
      extends: ['plugin:@younho9/react', 'plugin:@younho9/typescript'],
    },
  ],
};
