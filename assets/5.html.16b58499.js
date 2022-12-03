import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.da47d945.js";const e={},p=t(`<h1 id="_5-select" tabindex="-1"><a class="header-anchor" href="#_5-select" aria-hidden="true">#</a> 5. select</h1><blockquote><ol><li>select 语句类似于 switch 语句，但是 select 会随机执行一个可运行的 case。如果没有 case 可运行，它将阻塞，直到有 case 可运行。</li><li>select 语句中的每个 case 都必须是一个通信操作，要么是发送要么是接收。</li></ol></blockquote><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code># 写法一
<span class="token keyword">select</span> <span class="token punctuation">{</span>
<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ch1<span class="token punctuation">:</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">case</span> ch2 <span class="token operator">&lt;-</span> <span class="token number">1</span><span class="token punctuation">:</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">default</span><span class="token punctuation">:</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

# 写法二
<span class="token keyword">select</span> <span class="token punctuation">{</span>
<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ch1<span class="token punctuation">:</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">case</span> ch2 <span class="token operator">&lt;-</span> <span class="token number">1</span><span class="token punctuation">:</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">default</span><span class="token punctuation">:</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见写法" tabindex="-1"><a class="header-anchor" href="#常见写法" aria-hidden="true">#</a> 常见写法</h2><h3 id="退出信号监听" tabindex="-1"><a class="header-anchor" href="#退出信号监听" aria-hidden="true">#</a> 退出信号监听</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>exit <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token keyword">select</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token operator">&lt;-</span>exit<span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;exit&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>
exit <span class="token operator">&lt;-</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="超时控制" tabindex="-1"><a class="header-anchor" href="#超时控制" aria-hidden="true">#</a> 超时控制</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>timeout <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
    timeout <span class="token operator">&lt;-</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">select</span> <span class="token punctuation">{</span>
<span class="token keyword">case</span> <span class="token operator">&lt;-</span>timeout<span class="token punctuation">:</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;timeout&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通道监听" tabindex="-1"><a class="header-anchor" href="#通道监听" aria-hidden="true">#</a> 通道监听</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token keyword">select</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token operator">&lt;-</span>ch<span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ch&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>
ch <span class="token operator">&lt;-</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","5.html.vue"]]);export{r as default};
