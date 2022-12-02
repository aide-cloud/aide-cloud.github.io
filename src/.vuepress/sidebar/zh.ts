import {sidebar} from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
    '/project/': [
        {
            text: 'Go项目',
            icon: 'hot',
            prefix: 'go/',
            link: 'go/',
            children: 'structure',
        },
        {
            text: 'Java项目',
            icon: 'java',
            prefix: 'java/',
            link: 'java/',
            children: 'structure',
        },
    ],
    '/coding/': [
        {
            text: 'Golang',
            icon: 'hot',
            prefix: 'go/',
            link: 'go/',
            children: 'structure',
        },
    ],
    '/frontend/': [
        {
            text: 'Vue',
            icon: 'vue',
            prefix: 'vue/',
            link: 'vue/',
            children: 'structure',
        },
        {
            text: 'React',
            icon: 'react',
            prefix: 'react/',
            link: 'react/',
            children: 'structure',
        }
    ],
    '/container/': [
        {
            text: 'Docker',
            icon: 'docker',
            prefix: 'docker/',
            link: 'docker/',
            children: 'structure',
        }
    ],
})
