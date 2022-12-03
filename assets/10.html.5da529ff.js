import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as u,a as k,w as a,e as o,r,b as n,d as s}from"./app.a4ece12e.js";const d={},m=o(`<h1 id="_10-方法" tabindex="-1"><a class="header-anchor" href="#_10-方法" aria-hidden="true">#</a> 10. 方法</h1><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 普通写法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r ReceiverType<span class="token punctuation">)</span> <span class="token function">funcName</span><span class="token punctuation">(</span>parameters<span class="token punctuation">)</span> <span class="token punctuation">(</span>results<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">&lt;</span>函数体<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>ReceiverType<span class="token punctuation">)</span> <span class="token function">funcNamePtr</span><span class="token punctuation">(</span>parameters<span class="token punctuation">)</span> <span class="token punctuation">(</span>results<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">&lt;</span>函数体<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 范型写法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>r ReceiverType<span class="token punctuation">[</span>T<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token function">funcName</span><span class="token punctuation">(</span>parameters<span class="token punctuation">)</span> <span class="token punctuation">(</span>results<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">&lt;</span>函数体<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>ReceiverType<span class="token punctuation">[</span>T<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token function">funcNamePtr</span><span class="token punctuation">(</span>parameters<span class="token punctuation">)</span> <span class="token punctuation">(</span>results<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">&lt;</span>函数体<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>`,4),v=n("ul",null,[n("li",null,"普通方法")],-1),b=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"type"),s(" Person "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    name `),n("span",{class:"token builtin"},"string"),s(`
    age  `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    p `),n("span",{class:"token operator"},":="),s(" Person"),n("span",{class:"token punctuation"},"{"),s(`
        name`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"张三"'),n("span",{class:"token punctuation"},","),s(`
        age`),n("span",{class:"token punctuation"},":"),s("  "),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    p`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sayHello"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("p Person"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"sayHello"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},`"Hello, my name is %s, I'm %d years old.\\n"`),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("ul",null,[n("li",null,"指针方法")],-1),f=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"type"),s(" Person "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    name `),n("span",{class:"token builtin"},"string"),s(`
    age  `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    p `),n("span",{class:"token operator"},":="),s(" Person"),n("span",{class:"token punctuation"},"{"),s(`
        name`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"张三"'),n("span",{class:"token punctuation"},","),s(`
        age`),n("span",{class:"token punctuation"},":"),s("  "),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    p`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sayHello"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("p "),n("span",{class:"token operator"},"*"),s("Person"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"sayHello"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},`"Hello, my name is %s, I'm %d years old.\\n"`),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("ul",null,[n("li",null,"范型方法")],-1),h=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"type"),s(" Person"),n("span",{class:"token punctuation"},"["),s("T any"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	name  `),n("span",{class:"token builtin"},"string"),s(`
	age   `),n("span",{class:"token builtin"},"int"),s(`
	value T
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	p `),n("span",{class:"token operator"},":="),s(" Person"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"float64"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"{"),s(`
		name`),n("span",{class:"token punctuation"},":"),s("  "),n("span",{class:"token string"},'"张三"'),n("span",{class:"token punctuation"},","),s(`
		age`),n("span",{class:"token punctuation"},":"),s("   "),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
		value`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"1.2"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	p`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sayHello"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("p Person"),n("span",{class:"token punctuation"},"["),s("T"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"sayHello"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},`"Hello, my name is %s, I'm %d years old. value %v\\n"`),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("ul",null,[n("li",null,"范型指针方法")],-1),_=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},'"fmt"'),s(`

`),n("span",{class:"token keyword"},"type"),s(" Person"),n("span",{class:"token punctuation"},"["),s("T any"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	name  `),n("span",{class:"token builtin"},"string"),s(`
	age   `),n("span",{class:"token builtin"},"int"),s(`
	value T
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	p `),n("span",{class:"token operator"},":="),s(" Person"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"float64"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"{"),s(`
		name`),n("span",{class:"token punctuation"},":"),s("  "),n("span",{class:"token string"},'"张三"'),n("span",{class:"token punctuation"},","),s(`
		age`),n("span",{class:"token punctuation"},":"),s("   "),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
		value`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"1.2"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	p`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sayHello"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("p "),n("span",{class:"token operator"},"*"),s("Person"),n("span",{class:"token punctuation"},"["),s("T"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"sayHello"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},`"Hello, my name is %s, I'm %d years old. value %v\\n"`),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=o(`<h2 id="接口实现" tabindex="-1"><a class="header-anchor" href="#接口实现" aria-hidden="true">#</a> 接口实现</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Human <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p <span class="token operator">:=</span> Person<span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
        age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    p<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, my name is %s, I&#39;m %d years old.\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>name<span class="token punctuation">,</span> p<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法重写" tabindex="-1"><a class="header-anchor" href="#方法重写" aria-hidden="true">#</a> 方法重写</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Person
    school <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s <span class="token operator">:=</span> Student<span class="token punctuation">{</span>
        Person<span class="token punctuation">:</span> Person<span class="token punctuation">{</span>
            name<span class="token punctuation">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
            age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        school<span class="token punctuation">:</span> <span class="token string">&quot;清华大学&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    s<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, my name is %s, I&#39;m %d years old.\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>name<span class="token punctuation">,</span> p<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>s Student<span class="token punctuation">)</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, my name is %s, I&#39;m %d years old. I&#39;m a student of %s.\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>name<span class="token punctuation">,</span> s<span class="token punctuation">.</span>age<span class="token punctuation">,</span> s<span class="token punctuation">.</span>school<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function H(x,q){const p=r("Tabs");return i(),u("div",null,[m,k(p,{id:"10",data:[{title:"普通方法",value:"普通方法"},{title:"指针方法",value:"指针方法"},{title:"范型方法",value:"范型方法"},{title:"范型指针方法",value:"范型指针方法"}],"tab-id":"fruit"},{tab0:a(({title:t,value:e,isActive:c})=>[v,b]),tab1:a(({title:t,value:e,isActive:c})=>[g,f]),tab2:a(({title:t,value:e,isActive:c})=>[y,h]),tab3:a(({title:t,value:e,isActive:c})=>[w,_]),_:1}),P])}const N=l(d,[["render",H],["__file","10.html.vue"]]);export{N as default};
