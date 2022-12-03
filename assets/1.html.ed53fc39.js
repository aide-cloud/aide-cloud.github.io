import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.da47d945.js";const t={},p=e(`<h1 id="_1-变量和常量" tabindex="-1"><a class="header-anchor" href="#_1-变量和常量" aria-hidden="true">#</a> 1. 变量和常量</h1><h2 id="批量声明" tabindex="-1"><a class="header-anchor" href="#批量声明" aria-hidden="true">#</a> 批量声明 👍</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h2><h3 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h3><ul><li>布尔类型：bool</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 布尔类型变量</span>
<span class="token keyword">var</span> b <span class="token builtin">bool</span>
b <span class="token operator">=</span> <span class="token boolean">true</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token comment">// 布尔类型变量的初始化</span>
<span class="token keyword">var</span> b <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">true</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token comment">// 布尔类型变量的初始化简写</span>
b <span class="token operator">:=</span> <span class="token boolean">true</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token comment">// 布尔常量</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
    a <span class="token operator">=</span> <span class="token boolean">true</span>
    b <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">// true false</span>

<span class="token comment">// 布尔类型的零值</span>
<span class="token keyword">var</span> b <span class="token builtin">bool</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>整型：int8、int16、int32、int64、int、uint8、uint16、uint32、uint64、uint、uintptr</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 整型变量的初始化</span>
<span class="token keyword">var</span> i <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 10</span>

<span class="token comment">// 整型变量的初始化简写</span>
i <span class="token operator">:=</span> <span class="token number">10</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 10 type int</span>

<span class="token comment">// 整型常量</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
    a <span class="token operator">=</span> <span class="token number">10</span>
    b <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">// 10 20 type int</span>

<span class="token comment">// 整型的零值</span>
<span class="token keyword">var</span> i <span class="token builtin">int</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>浮点型：float32、float64</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 浮点型变量的初始化</span>
<span class="token keyword">var</span> f <span class="token builtin">float32</span> <span class="token operator">=</span> <span class="token number">3.14</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token comment">// 3.14</span>

<span class="token comment">// 浮点型变量的初始化简写</span>
f <span class="token operator">:=</span> <span class="token number">3.14</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token comment">// 3.14 type float64</span>

<span class="token comment">// 浮点型常量</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
    a <span class="token operator">=</span> <span class="token number">3.14</span>
    b <span class="token operator">=</span> <span class="token number">6.28</span>
<span class="token punctuation">)</span>

<span class="token comment">// 浮点型的零值</span>
<span class="token keyword">var</span> f <span class="token builtin">float32</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>复数类型：complex64、complex128</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 复数类型变量的初始化</span>
<span class="token keyword">var</span> c <span class="token builtin">complex64</span> <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">5i</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// (5+5i)</span>

<span class="token comment">// 复数类型变量的初始化简写</span>
c <span class="token operator">:=</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">5i</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// (5+5i) type complex128</span>

<span class="token comment">// 复数类型常量</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
    a <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">5i</span>
    b <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token number">10i</span>
<span class="token punctuation">)</span>

<span class="token comment">// 复数类型的零值</span>
<span class="token keyword">var</span> c <span class="token builtin">complex64</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// (0+0i)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字符串类型：string</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 字符串类型变量的初始化</span>
<span class="token keyword">var</span> s <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token comment">// hello world</span>

<span class="token comment">// 字符串类型变量的初始化简写</span>
s <span class="token operator">:=</span> <span class="token string">&quot;hello world&quot;</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token comment">// hello world type string</span>

<span class="token comment">// 字符串类型常量</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
    a <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>
    b <span class="token operator">=</span> <span class="token string">&quot;world&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// 字符串类型的零值</span>
<span class="token keyword">var</span> s <span class="token builtin">string</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token comment">// &quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字节类型：byte</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 字节类型变量的初始化</span>
<span class="token keyword">var</span> b <span class="token builtin">byte</span> <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 97</span>

<span class="token comment">// 字节类型变量的初始化简写</span>
b <span class="token operator">:=</span> <span class="token char">&#39;a&#39;</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 97 type int32</span>

<span class="token comment">// 字节类型常量</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
    a <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span>
    b <span class="token operator">=</span> <span class="token char">&#39;b&#39;</span>
<span class="token punctuation">)</span>

<span class="token comment">// 字节类型的零值</span>
<span class="token keyword">var</span> b <span class="token builtin">byte</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字符类型：rune</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 字符类型变量的初始化</span>
<span class="token keyword">var</span> c <span class="token builtin">rune</span> <span class="token operator">=</span> <span class="token char">&#39;中&#39;</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// 20013</span>

<span class="token comment">// 字符类型变量的初始化简写</span>
c <span class="token operator">:=</span> <span class="token char">&#39;中&#39;</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// 20013 type int32</span>

<span class="token comment">// 字符类型常量</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
    a <span class="token operator">=</span> <span class="token char">&#39;中&#39;</span>
    b <span class="token operator">=</span> <span class="token char">&#39;国&#39;</span>
<span class="token punctuation">)</span>

