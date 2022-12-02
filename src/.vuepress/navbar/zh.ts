import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  '/',
  { text: '编码笔记', icon: 'discover', link: '/coding/' },
  {
    text: '项目工程',
    icon: 'edit',
    prefix: '/project/',
    children: [
      {
        text: 'Go项目',
        icon: 'edit',
        prefix: 'go/',
        children: [
          { text: 'Gin框架', icon: 'edit', link: 'gin_new' },
          'kratos_new',
          // { text: 'Kratos框架', icon: 'edit', link: 'kratos_new' },
        ],
      },
      {
        text: 'Java项目',
        icon: 'edit',
        prefix: 'java/',
        children: [
          {
            text: 'SpringBoot项目',
            icon: 'edit',
            link: '1',
          },
        ],
      },
    ],
  },
])
