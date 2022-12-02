import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.c689ed42.js";const t={},i=e(`<h1 id="初始化gin工程" tabindex="-1"><a class="header-anchor" href="#初始化gin工程" aria-hidden="true">#</a> 初始化gin工程</h1><h2 id="工程文件" tabindex="-1"><a class="header-anchor" href="#工程文件" aria-hidden="true">#</a> 工程文件</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main
 
<span class="token keyword">import</span> <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
 
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.创建路由</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// 2.绑定路由规则，执行的函数</span>
	<span class="token comment">// gin.Context，封装了request和response</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">&quot;hello World!&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// 3.监听端口，默认在8080</span>
	<span class="token comment">// Run(&quot;里面不指定端口号默认为8080&quot;)</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地运行" tabindex="-1"><a class="header-anchor" href="#本地运行" aria-hidden="true">#</a> 本地运行</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go run main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="浏览器访问" tabindex="-1"><a class="header-anchor" href="#浏览器访问" aria-hidden="true">#</a> 浏览器访问</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http://localhost:8000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),c=[i];function o(p,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","1-init.html.vue"]]);export{r as default};
