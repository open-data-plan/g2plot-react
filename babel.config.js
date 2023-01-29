module.exports = {
  presets: [
    '@opd/babel-preset-component',
    require.resolve('@babel/preset-typescript'),
    [
      require.resolve('@babel/preset-react'),
      {
        runtime: 'automatic',
      },
    ],
  ],
  ignore: ['src/.umi/**/*.ts'],
}
