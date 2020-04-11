module.exports = {
  nav: { text: 'lib', link: '/lib/' },
  sidebar: {
    '/lib/': [
      '',
      {
        title: 'Vue CLI源码探索',
        collapsable: false,
        children: [
          '01-project',
          '02-cli',
          '03-cli-create',
          '04-cli-add',
          '05-cli-invoke',
          '06-cli-inspect',
          '07-vscode-debugger',
          '08-cli-serve',
          '09-cli-build',
          '11-cli-init',
          '12-cli-config',
          '13-cli-outdated',
          '14-cli-upgrade',
          '15-cli-migrate',
          '16-cli-info',
          '17-cli-<command>',
          '18-cli-help',
          '19-test',
          '20-plugin',
          '21-plugin-vuex',
          '22-plugin-router',
          '23-plugin-babel',
          '24-plugin-typescript',
          '25-plugin-eslint',
          '99-cli-shared-utils',
        ].map(item => `./vue-cli/${item}`)
      },
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
          '20-components'
        ].map(item => `./vue-analysis/${item}`)
      },
      {
        title: 'threejs journey',
        collapsable: true,
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
          'webgl'
        ].map(item => `./threejs/${item}/`)
      },
      {
        title: 'react journey',
        collapsable: true,
        children: ['00-react', '01-start-project'].map(item => {
          return `./react/${item}`
        })
      },
      {
        title: 'vuepress',
        collapsable: true,
        children: ['01-remark'].map(item => `./vuepress/${item}`)
      },
      {
        title: 'egg',
        collapsable: true,
        children: ['./egg/init']
      },
      {
        title: 'jQuery系列',
        collapsable: true,
        children: ['./jquery/']
      }
    ]
  }
}