<span class="token comment">// 字符类型的零值</span>
<span class="token keyword">var</span> c <span class="token builtin">rune</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="派生数据类型" tabindex="-1"><a class="header-anchor" href="#派生数据类型" aria-hidden="true">#</a> 派生数据类型</h3><ul><li>指针类型：*T</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 指针类型变量的初始化</span>
<span class="token keyword">var</span> p <span class="token operator">*</span><span class="token builtin">int</span>
p <span class="token operator">=</span> <span class="token operator">&amp;</span>i
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">// 0xc00000a0b8</span>

<span class="token comment">// 指针类型变量的初始化简写</span>
p <span class="token operator">:=</span> <span class="token operator">&amp;</span>i
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">// 0xc00000a0b8 type *int</span>

<span class="token comment">// 指针类型的零值</span>
<span class="token keyword">var</span> p <span class="token operator">*</span><span class="token builtin">int</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">// nil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数组类型：[n]T</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 数组类型变量的初始化</span>
<span class="token keyword">var</span> a <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span>
a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>
a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// [1 2 3]</span>

<span class="token comment">// 数组类型变量的初始化简写</span>
a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// [1 2 3] type [3]int</span>

<span class="token comment">// 数组类型的零值</span>
<span class="token keyword">var</span> a <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// [0 0 0]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>切片类型：[]T</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 切片类型变量的初始化</span>
<span class="token keyword">var</span> s <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token comment">// [1 2 3]</span>

<span class="token comment">// 切片类型变量的初始化简写</span>
s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token comment">// [1 2 3] type []int</span>

<span class="token comment">// 切片类型的零值</span>
<span class="token keyword">var</span> s <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token comment">// []</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字典类型：map[K]V</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 字典类型变量的初始化</span>
<span class="token keyword">var</span> m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span>
m <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
m<span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
m<span class="token punctuation">[</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>
m<span class="token punctuation">[</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token comment">// map[a:1 b:2 c:3]</span>

<span class="token comment">// 字典类型变量的初始化简写</span>
m <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token comment">// map[a:1 b:2 c:3] type map[string]int</span>

<span class="token comment">// 字典类型的零值</span>
<span class="token keyword">var</span> m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token comment">// map[]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通道类型：chan T</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 通道类型变量的初始化</span>
<span class="token keyword">var</span> c <span class="token keyword">chan</span> <span class="token builtin">int</span>
c <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
c <span class="token operator">&lt;-</span> <span class="token number">1</span>
c <span class="token operator">&lt;-</span> <span class="token number">2</span>
c <span class="token operator">&lt;-</span> <span class="token number">3</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>c<span class="token punctuation">)</span> <span class="token comment">// 1</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>c<span class="token punctuation">)</span> <span class="token comment">// 2</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>c<span class="token punctuation">)</span> <span class="token comment">// 3</span>

<span class="token comment">// 通道类型变量的初始化简写</span>
c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
c <span class="token operator">&lt;-</span> <span class="token number">1</span>
c <span class="token operator">&lt;-</span> <span class="token number">2</span>
c <span class="token operator">&lt;-</span> <span class="token number">3</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>c<span class="token punctuation">)</span> <span class="token comment">// 1</span>

<span class="token comment">// 通道类型的零值</span>
<span class="token keyword">var</span> c <span class="token keyword">chan</span> <span class="token builtin">int</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// nil</span>

<span class="token comment">// 关闭通道</span>
<span class="token function">close</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>

<span class="token comment">// 通道的遍历</span>
<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> c <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>函数类型：func(args) return</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 函数类型变量的初始化</span>
<span class="token keyword">var</span> f <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
f <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>

<span class="token comment">// 函数类型变量的初始化简写</span>
f <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token comment">// 函数类型的零值</span>
<span class="token keyword">var</span> f <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token comment">// nil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>接口类型：interface{}</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 接口类型变量的初始化</span>
<span class="token keyword">var</span> i <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
i <span class="token operator">=</span> <span class="token number">1</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>结构类型：struct{}</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 结构类型变量的初始化</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> p Person
p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span>
p<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">// {张三 18}</span>

<span class="token comment">// 结构类型变量的初始化简写</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

p <span class="token operator">:=</span> Person<span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
    age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">// {张三 18}</span>

<span class="token comment">// 结构类型的零值</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> p Person

fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">// { 0}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>方法集</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 方法集</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;name: %s, age: %d&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>name<span class="token punctuation">,</span> p<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p <span class="token operator">:=</span> Person<span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
        age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">// name: 张三, age: 18</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>接口</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 接口</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;name: %s, age: %d&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>name<span class="token punctuation">,</span> p<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Stringer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> s Stringer
    s <span class="token operator">=</span> Person<span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
        age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token comment">// name: 张三, age: 18</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>接口嵌套</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 接口嵌套</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;name: %s, age: %d&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>name<span class="token punctuation">,</span> p<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Stringer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Human <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    Stringer
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> h Human
    h <span class="token operator">=</span> Person<span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
        age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span> <span class="token comment">// name: 张三, age: 18</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55),i=[p];function c(o,l){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","1.html.vue"]]);export{r as default};
