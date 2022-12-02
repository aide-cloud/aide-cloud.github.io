import {sidebar} from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
    '/project/': [
        {text: 'Go项目', icon: 'hot', prefix: 'go/', link: 'go/', children: 'structure',},
    ],
    '/coding/': [
        {text: 'Golang', icon: 'Goyuyan', prefix: 'go/', link: 'go/', children: 'structure',},
        {text: 'Java', icon: 'java', prefix: 'java/', link: 'java/', children: 'structure',},
        {text: 'Python', icon: 'python', prefix: 'python/', link: 'python/', children: 'structure',},
    ],
    '/frontend/': [
        {text: 'Vue', icon: 'Vue', prefix: 'vue/', link: "vue/", children: 'structure',},
        {text: 'React', icon: 'react', prefix: 'react/', link: 'react/', children: 'structure',}
    ],
    '/container/': [
        {text: 'Docker', icon: 'docker', prefix: 'docker/', link: 'docker/', children: 'structure',},
        {text: 'K8s', icon: 'kubernetes', prefix: 'k8s/', link: 'k8s/', children: 'structure',}
    ],
    '/infrastructure/': [
        {text: 'Linux', icon: 'linux', prefix: 'linux/', link: 'linux/', children: 'structure',},
        {text: 'Nginx', icon: 'nginx', prefix: 'nginx/', link: 'nginx/', children: 'structure',},
        {text: 'Mysql', icon: 'MySQL', prefix: 'mysql/', link: 'mysql/', children: 'structure',},
        {text: 'Redis', icon: 'redis', prefix: 'redis/', link: 'redis/', children: 'structure',},
        {text: 'MQ', icon: 'MQ', prefix: 'mq/', link: 'mq/', children: 'structure',},
    ],
    '/struct/': [
        {text: '数据结构', icon: 'shujujiegou-01', prefix: 'struct/', link: 'struct/', children: 'structure',},
        {text: '算法', icon: 'jichengsuanfa', prefix: 'algorithm/', link: 'algorithm/', children: 'structure',},
    ],
})
