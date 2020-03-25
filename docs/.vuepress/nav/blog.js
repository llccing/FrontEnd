const nav = {
  text: 'Blog',
  link: '/blog/',
  items: [
    {
      text: '生活有感',
      link: '/blog/life/我的第一家公司.html'
    },
    {
      text: '翻译',
      link: '/blog/translate/'
    },
    {
      text: '那些年',
      link: '/blog/interview/'
    },
    {
      text: '数据结构',
      link: '/blog/dataStructure/'
    },
    {
      text: '设计模式',
      link: '/blog/design-pattern/'
    }
  ]
}

const sidebar = {
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
        'vue3'
      ].map(item => `./life/${item}`)
    },
    {
      title: '翻译',
      collapsable: false,
      children: [
        ...[
          '',
          'what-you-need-know-about-Vue-3-in-2020',
          'core-js@3, babel and a look into the future'
        ].map(item => `./translate/${item}`)
      ]
    },
    {
      title: '那些年我面过的试',
      collapsable: false,
      children: [
        ...['', 'js', 'css'].map(item => `./interview/${item}`),
        ...['toutiao'].map(item => `./interview/company/${item}`)
      ]
    },
    {
      title: '数据结构',
      collapsable: false,
      children: [...[''].map(item => `./dataStructure/${item}`)]
    },
    {
      title: '设计模式',
      collapsable: false,
      children: [...['', 'OOP', 'validateForm'].map(item => `./design-pattern/${item}`)]
    },

  ]
}

module.exports = {
  nav,
  sidebar
}