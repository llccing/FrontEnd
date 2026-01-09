export default {
  nav: { text: 'Read', link: '/read/' },
  sidebar: {
    '/read/': [
      // ''空字符串表示当前目录的README文件
      '',
      {
        text: 'CSS世界',
        collapsible: true,
        children: [
          '/read/css-world/01-overview.md',
          '/read/css-world/02-terminology-concept.md'
        ]
      },
      {
        text: '深入浅出Webpack',
        collapsible: true,
        children: [
          '/read/webpack/',
          '/read/webpack/01.md'
        ]
      }
    ]
  }
}