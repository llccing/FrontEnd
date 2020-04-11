const nav = {
  text: 'Blog',
  link: '/blog/',
  items: [
    {
      text: '翻译',
      link: '/blog/translate/'
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
        'jQuery',
        'gzip',
        '2018-dev-guide',
        'for',
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
          'core-js@3, babel and a look into the future',
          'vue-cli-plugin-dev',
          'vue-cli-plugin-typescript-readme',
          'vue-cli-plugin-eslint-readme'
        ].map(item => `./translate/${item}`)
      ]
    },
    {
      title: '那些年我面过的试',
      collapsable: false,
      children: [
        ...['', 'js', 'css'].map(item => `./interview/${item}`)
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