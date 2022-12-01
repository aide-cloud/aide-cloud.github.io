import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

export default defineUserConfig({
  base: '/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '梧桐',
      description: 'vuepress-theme-hope 的博客演示',
    },
  },

  theme,

  shouldPrefetch: false,

  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
})
