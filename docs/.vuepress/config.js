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
        text: 'Knowledge',
        link: '/knowledge/',
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
      '/blog/': ['why'],
      '/knowledge/': [
        '',
        {
          title: 'ECMAScript6',
          children: [
            './ECMAScript6/',
            './ECMAScript6/Async',
            './ECMAScript6/function-extension',
            './ECMAScript6/Generator',
            './ECMAScript6/Iterator-for...of',
            './ECMAScript6/let-const',
            './ECMAScript6/number-extension',
            './ECMAScript6/object-extension',
            './ECMAScript6/Promise',
            './ECMAScript6/Proxy-Reflect',
            './ECMAScript6/Set-Map',
            './ECMAScript6/String-extension',
            './ECMAScript6/Symbol',
            './ECMAScript6/variable-destructor-assignment',
          ]
        },
      ],
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
}
