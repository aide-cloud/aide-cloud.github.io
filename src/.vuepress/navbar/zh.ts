import {navbar} from 'vuepress-theme-hope'

export const zhNavbar = navbar([
    '/',
    {
        text: '后端笔记',
        icon: 'debug',
        link: '/coding/',
        children: [
            {text: 'Java', link: '/coding/java/', icon: 'java'},
            {text: 'Golang', link: '/coding/go/', icon: 'Goyuyan'},
        ],
    },
    {
        text: '前端笔记',
        icon: 'code',
        prefix: '/frontend/',
        children: [
            {text: 'Vue', icon: 'Vue', link: 'vue/'},
            {text: 'React', icon: 'react', link: 'react/'},
        ],
    },
    {
        text: '项目工程',
        icon: 'launch',
        prefix: '/project/',
        link: '/project/',
        children: [
            {text: 'Go项目', icon: 'hot', link: 'go/',},
        ],
    },
    {
        text: '容器',
        icon: 'rongqi',
        prefix: '/container/',
        link: '/container/',
        children: [
            {text: 'Docker', icon: 'docker', link: 'docker/'},
        ],
    }
])
