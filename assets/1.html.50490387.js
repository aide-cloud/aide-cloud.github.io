import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as d,a as r,w as s,b as n,d as e,r as u}from"./app.458cd426.js";const m={},b=n("h1",{id:"docker安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker安装","aria-hidden":"true"},"#"),e(" Docker安装")],-1),v=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("brew "),n("span",{class:"token function"},"install"),e(),n("span",{class:"token function"},"docker"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),p=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 安装依赖"),e(`
`),n("span",{class:"token function"},"sudo"),e(" yum "),n("span",{class:"token function"},"install"),e(),n("span",{class:"token parameter variable"},"-y"),e(` yum-utils device-mapper-persistent-data lvm2

`),n("span",{class:"token comment"},"# 添加源"),e(`
`),n("span",{class:"token function"},"sudo"),e(` yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

`),n("span",{class:"token comment"},"# 安装docker"),e(`
`),n("span",{class:"token function"},"sudo"),e(" yum "),n("span",{class:"token function"},"install"),e(` docker-ce

`),n("span",{class:"token comment"},"# 启动docker"),e(`
`),n("span",{class:"token function"},"sudo"),e(" systemctl start "),n("span",{class:"token function"},"docker"),e(`

`),n("span",{class:"token comment"},"# 设置开机启动"),e(`
`),n("span",{class:"token function"},"sudo"),e(" systemctl "),n("span",{class:"token builtin class-name"},"enable"),e(),n("span",{class:"token function"},"docker"),e(`

`),n("span",{class:"token comment"},"# 查看docker版本"),e(`
`),n("span",{class:"token function"},"docker"),e(` version
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 下载安装包"),e(`
https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe

`),n("span",{class:"token comment"},"# 安装"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function h(f,_){const t=u("Tabs");return o(),d("div",null,[b,r(t,{id:"3",data:[{title:"mac安装",value:"mac安装"},{title:"linux安装",value:"linux安装"},{title:"windows安装",value:"windows安装"}],"tab-id":"fruit"},{tab0:s(({title:a,value:l,isActive:c})=>[v]),tab1:s(({title:a,value:l,isActive:c})=>[p]),tab2:s(({title:a,value:l,isActive:c})=>[k]),_:1})])}const w=i(m,[["render",h],["__file","1.html.vue"]]);export{w as default};
