import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a as r,w as e,b as n,d as s,e as u,r as m}from"./app.5c0612ad.js";const v={},p=n("h1",{id:"_1-docker安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-docker安装","aria-hidden":"true"},"#"),s(" 1. Docker安装")],-1),b=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("brew "),n("span",{class:"token function"},"install"),s(),n("span",{class:"token function"},"docker"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 安装依赖"),s(`
`),n("span",{class:"token function"},"sudo"),s(" yum "),n("span",{class:"token function"},"install"),s(),n("span",{class:"token parameter variable"},"-y"),s(` yum-utils device-mapper-persistent-data lvm2

`),n("span",{class:"token comment"},"# 添加源"),s(`
`),n("span",{class:"token function"},"sudo"),s(` yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

`),n("span",{class:"token comment"},"# 安装docker"),s(`
`),n("span",{class:"token function"},"sudo"),s(" yum "),n("span",{class:"token function"},"install"),s(` docker-ce

`),n("span",{class:"token comment"},"# 启动docker"),s(`
`),n("span",{class:"token function"},"sudo"),s(" systemctl start "),n("span",{class:"token function"},"docker"),s(`

`),n("span",{class:"token comment"},"# 设置开机启动"),s(`
`),n("span",{class:"token function"},"sudo"),s(" systemctl "),n("span",{class:"token builtin class-name"},"enable"),s(),n("span",{class:"token function"},"docker"),s(`

`),n("span",{class:"token comment"},"# 查看docker版本"),s(`
`),n("span",{class:"token function"},"docker"),s(` version
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 下载安装包"),s(`
https://download.docker.com/win/static/stable/x86_64/docker-20.10.8.zip

`),n("span",{class:"token comment"},"# 安装"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=u(`<h2 id="docker镜像加速" tabindex="-1"><a class="header-anchor" href="#docker镜像加速" aria-hidden="true">#</a> Docker镜像加速</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 阿里云</span>
https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors

<span class="token comment"># 中国科技大学</span>
https://mirrors.ustc.edu.cn/help/dockerhub.html

<span class="token comment"># 163</span>
https://hub-mirror.c.163.com

<span class="token comment"># 清华大学</span>
https://mirrors.tuna.tsinghua.edu.cn/help/dockerhub/

<span class="token comment"># 中科大</span>
https://docker.mirrors.ustc.edu.cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第一个docker容器" tabindex="-1"><a class="header-anchor" href="#第一个docker容器" aria-hidden="true">#</a> 第一个docker容器</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拉取镜像</span>
<span class="token function">docker</span> pull hello-world

<span class="token comment"># 查看镜像</span>
<span class="token function">docker</span> images

<span class="token comment"># 运行容器</span>
<span class="token function">docker</span> run hello-world

<span class="token comment"># 查看容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>

<span class="token comment"># 删除容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> 容器id

<span class="token comment"># 删除镜像</span>
<span class="token function">docker</span> rmi 镜像id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function _(g,x){const c=m("Tabs");return t(),o("div",null,[p,r(c,{id:"3",data:[{title:"mac安装",value:"mac安装"},{title:"linux安装",value:"linux安装"},{title:"windows安装",value:"windows安装"}],"tab-id":"fruit"},{tab0:e(({title:a,value:i,isActive:l})=>[b]),tab1:e(({title:a,value:i,isActive:l})=>[k]),tab2:e(({title:a,value:i,isActive:l})=>[h]),_:1}),f])}const D=d(v,[["render",_],["__file","1. Docker安装.html.vue"]]);export{D as default};
