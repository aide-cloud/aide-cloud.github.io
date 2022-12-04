import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as u,a as p,w as a,e as k,r,b as n,d as s}from"./app.c1782ac7.js";const d={},m=k(`<h1 id="_5-select" tabindex="-1"><a class="header-anchor" href="#_5-select" aria-hidden="true">#</a> 5. select</h1><blockquote><ol><li>select 语句类似于 switch 语句，但是 select 会随机执行一个可运行的 case。如果没有 case 可运行，它将阻塞，直到有 case 可运行。</li><li>select 语句中的每个 case 都必须是一个通信操作，要么是发送要么是接收。</li></ol></blockquote><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">select</span> <span class="token punctuation">{</span>
<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ch1<span class="token punctuation">:</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">case</span> ch2 <span class="token operator">&lt;-</span> <span class="token number">1</span><span class="token punctuation">:</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">default</span><span class="token punctuation">:</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见写法" tabindex="-1"><a class="header-anchor" href="#常见写法" aria-hidden="true">#</a> 常见写法</h2>`,5),b=n("ul",null,[n("li",null,"退出信号监听")],-1),v=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[s("exit "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"bool"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"select"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token operator"},"<-"),s("exit"),n("span",{class:"token punctuation"},":"),s(`
            fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"exit"'),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"return"),s(`
        `),n("span",{class:"token keyword"},"default"),n("span",{class:"token punctuation"},":"),s(`
            fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"default"'),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
time`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sleep"),n("span",{class:"token punctuation"},"("),s("time"),n("span",{class:"token punctuation"},"."),s("Second "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(`
exit `),n("span",{class:"token operator"},"<-"),s(),n("span",{class:"token boolean"},"true"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("ul",null,[n("li",null,"超时控制")],-1),h=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[s("timeout "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"bool"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    time`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sleep"),n("span",{class:"token punctuation"},"("),s("time"),n("span",{class:"token punctuation"},"."),s("Second "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(`
    timeout `),n("span",{class:"token operator"},"<-"),s(),n("span",{class:"token boolean"},"true"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"select"),s(),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token operator"},"<-"),s("timeout"),n("span",{class:"token punctuation"},":"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"timeout"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("ul",null,[n("li",null,"通道监听")],-1),_=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[s("ch "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"go"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"select"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token operator"},"<-"),s("ch"),n("span",{class:"token punctuation"},":"),s(`
            fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ch"'),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"default"),n("span",{class:"token punctuation"},":"),s(`
            fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"default"'),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
time`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sleep"),n("span",{class:"token punctuation"},"("),s("time"),n("span",{class:"token punctuation"},"."),s("Second "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(`
ch `),n("span",{class:"token operator"},"<-"),s(),n("span",{class:"token number"},"1"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function w(y,x){const c=r("Tabs");return i(),u("div",null,[m,p(c,{id:"24",data:[{title:"退出信号监听",value:"退出信号监听"},{title:"超时控制",value:"超时控制"},{title:"通道监听",value:"通道监听"}],"tab-id":"fruit"},{tab0:a(({title:t,value:e,isActive:o})=>[b,v]),tab1:a(({title:t,value:e,isActive:o})=>[f,h]),tab2:a(({title:t,value:e,isActive:o})=>[g,_]),_:1})])}const S=l(d,[["render",w],["__file","5.html.vue"]]);export{S as default};