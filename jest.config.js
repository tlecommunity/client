module.exports = {
  // A list of paths to directories that Jest should use to search for files in
  // https://jestjs.io/docs/configuration#roots-arraystring
  roots: ['<rootDir>/lib/'],

  // The test environment that will be used for testing, jsdom for browser environment
  // https://jestjs.io/docs/configuration#testenvironment-string
  testEnvironment: 'jsdom',

  // Jest transformations
  // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files using ts-jest
  },

  // Code coverage config
  // https://jestjs.io/docs/configuration#collectcoveragefrom-array
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: ['<rootDir>/lib/**/*.{ts,tsx}', '!**/node_modules/**', '!**/*.d.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/lib/__utils__/', '<rootDir>/node_modules/'],

  verbose: true,
  testTimeout: 30000,

  testPathIgnorePatterns: ['/__utils__/'],

  clearMocks: true,
};
