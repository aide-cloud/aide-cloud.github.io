import {navbar} from 'vuepress-theme-hope'

export const zhNavbar = navbar([
    '/',
    {
        text: '后端笔记',
        icon: 'debug',
        link: '/coding/',
        prefix: '/coding/',
        children: [
            {text: 'Golang', link: 'go/', icon: 'Goyuyan'},
            {text: 'Java', link: 'java/', icon: 'java'},
            {text: 'Python', link: 'python/', icon: 'python'},
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
            {text: 'K8s', icon: 'kubernetes', link: 'k8s/'},
        ],
    },
    {
        text: '基础设施',
        icon: 'jichusheshi',
        prefix: '/infrastructure/',
        link: '/infrastructure/',
        children: [
            {text: 'Linux',icon: 'linux',link: 'linux/'},
            {text: 'Nginx',icon: 'nginx',link: 'nginx/'},
            {text: 'Mysql',icon: 'MySQL',link: 'mysql/'},
            {text: 'Redis',icon: 'redis',link: 'redis/'},
            {text: 'MQ',icon: 'MQ',link: 'mq/'},
        ],
    },
    {
        text: '数据结构与算法',
        icon: 'lujing',
        prefix: '/struct/',
        link: '/struct/',
        children: [
            {text: '数据结构', icon: 'shujujiegou-01', link: 'struct/'},
            {text: '算法', icon: 'jichengsuanfa', link: 'algorithm/'},
        ],
    }
])
