import { defineConfig } from 'dumi'

export default defineConfig({
  themeConfig: {
    // name: 'G2Plot React',
    logo: 'https://raw.githubusercontent.com/open-data-plan/g2plot-react/master/assets/logo.svg',
    nav: [
      {
        title: 'Guide',
        link: '/guide',
      },
      {
        title: 'API',
        link: '/api',
      },
      {
        title: 'Changelog',
        link: '/changelog',
      },
      {
        title: 'G2Plot',
        link: 'https://g2plot.antv.vision/',
      },
    ],
  },
  locales: [{ id: 'en-US', name: 'English' }],
  resolve: {
    docDirs: ['docs'],
    entryFile: './src/index.ts',
  },
  analytics: {
    ga: 'UA-81696369-2',
  },
  // dynamicImport: {},
  // ssr: {},
  apiParser: {},
  exportStatic: {},
  mfsu: false,
})
