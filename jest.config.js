module.exports = {
  preset: '@opd/jest-preset-pangu',
  setupFiles: [
    'jest-canvas-mock',
    './__tests__/setups/worker.js',
    './__tests__/setups/url.js',
  ],
  transformIgnorePatterns: ['/node_modules/!d3-*', '/src/.umi/'],
  collectCoverageFrom: [
    './src/**/*.{ts,tsx}',
    '!./**/*.d.ts',
    '!src/.umi/**/*.ts',
  ],
  coverageReporters: ['json', 'text', 'lcov', 'clover', 'cobertura'],
  testEnvironment: 'jsdom',
  globals: {
    IS_REACT_ACT_ENVIRONMENT: true,
  },
}
