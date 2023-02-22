import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.60cc74d8.js";const p={},e=t(`<h1 id="_12-map" tabindex="-1"><a class="header-anchor" href="#_12-map" aria-hidden="true">#</a> 12. map</h1><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>map是一种无序的基于key-value的数据结构，Go语言中的map是引用类型，必须初始化才能使用。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> map1 <span class="token keyword">map</span><span class="token punctuation">[</span>keyType<span class="token punctuation">]</span>valueType
map1 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span>keyType<span class="token punctuation">]</span>valueType<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>map底层实现</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> hmap <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    count     <span class="token builtin">int</span> <span class="token comment">// 元素个数</span>
    flags     <span class="token builtin">uint8</span> <span class="token comment">// 标志位</span>
    B         <span class="token builtin">uint8</span> <span class="token comment">// 桶的数量</span>
    noverflow <span class="token builtin">uint16</span> <span class="token comment">// 溢出桶的数量</span>
    hash0     <span class="token builtin">uint32</span> <span class="token comment">// hash种子</span>
    buckets   unsafe<span class="token punctuation">.</span>Pointer <span class="token comment">// 桶数组</span>
    oldbuckets unsafe<span class="token punctuation">.</span>Pointer <span class="token comment">// 旧桶数组</span>
    nevacuate <span class="token builtin">uintptr</span> <span class="token comment">// 需要迁移的桶的数量</span>
    extra     <span class="token operator">*</span>mapextra <span class="token comment">// 扩展信息</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> mapextra <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果溢出桶的数量超过了桶的数量，那么就会触发扩容</span>
    <span class="token comment">// 如果溢出桶的数量超过了桶的数量的一半，那么就会触发迁移</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 方式一</span>
<span class="token keyword">var</span> map1 <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span>
map1 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
map1<span class="token punctuation">[</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">90</span>
map1<span class="token punctuation">[</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>map1<span class="token punctuation">)</span> <span class="token comment">// map[张三:90 李四:100]</span>

<span class="token comment">// 方式二</span>
map2 <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>
    <span class="token string">&quot;张三&quot;</span><span class="token punctuation">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
    <span class="token string">&quot;李四&quot;</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>map2<span class="token punctuation">)</span> <span class="token comment">// map[张三:90 李四:100]</span>

<span class="token comment">// 方式三</span>
map3 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
map3<span class="token punctuation">[</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">90</span>
map3<span class="token punctuation">[</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>map3<span class="token punctuation">)</span> <span class="token comment">// map[张三:90 李四:100]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>map1 <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>
    <span class="token string">&quot;张三&quot;</span><span class="token punctuation">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
    <span class="token string">&quot;李四&quot;</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 方式一</span>
<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> map1 <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 方式二</span>
<span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token keyword">range</span> map1 <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 方式三</span>
<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> map1 <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>map1 <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>
    <span class="token string">&quot;张三&quot;</span><span class="token punctuation">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
    <span class="token string">&quot;李四&quot;</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token function">delete</span><span class="token punctuation">(</span>map1<span class="token punctuation">,</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span>

fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>map1<span class="token punctuation">)</span> <span class="token comment">// map[李四:100]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查找" tabindex="-1"><a class="header-anchor" href="#查找" aria-hidden="true">#</a> 查找</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>map1 <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>
    <span class="token string">&quot;张三&quot;</span><span class="token punctuation">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
    <span class="token string">&quot;李四&quot;</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> map1<span class="token punctuation">[</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">]</span>
<span class="token keyword">if</span> ok <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;查无此人&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="长度" tabindex="-1"><a class="header-anchor" href="#长度" aria-hidden="true">#</a> 长度</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>map1 <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>
    <span class="token string">&quot;张三&quot;</span><span class="token punctuation">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
    <span class="token string">&quot;李四&quot;</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>map1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意事项和细节" tabindex="-1"><a class="header-anchor" href="#注意事项和细节" aria-hidden="true">#</a> 注意事项和细节</h2><ul><li>map是引用类型，必须初始化才能使用。</li><li>初始化方式有很多种。</li><li>长度是不固定的，也就是和slice一样，也是一种引用类型。</li><li>map可以通过key来进行快速检索，比如获取或者删除元素，但是map不保证遍历的顺序。</li><li>key不能重复，如果重复了，后面的值会覆盖前面的值。</li><li>value可以重复。</li><li>key是无序的，每次打印出来的map可能都会不一样（发生<code>hash</code>碰撞的情况下）。</li><li>map是线程不安全的</li></ul>`,18),i=[e];function o(c,l){return s(),a("div",null,i)}const r=n(p,[["render",o],["__file","12. map.html.vue"]]);export{r as default};