import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/': [
    {
      text: '如何使用',
      icon: 'creative',
      prefix: 'guide/',
      link: 'guide/',
      children: 'structure',
    },
    {
      text: '文章',
      icon: 'note',
      prefix: 'posts/',
      children: 'structure',
    },
    'intro',
    'slides',
  ],
  '/coding/': [
    {
      text: 'JAVA',
      icon: 'java',
      prefix: 'java/',
      link: 'java/',
      children: 'structure',
    },
    {
      text: 'Golang',
      icon: 'golang',
      prefix: 'go/',
      link: 'go/',
      children: 'structure',
    },
    {
      text: 'Python',
      icon: 'python',
      prefix: 'python/',
      link: 'python/',
      children: 'structure',
    },
  ],
  '/demo1/': [
    {
      text: '如何使用',
      icon: 'creative',
      prefix: 'guide/',
      link: 'guide/',
      children: 'structure',
    },
    {
      text: '文章',
      icon: 'note',
      prefix: 'posts/',
      children: 'structure',
    },
  ],
})
