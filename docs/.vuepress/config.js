module.exports = {
  title: '千里',
  description: 'just do it! ',
  base: '/FrontEnd/',
  // serviceWorker: true,
  // theme: 'vue',
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/llccing/FrontEnd',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'CSS', link: '/css/' },
      { text: 'JS', link: '/js/' },
      { text: 'lib', link: '/lib/' },
      { text: 'Read', link: '/read/' },
      { text: 'About', link: '/about/' },
    ],
    sidebar: {
      '/blog/': [
        '',
        {
          title: '生活有感',
          collapsable: false,
          children: [
            'lerna',
            'SegmentFault',
            'jQuery',
            'gzip',
            '我的第一家公司',
            '国庆节',
            '病',
            '2018-dev-guide',
            'for',
            'calc-dev-time',
            'ci',
            'useGulp',
            'FrontEndLive',
            'architecture',
            'vueComponent',
            'vue-cli2-to-vue-cli3',
          ].map(item => `./life/${item}`),
        },
        {
          title: '那些年我面过的试',
          collapsable: false,
          children: [
            ...['', 'js', 'css'].map(item => `./interview/${item}`),
            ...['toutiao'].map(item => `./interview/company/${item}`),
          ],
        },
        {
          title: '数据结构',
          collapsable: false,
          children: [...[''].map(item => `./dataStructure/${item}`)],
        },
        {
          title: '设计模式',
          collapsable: false,
          children: [...['', 'OOP', 'validateForm'].map(item => `./design-pattern/${item}`)],
        },
      ],
      '/read/': [
        // ''空字符串表示当前目录的README文件
        '',
        {
          title: 'CSS世界',
          collapsable: false,
          children: ['./css-world/01-overview', './css-world/02-terminology-concept'],
        },
        {
          title: '深入浅出Webpack',
          collapsable: false,
          children: ['./webpack/', './webpack/01'],
        },
      ],
      '/css/': [
        '',
        'rem',
        'selector',
        'inline-block',
        'Block-Formatting-Context',
        'flex',
        'grid',
        'layout',
        'responsive-web-design',
      ],
      '/js/': [
        '',
        {
          title: 'ES2015',
          collapsable: false,
          children: [
            '',
            // 'Async',
            'let-const',
            'function-extension',
            'Generator-async',
            'Generator',
            'Iterator-for...of',
            'number-extension',
            'object-extension',
            'Promise',
            'Proxy-Reflect',
            'Set-Map',
            'String-extension',
            'Symbol',
            'variable-destructor-assignment',
          ].map(item => `./ECMAScript6/${item}`),
        },
        {
          title: 'basic',
          collapsable: false,
          children: [
            'apply-call',
            'ajax',
            'arguments',
            'calc-box-size',
          ].map(item => `./basic/${item}`),
        },
      ],
      '/lib/': [
        '',
        {
          title: 'vue 源码被解读',
          collapsable: false,
          children: [
            '00-vue',
            '01-flow',
            '02-src-structure',
            '03-compile',
            '04-entry',
            '10-data-driven',
            '11-new-Vue',
            '12-vue-mounted',
            '13-render',
            '14-virtual-DOM',
            '15-createElement',
            '16-update',
            '20-components',
          ].map(item => `./vue-analysis/${item}`),
        },
        {
          title: 'threejs journey',
          collapsable: false,
          children: [
            '00-start',
            '01-hello-world',
            '02-basic-component',
            '03-light',
            '04-material',
            '05-geometry',
            '06-high-geometry',
            '07-praticle',
            '08-import-high-geometry',
            'webgl',
          ].map(item => `./threejs/${item}/`),
        },
        {
          title: 'react journey',
          collapsable: false,
          children: ['00-react', '01-start-project'].map(item => {
            return `./react/${item}`
          }),
        },
        {
          title: 'vuepress',
          collapsable: false,
          children: ['01-remark'].map(item => `./vuepress/${item}`),
        },
        {
          title: 'egg',
          collapsable: false,
          children: ['./egg/init'],
        },
        {
          title: 'jQuery系列',
          collapsable: false,
          children: ['./jquery/'],
        },
      ],
    },
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-132988469-1',
      },
    ],
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine',
        options: {
          el: '#valine-vuepress-comment',
          appId: 'BymNe0K8Dh17KslJuDuLyGup-gzGzoHsz',
          appKey: 'Kex32glbNP9h5sLL81rTiWGm',
        },
      },
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          return moment(timestamp)
            .utcOffset('+08:00')
            .format('YYYY-MM-DD HH:mm:SS')
        },
      },
    ],
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@img': 'assets',
      },
    },
  },
}
