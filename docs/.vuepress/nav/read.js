export default {
  nav: { text: 'Read', link: '/read/' },
  sidebar: {
    '/read/': [
      // ''空字符串表示当前目录的README文件
      '',
      {
        title: 'CSS世界',
        collapsable: false,
        children: ['./css-world/01-overview', './css-world/02-terminology-concept']
      },
      {
        title: '深入浅出Webpack',
        collapsable: false,
        children: ['./webpack/', './webpack/01']
      }
    ]
  }
}