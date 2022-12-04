import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as k,c as d,a as o,w as a,b as n,d as s,e as p,r as u}from"./app.0ccbcaeb.js";const m={},b=p(`<h1 id="_1-变量和常量" tabindex="-1"><a class="header-anchor" href="#_1-变量和常量" aria-hidden="true">#</a> 1. 变量和常量</h1><h2 id="批量声明" tabindex="-1"><a class="header-anchor" href="#批量声明" aria-hidden="true">#</a> 批量声明</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
 a <span class="token builtin">string</span>
 b <span class="token builtin">int</span>
 c <span class="token builtin">bool</span>
 d <span class="token builtin">float32</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量初始化" tabindex="-1"><a class="header-anchor" href="#变量初始化" aria-hidden="true">#</a> 变量初始化</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// var 变量名 类型 = 表达式</span>
<span class="token keyword">var</span> name <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;梧桐&quot;</span>
<span class="token keyword">var</span> age <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">23</span>

<span class="token comment">// 类型推导 ---&gt; 可以将变量类型省略，编译器会根据等号右边的值来推导变量的类型去初始化</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;梧桐&quot;</span>

<span class="token comment">//一次性初始化多个变量</span>
<span class="token keyword">var</span> name<span class="token punctuation">,</span>age <span class="token operator">=</span> <span class="token string">&quot;梧桐&quot;</span><span class="token punctuation">,</span><span class="token number">18</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="短变量声明" tabindex="-1"><a class="header-anchor" href="#短变量声明" aria-hidden="true">#</a> 短变量声明</h2><p>在函数内部，可以使用更简略的 <code>:=</code> 方式声明并初始化变量。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>name <span class="token operator">:=</span> <span class="token string">&quot;梧桐&quot;</span>
age <span class="token operator">:=</span> <span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="匿名变量" tabindex="-1"><a class="header-anchor" href="#匿名变量" aria-hidden="true">#</a> 匿名变量</h2><p>匿名变量用 <code>_</code> 表示，匿名变量不占用命名空间，不会分配内存。匿名变量与匿名变量之间也不会因为多次声明而无法使用。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> b <span class="token operator">:=</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h2><p>常量是一个简单值的标识符，在程序运行时，不会被修改的量。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 常量的定义</span>
<span class="token keyword">const</span> pi <span class="token operator">=</span> <span class="token number">3.1415926</span>
<span class="token keyword">const</span> e <span class="token operator">=</span> <span class="token number">2.7182</span>

<span class="token comment">// 批量声明常量</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
    pi <span class="token operator">=</span> <span class="token number">3.1415926</span>
    e  <span class="token operator">=</span> <span class="token number">2.7182</span>
<span class="token punctuation">)</span>

<span class="token comment">// iota</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
    n1 <span class="token operator">=</span> <span class="token number">100</span>
    n2
    n3
<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> n3<span class="token punctuation">)</span> <span class="token comment">// 100 100 100</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    n1 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// 0</span>
    n2        <span class="token comment">// 1</span>
    <span class="token boolean">_</span>
    n4 <span class="token comment">// 3</span>
<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> n4<span class="token punctuation">)</span> <span class="token comment">// 0 1 3</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    n1 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// 0</span>
    n2 <span class="token operator">=</span> <span class="token number">100</span>  <span class="token comment">// 100</span>
    n3 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// 2</span>
    n4        <span class="token comment">// 3</span>
<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> n3<span class="token punctuation">,</span> n4<span class="token punctuation">)</span> <span class="token comment">// 0 100 2 3</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    n1<span class="token punctuation">,</span> n2 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token comment">// n1=1,n2=2</span>
    n3<span class="token punctuation">,</span> n4 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">iota</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token comment">// n3=2,n4=3</span>
<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> n3<span class="token punctuation">,</span> n4<span class="token punctuation">)</span> <span class="token comment">// 1 2 2 3</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    n1 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// 0</span>
    n2        <span class="token comment">// 1</span>
    n3        <span class="token comment">// 2</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    n4 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// 0</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常量的使用" tabindex="-1"><a class="header-anchor" href="#常量的使用" aria-hidden="true">#</a> 常量的使用</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
    a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span>
    c<span class="token punctuation">,</span> d
    e<span class="token punctuation">,</span> f <span class="token operator">=</span> <span class="token boolean">iota</span><span class="token punctuation">,</span> <span class="token boolean">iota</span>
    g<span class="token punctuation">,</span> h
<span class="token punctuation">)</span>

fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e<span class="token punctuation">,</span> f<span class="token punctuation">,</span> g<span class="token punctuation">,</span> h<span class="token punctuation">)</span> <span class="token comment">// 100 200 100 200 0 0 2 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h2><h3 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h3>`,18),v=n("ul",null,[n("li",null,[s("布尔类型的值只能是常量 "),n("code",null,"true"),s(" 或 "),n("code",null,"false"),s("。")])],-1),g=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 布尔类型变量"),s(`
`),n("span",{class:"token keyword"},"var"),s(" b "),n("span",{class:"token builtin"},"bool"),s(`
b `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// true"),s(`

