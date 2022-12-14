import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as k,c as d,a as c,w as a,b as n,d as s,e as u,r as i}from"./app.6150c7bf.js";const m={},v=u('<h1 id="_3-errors包" tabindex="-1"><a class="header-anchor" href="#_3-errors包" aria-hidden="true">#</a> 3. errors包</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><code>errors</code> 包提供了一个 <code>error</code> 接口的实现，它可以用来包装其他 <code>error</code>，并且可以通过 <code>errors.Is</code> 和 <code>errors.As</code> 来判断是否是某个特定的 <code>error</code>。</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2>',4),b=n("ul",null,[n("li",null,[n("code",null,"New"),s(" 方法返回一个由所给的 "),n("code",null,"text"),s(" 格式化的错误类型。每一个 "),n("code",null,"New"),s(" 方法返回的错误都是不同的即使 "),n("code",null,"text"),s(" 一致")])],-1),g=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"errors"'),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	err `),n("span",{class:"token operator"},":="),s(" errors"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"New"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"error"'),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("ul",null,[n("li",null,[n("code",null,"Is"),s(" 方法判断是否存在在 "),n("code",null,"err"),s(" 链中的错误匹配 "),n("code",null,"target")])],-1),w=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"errors"'),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	err `),n("span",{class:"token operator"},":="),s(" errors"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"New"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"error"'),n("span",{class:"token punctuation"},")"),s(`
	err `),n("span",{class:"token operator"},"="),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Errorf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"wrap: %w"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("errors"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Is"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},","),s(" errors"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"New"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"error"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token comment"},"// 或者"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("err "),n("span",{class:"token operator"},"=="),s(" errors"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"New"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"error"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("ul",null,[n("li",null,[n("p",null,[n("code",null,"As"),s(" 方法在 "),n("code",null,"err"),s(" 链中找到和 "),n("code",null,"target"),s(" 错误匹配的第一个错误，并且将该错误赋值给 "),n("code",null,"target"),s("，并返回 "),n("code",null,"true"),s("，否则返回 "),n("code",null,"false")])]),n("li",null,[n("p",null,[s("这个链由 "),n("code",null,"err"),s(" 本身和通过重复调用 "),n("code",null,"Unwrap"),s(" 获得的错误序列组成")])]),n("li",null,[n("p",null,[n("code",null,"As"),s(" 方法会 "),n("code",null,"panic"),s(" 如果 "),n("code",null,"target"),s(" 不是一个指向实现了 "),n("code",null,"error"),s(" 的空指针类型或者接口")])])],-1),y=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"errors"'),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"type"),s(" MyError "),n("span",{class:"token keyword"},"struct"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("e "),n("span",{class:"token operator"},"*"),s("MyError"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"MyError"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	err `),n("span",{class:"token operator"},":="),s(" errors"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"New"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"error"'),n("span",{class:"token punctuation"},")"),s(`
	err `),n("span",{class:"token operator"},"="),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Errorf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"wrap: %w"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" e "),n("span",{class:"token operator"},"*"),s(`MyError
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("errors"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"As"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),s("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("ul",null,[n("li",null,[n("code",null,"Unwrap"),s(" 方法返回 "),n("code",null,"err"),s(" 的 "),n("code",null,"Unwrap"),s(" 方法的结果")])],-1),E=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"errors"'),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	err `),n("span",{class:"token operator"},":="),s(" errors"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"New"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"error"'),n("span",{class:"token punctuation"},")"),s(`
	err `),n("span",{class:"token operator"},"="),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Errorf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"wrap: %w"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("errors"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Unwrap"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"errors"'),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	err `),n("span",{class:"token operator"},":="),s(" errors"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"New"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"error"'),n("span",{class:"token punctuation"},")"),s(`
	err `),n("span",{class:"token operator"},"="),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Errorf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"wrap: %w"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("ul",null,[n("li",null,[s("一般把 error 放在函数的最后一个返回值，如果有多个 error，可以使用 "),n("code",null,"github.com/pkg/errors"),s(" 包")])],-1),A=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"errors"'),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"Curl"),n("span",{class:"token punctuation"},"("),s("url "),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),n("span",{class:"token builtin"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// TODO curl operation"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" url "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(" errors"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"New"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"url is empty"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"content"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"nil"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	content`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"Curl"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("content"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("ul",null,[n("li",null,[s("自定义错误类型，实现 "),n("code",null,"Error"),s(" 方法")])],-1),P=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"type"),s(" MyError "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	Msg  `),n("span",{class:"token builtin"},"string"),s(`
	Code `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("e "),n("span",{class:"token operator"},"*"),s("MyError"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sprintf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"code: %d, msg: %s"'),n("span",{class:"token punctuation"},","),s(" e"),n("span",{class:"token punctuation"},"."),s("Code"),n("span",{class:"token punctuation"},","),s(" e"),n("span",{class:"token punctuation"},"."),s("Msg"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	err `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"&"),s("MyError"),n("span",{class:"token punctuation"},"{"),s(`
		Msg`),n("span",{class:"token punctuation"},":"),s("  "),n("span",{class:"token string"},'"error"'),n("span",{class:"token punctuation"},","),s(`
		Code`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"500"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=u(`<h2 id="自定义错误" tabindex="-1"><a class="header-anchor" href="#自定义错误" aria-hidden="true">#</a> 自定义错误</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> MyError <span class="token builtin">string</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e MyError<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	ErrNotFound <span class="token operator">=</span> <span class="token function">MyError</span><span class="token punctuation">(</span><span class="token string">&quot;not found&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ErrNotFound<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,3),I={href:"https://golang.org/pkg/errors/",target:"_blank",rel:"noopener noreferrer"},U={href:"https://zhuanlan.zhihu.com/p/214159415",target:"_blank",rel:"noopener noreferrer"};function q(T,V){const r=i("Tabs"),l=i("ExternalLinkIcon");return k(),d("div",null,[v,c(r,{id:"12",data:[{title:"New",value:"New"},{title:"Is",value:"Is"},{title:"As",value:"As"},{title:"Unwrap",value:"Unwrap"},{title:"包装错误",value:"包装错误"},{title:"常见用法"},{title:"自定义错误"}],"tab-id":"fruit"},{tab0:a(({title:t,value:e,isActive:o})=>[b,g]),tab1:a(({title:t,value:e,isActive:o})=>[f,w]),tab2:a(({title:t,value:e,isActive:o})=>[h,y]),tab3:a(({title:t,value:e,isActive:o})=>[_,E]),tab4:a(({title:t,value:e,isActive:o})=>[x]),tab5:a(({title:t,value:e,isActive:o})=>[N,A]),tab6:a(({title:t,value:e,isActive:o})=>[M,P]),_:1}),C,n("ul",null,[n("li",null,[n("a",I,[s("源码文档"),c(l)])]),n("li",null,[n("a",U,[s("知乎解释"),c(l)])])])])}const F=p(m,[["render",q],["__file","3.html.vue"]]);export{F as default};
