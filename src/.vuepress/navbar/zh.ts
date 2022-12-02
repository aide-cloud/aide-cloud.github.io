import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  '/',
  { text: '编码笔记', icon: 'debug', link: '/coding/' },
  {
    text: '项目工程',
    icon: 'launch',
    prefix: '/project/',
    // link: '/project/',
    children: [
      {
        text: 'Go项目',
        icon: 'hot',
        prefix: 'go/',
        children: [
          { text: 'Gin框架', icon: '', link: 'gin', prefix: 'gin/' },
          'kratos',
          // { text: 'Kratos框架', icon: 'edit', link: 'kratos_new' },
        ],
      },
    ],
  },
])
