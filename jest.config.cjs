/** @type {import("@jest/types").Config.InitialOptions } */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^@younho9/(.*)$': '<rootDir>/packages/$1/src',
  },
  testEnvironment: 'node',
  verbose: true,
  testPathIgnorePatterns: ['\\.test-d\\.ts'],
};
