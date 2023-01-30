import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as u,c as p,a as l,w as a,e as r,b as n,d as s,r as k}from"./app.f0561611.js";const d={},m=r('<h1 id="_7-os包" tabindex="-1"><a class="header-anchor" href="#_7-os包" aria-hidden="true">#</a> 7. os包</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><code>os</code> 包提供了一些与操作系统相关的函数和变量。</p><h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>',4),v=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"GOPATH"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    os`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Setenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"GOPATH"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"/home/123"'),n("span",{class:"token punctuation"},")"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Getenv"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"GOPATH"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    dir`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Getwd"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("dir"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    err `),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Chdir"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/home/123"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    dir`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Getwd"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("dir"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os/user"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    user`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" user"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Current"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("user"),n("span",{class:"token punctuation"},"."),s("Name"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os/user"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    user`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" user"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Current"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("user"),n("span",{class:"token punctuation"},"."),s("HomeDir"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os/user"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    user`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" user"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Current"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("user"),n("span",{class:"token punctuation"},"."),s("Uid"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os/user"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    user`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" user"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Current"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("user"),n("span",{class:"token punctuation"},"."),s("Gid"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("h2",{id:"进程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#进程","aria-hidden":"true"},"#"),s(" 进程")],-1),A=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Getpid"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Getppid"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文件","aria-hidden":"true"},"#"),s(" 文件")],-1),N=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    file`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"test.txt"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"defer"),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    fileInfo`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Stat"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("fileInfo"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Name"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("fileInfo"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("fileInfo"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Mode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("fileInfo"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ModTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("fileInfo"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"IsDir"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("fileInfo"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("h2",{id:"文件夹",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文件夹","aria-hidden":"true"},"#"),s(" 文件夹")],-1),S=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    err `),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Mkdir"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"test"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0755"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    err `),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"MkdirAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"test/test1/test2"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0755"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("ul",null,[n("li",null,"只能删除空文件夹")],-1),I=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    err `),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Remove"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"test"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    err `),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"RemoveAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"test"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("ul",null,[n("li",null,"返回的是文件名列表"),n("li",null,"如果是多级文件夹，返回的是相对路径"),n("li",null,"如果是单级文件夹，返回的是文件名"),n("li",null,"如果是空文件夹，返回的是空列表")],-1),H=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    files`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadDir"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"test"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" file "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" files "),n("span",{class:"token punctuation"},"{"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Name"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("h2",{id:"文件操作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文件操作","aria-hidden":"true"},"#"),s(" 文件操作")],-1),V=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    file`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"test.txt"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"defer"),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Name"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    file`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"test.txt"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"defer"),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Name"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	file`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"OpenFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"test.txt"'),n("span",{class:"token punctuation"},","),s(" os"),n("span",{class:"token punctuation"},"."),s("O_APPEND"),n("span",{class:"token operator"},"|"),s("os"),n("span",{class:"token punctuation"},"."),s("O_WRONLY"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0644"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"defer"),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Name"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token boolean"},"_"),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},"="),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WriteString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"hello world"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),W=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
	`),n("span",{class:"token string"},'"io/ioutil"'),s(`
	`),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	file`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"test.txt"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"defer"),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	content`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" ioutil"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ReadAll"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"string"),n("span",{class:"token punctuation"},"("),s("content"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"bufio"'),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    file`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"test.txt"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"defer"),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    scanner `),n("span",{class:"token operator"},":="),s(" bufio"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewScanner"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" scanner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Scan"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("scanner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Text"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"bufio"'),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os"'),s(`
    `),n("span",{class:"token string"},'"strings"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    file`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"test.txt"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"defer"),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    scanner `),n("span",{class:"token operator"},":="),s(" bufio"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewScanner"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" scanner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Scan"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        line `),n("span",{class:"token operator"},":="),s(" scanner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Text"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" strings"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"TrimSpace"),n("span",{class:"token punctuation"},"("),s("line"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"continue"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("line"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"fmt"'),s(`
    `),n("span",{class:"token string"},'"os"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    err `),n("span",{class:"token operator"},":="),s(" os"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Remove"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"test.txt"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"panic"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function U(Y,j){const o=k("Tabs");return u(),p("div",null,[m,l(o,{id:"12",data:[{title:"获取环境变量",value:"获取环境变量"},{title:"设置环境变量",value:"设置环境变量"},{title:"获取当前工作目录",value:"获取当前工作目录"},{title:"设置当前工作目录",value:"设置当前工作目录"},{title:"获取当前用户",value:"获取当前用户"},{title:"获取当前用户的家目录",value:"获取当前用户的家目录"},{title:"获取当前用户的uid",value:"获取当前用户的uid"},{title:"获取当前用户的gid",value:"获取当前用户的gid"}],"tab-id":"fruit"},{tab0:a(({title:t,value:e,isActive:c})=>[v]),tab1:a(({title:t,value:e,isActive:c})=>[b]),tab2:a(({title:t,value:e,isActive:c})=>[f]),tab3:a(({title:t,value:e,isActive:c})=>[g]),tab4:a(({title:t,value:e,isActive:c})=>[w]),tab5:a(({title:t,value:e,isActive:c})=>[y]),tab6:a(({title:t,value:e,isActive:c})=>[h]),tab7:a(({title:t,value:e,isActive:c})=>[_]),_:1}),x,l(o,{id:"41",data:[{title:"获取进程id",value:"获取进程id"},{title:"获取父进程id",value:"获取父进程id"}],"tab-id":"fruit"},{tab0:a(({title:t,value:e,isActive:c})=>[A]),tab1:a(({title:t,value:e,isActive:c})=>[P]),_:1}),C,l(o,{id:"52",data:[{title:"获取文件信息",value:"获取文件信息"}],"tab-id":"fruit"},{tab0:a(({title:t,value:e,isActive:c})=>[N]),_:1}),O,l(o,{id:"60",data:[{title:"创建文件夹",value:"创建文件夹"},{title:"创建多级文件夹",value:"创建多级文件夹"},{title:"删除文件夹",value:"删除文件夹"},{title:"删除多级文件夹",value:"删除多级文件夹"},{title:"获取文件夹下的文件列表",value:"获取文件夹下的文件列表"}],"tab-id":"fruit"},{tab0:a(({title:t,value:e,isActive:c})=>[S]),tab1:a(({title:t,value:e,isActive:c})=>[G]),tab2:a(({title:t,value:e,isActive:c})=>[T,I]),tab3:a(({title:t,value:e,isActive:c})=>[R]),tab4:a(({title:t,value:e,isActive:c})=>[D,H]),_:1}),M,l(o,{id:"109",data:[{title:"创建文件",value:"创建文件"},{title:"打开文件",value:"打开文件"},{title:"打开文件并追加内容",value:"打开文件并追加内容"},{title:"读取文件",value:"读取文件"},{title:"读取文件并按行读取",value:"读取文件并按行读取"},{title:"读取文件并按行读取并去除空行",value:"读取文件并按行读取并去除空行"},{title:"删除文件",value:"删除文件"}],"tab-id":"fruit"},{tab0:a(({title:t,value:e,isActive:c})=>[V]),tab1:a(({title:t,value:e,isActive:c})=>[B]),tab2:a(({title:t,value:e,isActive:c})=>[E]),tab3:a(({title:t,value:e,isActive:c})=>[W]),tab4:a(({title:t,value:e,isActive:c})=>[z]),tab5:a(({title:t,value:e,isActive:c})=>[F]),tab6:a(({title:t,value:e,isActive:c})=>[L]),_:1})])}const K=i(d,[["render",U],["__file","7.html.vue"]]);export{K as default};
