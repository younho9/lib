/** @type {import("@jest/types").Config.InitialOptions } */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testPathIgnorePatterns: ['\\.test-d\\.ts'],
};