`),n("span",{class:"token comment"},"// 布尔类型变量的初始化"),s(`
`),n("span",{class:"token keyword"},"var"),s(" b "),n("span",{class:"token builtin"},"bool"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// true"),s(`

`),n("span",{class:"token comment"},"// 布尔类型变量的初始化简写"),s(`
b `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token boolean"},"true"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// true"),s(`

`),n("span",{class:"token comment"},"// 布尔常量"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"("),s(`
    a `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
    b `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),s(`
`),n("span",{class:"token punctuation"},")"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// true false"),s(`

`),n("span",{class:"token comment"},"// 布尔类型的零值"),s(`
`),n("span",{class:"token keyword"},"var"),s(" b "),n("span",{class:"token builtin"},"bool"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// false"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("ul",null,[n("li",null,"整型：int8、int16、int32、int64、int、uint8、uint16、uint32、uint64、uint、uintptr")],-1),y=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 整型变量的初始化"),s(`
`),n("span",{class:"token keyword"},"var"),s(" i "),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 10"),s(`

`),n("span",{class:"token comment"},"// 整型变量的初始化简写"),s(`
i `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"10"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 10 type int"),s(`

`),n("span",{class:"token comment"},"// 整型常量"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"("),s(`
    a `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),s(`
    b `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"20"),s(`
`),n("span",{class:"token punctuation"},")"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 10 20 type int"),s(`

`),n("span",{class:"token comment"},"// 整型的零值"),s(`
`),n("span",{class:"token keyword"},"var"),s(" i "),n("span",{class:"token builtin"},"int"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 0"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("ul",null,[n("li",null,"浮点型：float32、float64")],-1),x=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 浮点型变量的初始化"),s(`
`),n("span",{class:"token keyword"},"var"),s(" f "),n("span",{class:"token builtin"},"float32"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3.14"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("f"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 3.14"),s(`

`),n("span",{class:"token comment"},"// 浮点型变量的初始化简写"),s(`
f `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"3.14"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("f"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 3.14 type float64"),s(`

`),n("span",{class:"token comment"},"// 浮点型常量"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"("),s(`
    a `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3.14"),s(`
    b `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"6.28"),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 浮点型的零值"),s(`
`),n("span",{class:"token keyword"},"var"),s(" f "),n("span",{class:"token builtin"},"float32"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("f"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 0"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("ul",null,[n("li",null,"复数类型：complex64、complex128")],-1),w=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 复数类型变量的初始化"),s(`
`),n("span",{class:"token keyword"},"var"),s(" c "),n("span",{class:"token builtin"},"complex64"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"5i"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// (5+5i)"),s(`

`),n("span",{class:"token comment"},"// 复数类型变量的初始化简写"),s(`
c `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"5i"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// (5+5i) type complex128"),s(`

`),n("span",{class:"token comment"},"// 复数类型常量"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"("),s(`
    a `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"5i"),s(`
    b `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"10i"),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 复数类型的零值"),s(`
`),n("span",{class:"token keyword"},"var"),s(" c "),n("span",{class:"token builtin"},"complex64"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// (0+0i)"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("ul",null,[n("li",null,"字符串类型：string")],-1),A=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 字符串类型变量的初始化"),s(`
`),n("span",{class:"token keyword"},"var"),s(" s "),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"hello world"'),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// hello world"),s(`

`),n("span",{class:"token comment"},"// 字符串类型变量的初始化简写"),s(`
s `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token string"},'"hello world"'),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// hello world type string"),s(`

`),n("span",{class:"token comment"},"// 字符串类型常量"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"("),s(`
    a `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"hello"'),s(`
    b `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"world"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 字符串类型的零值"),s(`
`),n("span",{class:"token keyword"},"var"),s(" s "),n("span",{class:"token builtin"},"string"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},'// ""'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("ul",null,[n("li",null,"字节类型：byte")],-1),B=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 字节类型变量的初始化"),s(`
`),n("span",{class:"token keyword"},"var"),s(" b "),n("span",{class:"token builtin"},"byte"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token char"},"'a'"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 97"),s(`

`),n("span",{class:"token comment"},"// 字节类型变量的初始化简写"),s(`
b `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token char"},"'a'"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 97 type int32"),s(`

`),n("span",{class:"token comment"},"// 字节类型常量"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"("),s(`
    a `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token char"},"'a'"),s(`
    b `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token char"},"'b'"),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 字节类型的零值"),s(`
`),n("span",{class:"token keyword"},"var"),s(" b "),n("span",{class:"token builtin"},"byte"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 0"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("ul",null,[n("li",null,"字符类型：rune")],-1),S=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 字符类型变量的初始化"),s(`
`),n("span",{class:"token keyword"},"var"),s(" c "),n("span",{class:"token builtin"},"rune"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token char"},"'中'"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 20013"),s(`

`),n("span",{class:"token comment"},"// 字符类型变量的初始化简写"),s(`
c `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token char"},"'中'"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 20013 type int32"),s(`

`),n("span",{class:"token comment"},"// 字符类型常量"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"("),s(`
    a `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token char"},"'中'"),s(`
    b `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token char"},"'国'"),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 字符类型的零值"),s(`
`),n("span",{class:"token keyword"},"var"),s(" c "),n("span",{class:"token builtin"},"rune"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 0"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("h3",{id:"派生数据类型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#派生数据类型","aria-hidden":"true"},"#"),s(" 派生数据类型")],-1),G=n("ul",null,[n("li",null,"指针类型：*T")],-1),N=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 指针类型变量的初始化"),s(`
`),n("span",{class:"token keyword"},"var"),s(" p "),n("span",{class:"token operator"},"*"),n("span",{class:"token builtin"},"int"),s(`
p `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"&"),s(`i
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 0xc00000a0b8"),s(`

`),n("span",{class:"token comment"},"// 指针类型变量的初始化简写"),s(`
p `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token operator"},"&"),s(`i
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 0xc00000a0b8 type *int"),s(`

`),n("span",{class:"token comment"},"// 指针类型的零值"),s(`
`),n("span",{class:"token keyword"},"var"),s(" p "),n("span",{class:"token operator"},"*"),n("span",{class:"token builtin"},"int"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// nil"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("ul",null,[n("li",null,"数组类型：[n]T")],-1),E=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 数组类型变量的初始化"),s(`
`),n("span",{class:"token keyword"},"var"),s(" a "),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(`
a`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
a`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),s(`
a`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// [1 2 3]"),s(`

`),n("span",{class:"token comment"},"// 数组类型变量的初始化简写"),s(`
a `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"}"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// [1 2 3] type [3]int"),s(`

`),n("span",{class:"token comment"},"// 数组类型的零值"),s(`
`),n("span",{class:"token keyword"},"var"),s(" a "),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// [0 0 0]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("ul",null,[n("li",null,"切片类型：[]T")],-1),H=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 切片类型变量的初始化"),s(`
`),n("span",{class:"token keyword"},"var"),s(" s "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(`
s `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
s `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(`
s `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// [1 2 3]"),s(`

`),n("span",{class:"token comment"},"// 切片类型变量的初始化简写"),s(`
s `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"}"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// [1 2 3] type []int"),s(`

`),n("span",{class:"token comment"},"// 切片类型的零值"),s(`
`),n("span",{class:"token keyword"},"var"),s(" s "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// []"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("ul",null,[n("li",null,"字典类型：map[K]V")],-1),L=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 字典类型变量的初始化"),s(`
`),n("span",{class:"token keyword"},"var"),s(" m "),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(`
m `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(`
m`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"a"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
m`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"b"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),s(`
m`),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"c"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("m"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// map[a:1 b:2 c:3]"),s(`

`),n("span",{class:"token comment"},"// 字典类型变量的初始化简写"),s(`
m `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"a"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"b"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"c"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"}"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("m"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// map[a:1 b:2 c:3] type map[string]int"),s(`

`),n("span",{class:"token comment"},"// 字典类型的零值"),s(`
`),n("span",{class:"token keyword"},"var"),s(" m "),n("span",{class:"token keyword"},"map"),n("span",{class:"token punctuation"},"["),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("m"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// map[]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("ul",null,[n("li",null,"通道类型：chan T")],-1),K=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 通道类型变量的初始化"),s(`
`),n("span",{class:"token keyword"},"var"),s(" c "),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),s(`
c `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(`
c `),n("span",{class:"token operator"},"<-"),s(),n("span",{class:"token number"},"1"),s(`
c `),n("span",{class:"token operator"},"<-"),s(),n("span",{class:"token number"},"2"),s(`
c `),n("span",{class:"token operator"},"<-"),s(),n("span",{class:"token number"},"3"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"<-"),s("c"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 1"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"<-"),s("c"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 2"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"<-"),s("c"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 3"),s(`

`),n("span",{class:"token comment"},"// 通道类型变量的初始化简写"),s(`
c `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token function"},"make"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(`
c `),n("span",{class:"token operator"},"<-"),s(),n("span",{class:"token number"},"1"),s(`
c `),n("span",{class:"token operator"},"<-"),s(),n("span",{class:"token number"},"2"),s(`
c `),n("span",{class:"token operator"},"<-"),s(),n("span",{class:"token number"},"3"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"<-"),s("c"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 1"),s(`

`),n("span",{class:"token comment"},"// 通道类型的零值"),s(`
`),n("span",{class:"token keyword"},"var"),s(" c "),n("span",{class:"token keyword"},"chan"),s(),n("span",{class:"token builtin"},"int"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// nil"),s(`

`),n("span",{class:"token comment"},"// 关闭通道"),s(`
`),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),s("c"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// 通道的遍历"),s(`
`),n("span",{class:"token keyword"},"for"),s(" v "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"range"),s(" c "),n("span",{class:"token punctuation"},"{"),s(`
    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("ul",null,[n("li",null,"函数类型：func(args) return")],-1),j=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 函数类型变量的初始化"),s(`
`),n("span",{class:"token keyword"},"var"),s(" f "),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"int"),s(`
f `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s(" b "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" a "),n("span",{class:"token operator"},"+"),s(` b
`),n("span",{class:"token punctuation"},"}"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"f"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 3"),s(`

`),n("span",{class:"token comment"},"// 函数类型变量的初始化简写"),s(`
f `),n("span",{class:"token operator"},":="),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s(" b "),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" a "),n("span",{class:"token operator"},"+"),s(` b
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 函数类型的零值"),s(`
`),n("span",{class:"token keyword"},"var"),s(" f "),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"int"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("f"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// nil"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("ul",null,[n("li",null,"接口类型：interface{}")],-1),F=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 接口类型变量的初始化"),s(`
`),n("span",{class:"token keyword"},"var"),s(" i "),n("span",{class:"token keyword"},"interface"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
i `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 1"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("ul",null,[n("li",null,"结构类型：struct{}")],-1),M=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 结构类型变量的初始化"),s(`
`),n("span",{class:"token keyword"},"type"),s(" Person "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    name `),n("span",{class:"token builtin"},"string"),s(`
    age  `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"var"),s(` p Person
p`),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"张三"'),s(`
p`),n("span",{class:"token punctuation"},"."),s("age "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"18"),s(`
fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// {张三 18}"),s(`

`),n("span",{class:"token comment"},"// 结构类型变量的初始化简写"),s(`
`),n("span",{class:"token keyword"},"type"),s(" Person "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    name `),n("span",{class:"token builtin"},"string"),s(`
    age  `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

p `),n("span",{class:"token operator"},":="),s(" Person"),n("span",{class:"token punctuation"},"{"),s(`
    name`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"张三"'),n("span",{class:"token punctuation"},","),s(`
    age`),n("span",{class:"token punctuation"},":"),s("  "),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// {张三 18}"),s(`

`),n("span",{class:"token comment"},"// 结构类型的零值"),s(`
`),n("span",{class:"token keyword"},"type"),s(" Person "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    name `),n("span",{class:"token builtin"},"string"),s(`
    age  `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"var"),s(` p Person

fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// { 0}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("ul",null,[n("li",null,"方法集")],-1),U=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 方法集"),s(`
`),n("span",{class:"token keyword"},"type"),s(" Person "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    name `),n("span",{class:"token builtin"},"string"),s(`
    age  `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("p Person"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sprintf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name: %s, age: %d"'),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    p `),n("span",{class:"token operator"},":="),s(" Person"),n("span",{class:"token punctuation"},"{"),s(`
        name`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"张三"'),n("span",{class:"token punctuation"},","),s(`
        age`),n("span",{class:"token punctuation"},":"),s("  "),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("p"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// name: 张三, age: 18"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),W=n("ul",null,[n("li",null,"接口")],-1),X=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 接口"),s(`
`),n("span",{class:"token keyword"},"type"),s(" Person "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    name `),n("span",{class:"token builtin"},"string"),s(`
    age  `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("p Person"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sprintf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name: %s, age: %d"'),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(" Stringer "),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"var"),s(` s Stringer
    s `),n("span",{class:"token operator"},"="),s(" Person"),n("span",{class:"token punctuation"},"{"),s(`
        name`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"张三"'),n("span",{class:"token punctuation"},","),s(`
        age`),n("span",{class:"token punctuation"},":"),s("  "),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// name: 张三, age: 18"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Y=n("ul",null,[n("li",null,"接口嵌套")],-1),Z=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// 接口嵌套"),s(`
`),n("span",{class:"token keyword"},"type"),s(" Person "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
    name `),n("span",{class:"token builtin"},"string"),s(`
    age  `),n("span",{class:"token builtin"},"int"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("p Person"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" fmt"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Sprintf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"name: %s, age: %d"'),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},","),s(" p"),n("span",{class:"token punctuation"},"."),s("age"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(" Stringer "),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token builtin"},"string"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"type"),s(" Human "),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Stringer
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"var"),s(` h Human
    h `),n("span",{class:"token operator"},"="),s(" Person"),n("span",{class:"token punctuation"},"{"),s(`
        name`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"张三"'),n("span",{class:"token punctuation"},","),s(`
        age`),n("span",{class:"token punctuation"},":"),s("  "),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("h"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// name: 张三, age: 18"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$=n("h2",{id:"运算符",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#运算符","aria-hidden":"true"},"#"),s(" 运算符")],-1),nn={href:"https://www.runoob.com/go/go-operators.html",target:"_blank",rel:"noopener noreferrer"},sn=n("blockquote",null,[n("p",null,"下表列出了所有Go语言的算术运算符。假定 A 值为 10，B 值为 20。")],-1),an=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"运算符"),n("th",{style:{"text-align":"left"}},"描述"),n("th",{style:{"text-align":"left"}},"实例")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"+"),n("td",{style:{"text-align":"left"}},"相加"),n("td",{style:{"text-align":"left"}},"A + B 输出结果 30")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"-"),n("td",{style:{"text-align":"left"}},"相减"),n("td",{style:{"text-align":"left"}},"A - B 输出结果 -10")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"*"),n("td",{style:{"text-align":"left"}},"相乘"),n("td",{style:{"text-align":"left"}},"A * B 输出结果 200")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"/"),n("td",{style:{"text-align":"left"}},"相除"),n("td",{style:{"text-align":"left"}},"B / A 输出结果 2")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"%"),n("td",{style:{"text-align":"left"}},"求余"),n("td",{style:{"text-align":"left"}},"B % A 输出结果 0")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"++"),n("td",{style:{"text-align":"left"}},"自增"),n("td",{style:{"text-align":"left"}},"A++ 输出结果 11")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"--"),n("td",{style:{"text-align":"left"}},"自减"),n("td",{style:{"text-align":"left"}},"A-- 输出结果 9")])])],-1),tn={href:"https://www.runoob.com/go/go-operators.html",target:"_blank",rel:"noopener noreferrer"},en=n("blockquote",null,[n("p",null,"下表列出了所有Go语言的关系运算符。假定 A 值为 10，B 值为 20。")],-1),ln=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"运算符"),n("th",{style:{"text-align":"left"}},"描述"),n("th",{style:{"text-align":"left"}},"实例")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"=="),n("td",{style:{"text-align":"left"}},"检查两个值是否相等，如果相等返回 true 否则返回 false。"),n("td",{style:{"text-align":"left"}},"(A == B) 为 false。")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"!="),n("td",{style:{"text-align":"left"}},"检查两个值是否不相等，如果不相等返回 true 否则返回 false。"),n("td",{style:{"text-align":"left"}},"(A != B) 为 true。")]),n("tr",null,[n("td",{style:{"text-align":"left"}},">"),n("td",{style:{"text-align":"left"}},"检查左边值是否大于右边值，如果是返回 true 否则返回 false。"),n("td",{style:{"text-align":"left"}},"(A > B) 为 false。")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"<"),n("td",{style:{"text-align":"left"}},"检查左边值是否小于右边值，如果是返回 true 否则返回 false。"),n("td",{style:{"text-align":"left"}},"(A < B) 为 true。")]),n("tr",null,[n("td",{style:{"text-align":"left"}},">="),n("td",{style:{"text-align":"left"}},"检查左边值是否大于等于右边值，如果是返回 true 否则返回 false。"),n("td",{style:{"text-align":"left"}},"(A >= B) 为 false。")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"<="),n("td",{style:{"text-align":"left"}},"检查左边值是否小于等于右边值，如果是返回 true 否则返回 false。"),n("td",{style:{"text-align":"left"}},"(A <= B) 为 true。")])])],-1),on={href:"https://www.runoob.com/go/go-operators.html",target:"_blank",rel:"noopener noreferrer"},cn=n("blockquote",null,[n("p",null,"下表列出了所有Go语言的逻辑运算符。假定 A 值为 true，B 值为 false。")],-1),un=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"运算符"),n("th",{style:{"text-align":"left"}},"描述"),n("th",{style:{"text-align":"left"}},"实例")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"&&"),n("td",{style:{"text-align":"left"}},"逻辑 AND 运算符。 如果两边的操作数都是 true，则条件为 true，否则为 false。"),n("td",{style:{"text-align":"left"}},"(A && B) 为 false。")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"||"),n("td",{style:{"text-align":"left"}},"逻辑 OR 运算符。 如果两边的操作数有一个为 true，则条件为 true，否则为 false。"),n("td",{style:{"text-align":"left"}},"(A || B) 为 true。")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"!"),n("td",{style:{"text-align":"left"}},"逻辑 NOT 运算符。 如果条件为 true，则逻辑 NOT 条件 false，否则为 true。"),n("td",{style:{"text-align":"left"}},"!(A && B) 为 true。")])])],-1),pn={href:"https://www.runoob.com/go/go-operators.html",target:"_blank",rel:"noopener noreferrer"},rn=n("blockquote",null,[n("p",null,"下表列出了所有Go语言的位运算符。假定 A 值为 60，B 值为 13。")],-1),kn=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"运算符"),n("th",{style:{"text-align":"left"}},"描述"),n("th",{style:{"text-align":"left"}},"实例")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"&"),n("td",{style:{"text-align":"left"}},"按位与运算符。参与运算的两数各对应的二进位相与。"),n("td",{style:{"text-align":"left"}},"(A & B) 结果 12，即 0000 1100")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"|"),n("td",{style:{"text-align":"left"}},"按位或运算符。参与运算的两数各对应的二进位相或。"),n("td",{style:{"text-align":"left"}},"(A | B) 结果 61，即 0011 1101")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"^"),n("td",{style:{"text-align":"left"}},"按位异或运算符。参与运算的两数各对应的二进位相异或。"),n("td",{style:{"text-align":"left"}},"(A ^ B) 结果 49，即 0011 0001")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"<<"),n("td",{style:{"text-align":"left"}},"左移n位运算符。左操作数按位左移右操作数指定的位数。"),n("td",{style:{"text-align":"left"}},"A << 2 结果 240，即 1111 0000")]),n("tr",null,[n("td",{style:{"text-align":"left"}},">>"),n("td",{style:{"text-align":"left"}},"右移n位运算符。左操作数按位右移右操作数指定的位数。"),n("td",{style:{"text-align":"left"}},"A >> 2 结果 15，即 0000 1111")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"&^"),n("td",{style:{"text-align":"left"}},"按位清空运算符。参与运算的两数各对应的二进位相与后取反。"),n("td",{style:{"text-align":"left"}},"(A &^ B) 结果 48，即 0011 0000")])])],-1),dn={href:"https://www.runoob.com/go/go-operators.html",target:"_blank",rel:"noopener noreferrer"},mn=n("blockquote",null,[n("p",null,"下表列出了所有Go语言的赋值运算符。")],-1),bn=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"运算符"),n("th",{style:{"text-align":"left"}},"描述"),n("th",{style:{"text-align":"left"}},"实例")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"="),n("td",{style:{"text-align":"left"}},"简单的赋值运算符，将一个表达式的值赋给一个左值"),n("td",{style:{"text-align":"left"}},"C = A + B 将 A + B 表达式结果赋值给 C")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"+="),n("td",{style:{"text-align":"left"}},"相加后再赋值"),n("td",{style:{"text-align":"left"}},"C += A 等价于 C = C + A")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"-="),n("td",{style:{"text-align":"left"}},"相减后再赋值"),n("td",{style:{"text-align":"left"}},"C -= A 等价于 C = C - A")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"*="),n("td",{style:{"text-align":"left"}},"相乘后再赋值"),n("td",{style:{"text-align":"left"}},"C *= A 等价于 C = C * A")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"/="),n("td",{style:{"text-align":"left"}},"相除后再赋值"),n("td",{style:{"text-align":"left"}},"C /= A 等价于 C = C / A")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"%="),n("td",{style:{"text-align":"left"}},"求余后再赋值"),n("td",{style:{"text-align":"left"}},"C %= A 等价于 C = C % A")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"<<="),n("td",{style:{"text-align":"left"}},"左移后赋值"),n("td",{style:{"text-align":"left"}},"C <<= 2 等价于 C = C << 2")]),n("tr",null,[n("td",{style:{"text-align":"left"}},">>="),n("td",{style:{"text-align":"left"}},"右移后赋值"),n("td",{style:{"text-align":"left"}},"C >>= 2 等价于 C = C >> 2")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"&="),n("td",{style:{"text-align":"left"}},"按位与后赋值"),n("td",{style:{"text-align":"left"}},"C &= 2 等价于 C = C & 2")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"^="),n("td",{style:{"text-align":"left"}},"按位异或后赋值"),n("td",{style:{"text-align":"left"}},"C ^= 2 等价于 C = C ^ 2")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"|="),n("td",{style:{"text-align":"left"}},"按位或后赋值"),n("td",{style:{"text-align":"left"}},"C |= 2 等价于 C = C | 2")])])],-1),vn={href:"https://www.runoob.com/go/go-operators.html",target:"_blank",rel:"noopener noreferrer"},gn=n("blockquote",null,[n("p",null,"下表列出了所有Go语言的其他运算符。")],-1),fn=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"运算符"),n("th",{style:{"text-align":"left"}},"描述"),n("th",{style:{"text-align":"left"}},"实例")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"&"),n("td",{style:{"text-align":"left"}},"返回变量存储地址"),n("td",{style:{"text-align":"left"}},"&a; 将给出变量的实际地址。")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"*"),n("td",{style:{"text-align":"left"}},"指针变量。"),n("td",{style:{"text-align":"left"}},"*a; 是一个指针变量。")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"<-"),n("td",{style:{"text-align":"left"}},"通道运算符，用于发送或者接收数据。"),n("td",{style:{"text-align":"left"}},"<-a; 通道 a 接收数据。")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"++"),n("td",{style:{"text-align":"left"}},"自增运算符，对整型、浮点型、复数有效。"),n("td",{style:{"text-align":"left"}},"a++; 为变量 a 加 1。")]),n("tr",null,[n("td",{style:{"text-align":"left"}},"--"),n("td",{style:{"text-align":"left"}},"自减运算符，对整型、浮点型、复数有效。"),n("td",{style:{"text-align":"left"}},"a--; 为变量 a 减 1。")])])],-1),yn=n("h2",{id:"运算符优先级",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#运算符优先级","aria-hidden":"true"},"#"),s(" 运算符优先级")],-1),hn={href:"https://www.runoob.com/go/go-operators.html",target:"_blank",rel:"noopener noreferrer"},xn=p('<blockquote><p>下表列出了所有Go语言的运算符优先级。</p></blockquote><table><thead><tr><th style="text-align:left;">优先级</th><th style="text-align:left;">运算符</th></tr></thead><tbody><tr><td style="text-align:left;">5</td><td style="text-align:left;"><code>*</code> <code>/</code> <code>%</code> <code>&lt;&lt;</code> <code>&gt;&gt;</code> <code>&amp;</code> <code>&amp;^</code></td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;"><code>+</code> <code>-</code> <code>|</code> <code>^</code></td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;"><code>==</code> <code>!=</code> <code>&lt;</code> <code>&lt;=</code> <code>&gt;</code> <code>&gt;=</code></td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;"><code>&amp;&amp;</code></td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;"><code>||</code></td></tr></tbody></table><p>注意：你可以通过使用括号来临时提升某个表达式的整体运算优先级。</p>',3);function _n(wn,Pn){const i=u("Tabs"),c=u("ExternalLinkIcon");return k(),d("div",null,[b,o(i,{id:"42",data:[{title:"布尔类型",value:"布尔类型"},{title:"整型",value:"整型"},{title:"浮点型",value:"浮点型"},{title:"复数类型",value:"复数类型"},{title:"字符串类型",value:"字符串类型"},{title:"字节类型",value:"字节类型"},{title:"字符类型",value:"字符类型"}],"tab-id":"fruit"},{tab0:a(({title:t,value:e,isActive:l})=>[v,g]),tab1:a(({title:t,value:e,isActive:l})=>[f,y]),tab2:a(({title:t,value:e,isActive:l})=>[h,x]),tab3:a(({title:t,value:e,isActive:l})=>[_,w]),tab4:a(({title:t,value:e,isActive:l})=>[P,A]),tab5:a(({title:t,value:e,isActive:l})=>[C,B]),tab6:a(({title:t,value:e,isActive:l})=>[q,S]),_:1}),T,o(i,{id:"117",data:[{title:"指针类型",value:"指针类型"},{title:"数组类型",value:"数组类型"},{title:"切片类型",value:"切片类型"},{title:"字典类型",value:"字典类型"},{title:"通道类型",value:"通道类型"},{title:"函数类型",value:"函数类型"},{title:"接口类型",value:"接口类型"},{title:"结构体类型",value:"结构体类型"},{title:"方法集",value:"方法集"},{title:"接口",value:"接口"},{title:"接口嵌套",value:"接口嵌套"}],"tab-id":"fruit"},{tab0:a(({title:t,value:e,isActive:l})=>[G,N]),tab1:a(({title:t,value:e,isActive:l})=>[V,E]),tab2:a(({title:t,value:e,isActive:l})=>[O,H]),tab3:a(({title:t,value:e,isActive:l})=>[I,L]),tab4:a(({title:t,value:e,isActive:l})=>[D,K]),tab5:a(({title:t,value:e,isActive:l})=>[R,j]),tab6:a(({title:t,value:e,isActive:l})=>[z,F]),tab7:a(({title:t,value:e,isActive:l})=>[J,M]),tab8:a(({title:t,value:e,isActive:l})=>[Q,U]),tab9:a(({title:t,value:e,isActive:l})=>[W,X]),tab10:a(({title:t,value:e,isActive:l})=>[Y,Z]),_:1}),$,o(i,{id:"232",data:[{title:"算术运算符",value:"算术运算符"},{title:"关系运算符",value:"关系运算符"},{title:"逻辑运算符",value:"逻辑运算符"},{title:"位运算符",value:"位运算符"},{title:"赋值运算符",value:"赋值运算符"},{title:"其他运算符",value:"其他运算符"}],"tab-id":"fruit"},{tab0:a(({title:t,value:e,isActive:l})=>[n("p",null,[n("a",nn,[s("菜鸟教程-算术运算符"),o(c)])]),sn,an]),tab1:a(({title:t,value:e,isActive:l})=>[n("p",null,[n("a",tn,[s("菜鸟教程-关系运算符"),o(c)])]),en,ln]),tab2:a(({title:t,value:e,isActive:l})=>[n("p",null,[n("a",on,[s("菜鸟教程-逻辑运算符"),o(c)])]),cn,un]),tab3:a(({title:t,value:e,isActive:l})=>[n("p",null,[n("a",pn,[s("菜鸟教程-位运算符"),o(c)])]),rn,kn]),tab4:a(({title:t,value:e,isActive:l})=>[n("p",null,[n("a",dn,[s("菜鸟教程-赋值运算符"),o(c)])]),mn,bn]),tab5:a(({title:t,value:e,isActive:l})=>[n("p",null,[n("a",vn,[s("菜鸟教程-其他运算符"),o(c)])]),gn,fn]),_:1}),yn,n("p",null,[n("a",hn,[s("菜鸟教程-运算符优先级"),o(c)])]),xn])}const Bn=r(m,[["render",_n],["__file","1.html.vue"]]);export{Bn as default};
