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
      text: '生活有感',
      collapsible: true,
      children: [
        '/blog/life/lerna.md',
        '/blog/life/jQuery.md',
        '/blog/life/gzip.md',
        '/blog/life/2018-dev-guide.md',
        '/blog/life/for.md',
        '/blog/life/ci.md',
        '/blog/life/useGulp.md',
        '/blog/life/FrontEndLive.md',
        '/blog/life/architecture.md',
        '/blog/life/vueComponent.md',
        '/blog/life/vue-cli2-to-vue-cli3.md',
        '/blog/life/vue3.md'
      ]
    },
    {
      text: '翻译',
      collapsible: true,
      children: [
        '/blog/translate/',
        '/blog/translate/Top 10 ways to use Interceptors in Angular.md',
        '/blog/translate/what-you-need-know-about-Vue-3-in-2020.md',
        '/blog/translate/core-js@3, babel and a look into the future.md',
        '/blog/translate/vue-cli-plugin-dev.md',
        '/blog/translate/vue-cli-plugin-typescript-readme.md',
        '/blog/translate/vue-cli-plugin-eslint-readme.md',
        '/blog/translate/making-vue-3.md',
      ]
    },
    {
      text: '那些年我面过的试',
      collapsible: true,
      children: [
        '/blog/interview/',
        '/blog/interview/js.md',
        '/blog/interview/css.md'
      ]
    },
    {
      text: '数据结构',
      collapsible: true,
      children: [
        '/blog/dataStructure/'
      ]
    },
    {
      text: '设计模式',
      collapsible: true,
      children: [
        '/blog/design-pattern/',
        '/blog/design-pattern/OOP.md',
        '/blog/design-pattern/validateForm.md'
      ]
    },

  ]
}

export default {
  nav,
  sidebar
}