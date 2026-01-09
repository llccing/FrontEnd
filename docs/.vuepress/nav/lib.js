export default {
  nav: { text: 'lib', link: '/lib/' },
  sidebar: {
    '/lib/': [
      '',
      '/lib/vue-cli/',
      {
        text: 'vue 源码解读',
        collapsible: true,
        children: [
          '/lib/vue-analysis/00-vue.md',
          '/lib/vue-analysis/01-flow.md',
          '/lib/vue-analysis/02-src-structure.md',
          '/lib/vue-analysis/03-compile.md',
          '/lib/vue-analysis/04-entry.md',
          '/lib/vue-analysis/10-data-driven.md',
          '/lib/vue-analysis/11-new-Vue.md',
          '/lib/vue-analysis/12-vue-mounted.md',
          '/lib/vue-analysis/13-render.md',
          '/lib/vue-analysis/14-virtual-DOM.md',
          '/lib/vue-analysis/15-createElement.md',
          '/lib/vue-analysis/16-update.md',
          '/lib/vue-analysis/20-components.md'
        ]
      },
      {
        text: 'threejs journey',
        collapsible: true,
        children: [
          '/lib/threejs/00-start/',
          '/lib/threejs/01-hello-world/',
          '/lib/threejs/02-basic-component/',
          '/lib/threejs/03-light/',
          '/lib/threejs/04-material/',
          '/lib/threejs/05-geometry/',
          '/lib/threejs/06-high-geometry/',
          '/lib/threejs/07-praticle/',
          '/lib/threejs/08-import-high-geometry/',
          '/lib/threejs/webgl/'
        ]
      },
      {
        text: 'react journey',
        collapsible: true,
        children: [
          '/lib/react/00-react.md',
          '/lib/react/01-start-project.md'
        ]
      },
      {
        text: 'vuepress',
        collapsible: true,
        children: [
          '/lib/vuepress/01-remark.md'
        ]
      },
      {
        text: 'egg',
        collapsible: true,
        children: [
          '/lib/egg/init.md'
        ]
      },
      {
        text: 'jQuery系列',
        collapsible: true,
        children: [
          '/lib/jquery/'
        ]
      },
      {
        text: 'nestjs',
        collapsible: true,
        children: [
          '/lib/nestjs/01-OAuth_2.0.md',
          '/lib/nestjs/passport/01-general.md',
          '/lib/nestjs/passport/02-providers.md',
          '/lib/nestjs/passport/03-apis.md',
          '/lib/nestjs/passport/04-operations.md'
        ]
      }
    ]
  }
}