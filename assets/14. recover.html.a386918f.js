import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.e3201f13.js";const c={},o=e(`<h1 id="_14-recover和panic" tabindex="-1"><a class="header-anchor" href="#_14-recover和panic" aria-hidden="true">#</a> 14. recover和panic</h1><h2 id="什么是panic" tabindex="-1"><a class="header-anchor" href="#什么是panic" aria-hidden="true">#</a> 什么是panic</h2><p><code>panic</code> 是一个内建函数，用于中断正常的控制流程，进入一个 <code>panic</code> 状态，当函数 <code>F</code> 调用 <code>panic</code>，函数 <code>F</code> 的执行被中断，但是 <code>F</code> 中的 <code>defer</code> 语句会正常执行，然后 <code>F</code> 返回到调用它的地方，过程不断重复，直到发生以下情况：</p><ul><li><code>panic</code> 的输入值被 <code>recover</code> 捕获</li><li><code>goroutine</code> 中所有调用的函数返回</li><li><code>goroutine</code> 死亡</li></ul><h2 id="什么是recover" tabindex="-1"><a class="header-anchor" href="#什么是recover" aria-hidden="true">#</a> 什么是recover</h2><p><code>recover</code> 是一个内建函数，用于从 <code>panic</code> 中恢复。如果当前的 <code>goroutine</code> 未发生 <code>panic</code>，调用 <code>recover</code> 会返回 <code>nil</code> 并且没有别的副作用。如果当前的 <code>goroutine</code> 发生了 <code>panic</code>，调用 <code>recover</code> 可以捕获到 <code>panic</code> 的输入值，并且恢复正常的执行。</p><h2 id="什么时候用recover" tabindex="-1"><a class="header-anchor" href="#什么时候用recover" aria-hidden="true">#</a> 什么时候用recover</h2><p><code>recover</code> 用于捕获 <code>panic</code>，但是 <code>panic</code> 通常是不可恢复的错误，所以 <code>recover</code> 通常用于处理不可恢复的错误，例如：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;recover from panic:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;test panic&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="为什么要用recover" tabindex="-1"><a class="header-anchor" href="#为什么要用recover" aria-hidden="true">#</a> 为什么要用recover</h2><p>程序在运行过程中，可能会发生不可预知的错误，例如：数组越界、空指针、除数为0等，这些错误会导致程序崩溃，这时候就需要用到 <code>recover</code> 来捕获这些错误，然后进行处理，避免程序崩溃。</p><h2 id="recover的限制" tabindex="-1"><a class="header-anchor" href="#recover的限制" aria-hidden="true">#</a> recover的限制</h2><p><code>recover</code> 只能在 <code>defer</code> 中调用，而且 <code>defer</code> 必须在 <code>panic</code> 之前定义。</p><h2 id="recover错误使用姿势" tabindex="-1"><a class="header-anchor" href="#recover错误使用姿势" aria-hidden="true">#</a> recover错误使用姿势</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">function1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">panic</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">function2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">panic</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">function3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
        <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">panic</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="recover正确使用方式" tabindex="-1"><a class="header-anchor" href="#recover正确使用方式" aria-hidden="true">#</a> recover正确使用方式</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">OK1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">panic</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">OK2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;recover from panic:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span> 
            <span class="token comment">// TODO 处理错误</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">panic</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),p=[o];function t(i,u){return s(),a("div",null,p)}const d=n(c,[["render",t],["__file","14. recover.html.vue"]]);export{d as default};
