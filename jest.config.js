module.exports = {
  preset: '@opd/jest-preset-pangu',
  setupFiles: ['jest-canvas-mock'],
  transformIgnorePatterns: ['/node_modules/', '/src/.umi/'],
  collectCoverageFrom: [
    './src/**/*.{ts,tsx}',
    '!./**/*.d.ts',
    '!src/.umi/**/*.ts',
  ],
}
