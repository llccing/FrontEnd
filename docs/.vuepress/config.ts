import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import navConfig from './nav/index.js'
import markdownItTaskLists from 'markdown-it-task-lists'

const { nav, sidebar } = navConfig

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Rowan Liu\'s Tech',
  description: 'just do it! ',
  base: '/FrontEnd/',

  // 配置 head 标签
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],

  // 配置打包工具
  bundler: viteBundler(),

  // 配置主题
  theme: defaultTheme({
    // v1 的 themeConfig 内容移到这里
    navbar: nav,
    sidebar: sidebar,
    repo: 'llccing/FrontEnd',
    lastUpdated: true,
    lastUpdatedText: 'Last Updated',
  }),

  // Markdown 配置
  extendsMarkdown: (md) => {
    md.use(markdownItTaskLists)
  },

  // 插件配置
  plugins: [
    googleAnalyticsPlugin({
      id: 'UA-132988469-1'
    }),
  ],
})
