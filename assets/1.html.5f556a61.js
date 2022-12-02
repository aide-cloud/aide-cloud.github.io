import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,e}from"./app.7df80aea.js";const i={},t=e(`<h1 id="_1-变量和常量" tabindex="-1"><a class="header-anchor" href="#_1-变量和常量" aria-hidden="true">#</a> 1. 变量和常量</h1><h4 id="批量声明" tabindex="-1"><a class="header-anchor" href="#批量声明" aria-hidden="true">#</a> 批量声明 👍</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> <span class="token punctuation">(</span>
 a <span class="token builtin">string</span>
 b <span class="token builtin">int</span>
 c <span class="token builtin">bool</span>
 d <span class="token builtin">float32</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="变量初始化" tabindex="-1"><a class="header-anchor" href="#变量初始化" aria-hidden="true">#</a> 变量初始化</h4><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// var 变量名 类型 = 表达式</span>
<span class="token keyword">var</span> name <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;梧桐&quot;</span>
<span class="token keyword">var</span> age <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">23</span>

<span class="token comment">// 类型推导 ---&gt; 可以将变量类型省略，编译器会根据等号右边的值来推导变量的类型去初始化</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;梧桐&quot;</span>

<span class="token comment">//一次性初始化多个变量</span>
<span class="token keyword">var</span> name<span class="token punctuation">,</span>age <span class="token operator">=</span> <span class="token string">&quot;梧桐&quot;</span><span class="token punctuation">,</span><span class="token number">18</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="短变量声明" tabindex="-1"><a class="header-anchor" href="#短变量声明" aria-hidden="true">#</a> 短变量声明</h4><p>在函数内部，可以使用更简略的 <code>:=</code> 方式声明并初始化变量。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>name <span class="token operator">:=</span> <span class="token string">&quot;梧桐&quot;</span>
age <span class="token operator">:=</span> <span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[t];function l(r,d){return a(),s("div",null,o)}const u=n(i,[["render",l],["__file","1.html.vue"]]);export{u as default};
