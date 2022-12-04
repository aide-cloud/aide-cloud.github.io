import{_ as u}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as r,a as c,w as a,e as i,r as k,b as n,d as s}from"./app.5c0612ad.js";const d={},m=i(`<h1 id="_4-for循环" tabindex="-1"><a class="header-anchor" href="#_4-for循环" aria-hidden="true">#</a> 4. for循环</h1><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code># 写法一
<span class="token keyword">for</span> <span class="token operator">&lt;</span>布尔表达式<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

# 写法二
<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>`,4),v=n("ul",null,[n("li",null,"字符串遍历")],-1),b=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    str `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token string"},'"hello"'),s(`
    `),n("span",{class:"token keyword"},"for"),s(" index"),n("span",{class:"token punctuation"},","),s(" value "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" str "),n("span",{class:"token punctuation"},"{"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("ul",null,[n("li",null,"数组遍历")],-1),f=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    array `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" index"),n("span",{class:"token punctuation"},","),s(" value "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" array "),n("span",{class:"token punctuation"},"{"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("ul",null,[n("li",null,"切片遍历")],-1),h=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    slice `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" index"),n("span",{class:"token punctuation"},","),s(" value "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" slice "),n("span",{class:"token punctuation"},"{"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("ul",null,[n("li",null,"map遍历")],-1),w=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    myMap `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"a"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"A"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"b"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"B"'),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" index"),n("span",{class:"token punctuation"},","),s(" value "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" myMap "),n("span",{class:"token punctuation"},"{"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("ul",null,[n("li",null,"channel遍历")],-1),A=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    ch `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" index"),n("span",{class:"token punctuation"},","),s(" value "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" ch "),n("span",{class:"token punctuation"},"{"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("ul",null,[n("li",null,"无限循环")],-1),q=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"{"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"A"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("ul",null,[n("li",null,"定长循环")],-1),N=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"i = "'),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("ul",null,[n("li",null,"条件循环")],-1),V=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    i `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token punctuation"},"{"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"i = "'),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},")"),s(`
        i`),n("span",{class:"token operator"},"++"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=i(`<h2 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">break</span>
<span class="token keyword">continue</span>
<span class="token keyword">goto</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),C=n("ul",null,[n("li",null,"break")],-1),L=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" i "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"break"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"i = "'),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// i = 0"),s(`
    `),n("span",{class:"token comment"},"// i = 1"),s(`
    `),n("span",{class:"token comment"},"// i = 2"),s(`
    `),n("span",{class:"token comment"},"// i = 3"),s(`
    `),n("span",{class:"token comment"},"// i = 4"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("ul",null,[n("li",null,"continue")],-1),E=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" i "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"continue"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"i = "'),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// i = 0"),s(`
    `),n("span",{class:"token comment"},"// i = 1"),s(`
    `),n("span",{class:"token comment"},"// i = 2"),s(`
    `),n("span",{class:"token comment"},"// i = 3"),s(`
    `),n("span",{class:"token comment"},"// i = 4"),s(`
    `),n("span",{class:"token comment"},"// i = 6"),s(`
    `),n("span",{class:"token comment"},"// i = 7"),s(`
    `),n("span",{class:"token comment"},"// i = 8"),s(`
    `),n("span",{class:"token comment"},"// i = 9"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("ul",null,[n("li",null,"goto")],-1),j=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    i `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),s(`
    LOOP`),n("span",{class:"token punctuation"},":"),s(`
        fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"i = "'),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},")"),s(`
        i`),n("span",{class:"token operator"},"++"),s(`
        `),n("span",{class:"token keyword"},"if"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"goto"),s(` LOOP
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},"// i = 0"),s(`
    `),n("span",{class:"token comment"},"// i = 1"),s(`
    `),n("span",{class:"token comment"},"// i = 2"),s(`
    `),n("span",{class:"token comment"},"// i = 3"),s(`
    `),n("span",{class:"token comment"},"// i = 4"),s(`
    `),n("span",{class:"token comment"},"// i = 5"),s(`
    `),n("span",{class:"token comment"},"// i = 6"),s(`
    `),n("span",{class:"token comment"},"// i = 7"),s(`
    `),n("span",{class:"token comment"},"// i = 8"),s(`
    `),n("span",{class:"token comment"},"// i = 9"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function z(D,F){const o=k("Tabs");return p(),r("div",null,[m,c(o,{id:"10",data:[{title:"字符串遍历",value:"字符串遍历"},{title:"数组遍历",value:"数组遍历"},{title:"切片遍历",value:"切片遍历"},{title:"map遍历",value:"map遍历"},{title:"通道遍历",value:"通道遍历"},{title:"无限循环",value:"无限循环"},{title:"定长循环",value:"定长循环"},{title:"条件循环",value:"条件循环"}],"tab-id":"fruit"},{tab0:a(({title:e,value:t,isActive:l})=>[v,b]),tab1:a(({title:e,value:t,isActive:l})=>[g,f]),tab2:a(({title:e,value:t,isActive:l})=>[_,h]),tab3:a(({title:e,value:t,isActive:l})=>[y,w]),tab4:a(({title:e,value:t,isActive:l})=>[x,A]),tab5:a(({title:e,value:t,isActive:l})=>[P,q]),tab6:a(({title:e,value:t,isActive:l})=>[B,N]),tab7:a(({title:e,value:t,isActive:l})=>[O,V]),_:1}),T,c(o,{id:"96",data:[{title:"break",value:"break"},{title:"continue",value:"continue"},{title:"goto",value:"goto"}],"tab-id":"fruit"},{tab0:a(({title:e,value:t,isActive:l})=>[C,L]),tab1:a(({title:e,value:t,isActive:l})=>[M,E]),tab2:a(({title:e,value:t,isActive:l})=>[S,j]),_:1})])}const I=u(d,[["render",z],["__file","4. for循环.html.vue"]]);export{I as default};
