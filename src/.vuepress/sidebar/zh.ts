import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/project/': [
    {
      text: 'Go项目',
      icon: 'creative',
      prefix: 'go/',
      // link: 'go/',
      children: 'structure',
    },
    {
      text: 'Java项目',
      icon: 'note',
      prefix: 'java/',
      // link: 'java/',
      children: 'structure',
    },
  ],
  '/coding/': [
    {
      text: 'JAVA',
      icon: 'java',
      prefix: 'java/',
      // link: 'java/',
      children: 'structure',
    },
    {
      text: 'Golang',
      icon: 'golang',
      prefix: 'go/',
      // link: 'go/',
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
})
