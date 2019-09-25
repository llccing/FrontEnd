const blogEcmascript = {
  title: 'ES2015',
  children: [
    '',
    // 'Async',
    'function-extension',
    'Generator',
    'Iterator-for...of',
    'let-const',
    'number-extension',
    'object-extension',
    'Promise',
    'Proxy-Reflect',
    'Set-Map',
    'String-extension',
    'Symbol',
    'variable-destructor-assignment',
  ].map((item) => `./ECMAScript6/${item}`),
};

const blogThreejs = {
  title: 'threejs journey',
  children: ['00-start', '01-hello-world', '02-basic-component', '03-light', '04-material', '05-geometry', '06-high-geometry', '07-praticle', '08-import-high-geometry', 'webgl'].map(
    (item) => `./threejs/${item}/`,
  ),
};

const blogVue = {
  title: 'vue 源码被解读',
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
  ].map((item) => `./vue-analysis/${item}`),
};

const blogReact = {
  title: 'react journey',
  children: ['00-react', '01-start-project'].map((item) => {
    return `./react/${item}`;
  }),
};

const blogVuepress = {
  title: 'vuepress',
  children: ['01-remark'].map(item => `./vuepress/${item}`)
}

const blogFramework = {
  title: 'framework',
  children: ['', 'jQuery'].map(item => `./framework/${item}`)
}

const blogOther = ['for', 'why', 'vueComponent'].map(item => `./other/${item}`)

module.exports = {
  title: '千里',
  description: 'just do it! ',
  base: '/FrontEnd/',
  serviceWorker: true,
  // theme: 'vue',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Blog',
        link: '/blog/',
      },
      {
        text: 'Read',
        link: '/read/',
      },
      {
        text: 'About',
        link: '/about/',
      },
    ],
    sidebar: {
      '/blog/': ['', ...blogOther, blogEcmascript, blogThreejs, blogVue, blogReact, blogVuepress, blogFramework],
      '/read/': [
        // ''空字符串表示当前目录的README文件
        '',
        {
          title: 'CSS世界',
          children: ['./css-world/01-overview', './css-world/02-terminology-concept'],
        },
      ],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': 'assets',
      },
    },
  },
};
