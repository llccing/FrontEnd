const { nav, sidebar } = require('./nav/index.js')
module.exports = {
  title: '千里',
  description: 'just do it! ',
  base: '/',
  // serviceWorker: true,
  // theme: 'vue',
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/llccing/FrontEnd',
    nav,
    sidebar
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-132988469-1'
      }
    ],
    // [
    //   'vuepress-plugin-comment',
    //   {
    //     choosen: 'valine',
    //     options: {
    //       el: '#valine-vuepress-comment',
    //       appId: 'BymNe0K8Dh17KslJuDuLyGup-gzGzoHsz',
    //       appKey: 'Kex32glbNP9h5sLL81rTiWGm',
    //     },
    //   },
    // ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          return moment(timestamp)
            .utcOffset('+08:00')
            .format('YYYY-MM-DD HH:mm:SS')
        }
      }
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@img': 'assets'
      }
    }
  }
}
