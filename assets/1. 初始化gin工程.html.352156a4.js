import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,e}from"./app.e3201f13.js";const i={},t=e(`<h1 id="_1-初始化gin工程" tabindex="-1"><a class="header-anchor" href="#_1-初始化gin工程" aria-hidden="true">#</a> 1. 初始化gin工程</h1><h2 id="初始化mod" tabindex="-1"><a class="header-anchor" href="#初始化mod" aria-hidden="true">#</a> 初始化mod</h2><ul><li>默认已具备go开发环境</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go mod init <span class="token string">&quot;&lt;your mod name&gt;&quot;</span>
<span class="token comment"># 示例一</span>
go mod init <span class="token string">&quot;github.com/aide-cloud/example&quot;</span> <span class="token comment"># 这样命名，你可以把你这个项目当作一个go package</span>
<span class="token comment"># 示例二</span>
go mod init <span class="token string">&quot;my-example-project&quot;</span> <span class="token comment"># 普通项目</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取gin包" tabindex="-1"><a class="header-anchor" href="#获取gin包" aria-hidden="true">#</a> 获取gin包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go get <span class="token parameter variable">-u</span> github.com/gin-gonic/gin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="工程文件-main-go" tabindex="-1"><a class="header-anchor" href="#工程文件-main-go" aria-hidden="true">#</a> 工程文件(main.go)</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main
 
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
<span class="token comment"># 或 curl</span>
<span class="token function">curl</span> http://localhost:8000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当前环境打包</span>
go build main.go
<span class="token comment"># linux环境打包</span>
<span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>linux <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>amd64 go build main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行打包出的可执行文件" tabindex="-1"><a class="header-anchor" href="#运行打包出的可执行文件" aria-hidden="true">#</a> 运行打包出的可执行文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),o=[t];function c(l,d){return a(),s("div",null,o)}const r=n(i,[["render",c],["__file","1. 初始化gin工程.html.vue"]]);export{r as default};
