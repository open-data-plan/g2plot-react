// For building on vercel: https://github.com/Automattic/node-canvas/issues/1779
if (
  process.env.LD_LIBRARY_PATH == null ||
  !process.env.LD_LIBRARY_PATH.includes(
    `${process.env.PWD}/node_modules/canvas/build/Release:`
  )
) {
  process.env.LD_LIBRARY_PATH = `${
    process.env.PWD
  }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`
}

export default {
  mode: 'site',
  title: 'G2Plot React',
  logo: 'https://raw.githubusercontent.com/open-data-plan/g2plot-react/master/assets/logo.svg',
  resolve: {
    includes: ['docs'],
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/open-data-plan/g2plot-react',
    },
    {
      title: 'Changelog',
      path: 'https://github.com/open-data-plan/g2plot-react/blob/master/CHANGELOG.md',
    },
    {
      title: 'G2Plot',
      path: 'https://g2plot.antv.vision/',
    },
  ],
  analytics: {
    ga: 'UA-81696369-2',
  },
  dynamicImport: {},
  // ssr: {},
  exportStatic: {},
}
