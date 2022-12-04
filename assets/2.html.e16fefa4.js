import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.0ccbcaeb.js";const p={},o=t(`<h1 id="_2-gin路由定义" tabindex="-1"><a class="header-anchor" href="#_2-gin路由定义" aria-hidden="true">#</a> 2. Gin路由定义</h1><h2 id="路由分组" tabindex="-1"><a class="header-anchor" href="#路由分组" aria-hidden="true">#</a> 路由分组</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 初始化gin路由</span>
g <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 创建一个v1路由组</span>
v1Api <span class="token operator">:=</span> g<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">&quot;/v1&quot;</span><span class="token punctuation">)</span>
taskApi <span class="token operator">:=</span> v1Api<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">&quot;/task&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	taskApi<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/list&quot;</span><span class="token punctuation">,</span> task<span class="token punctuation">.</span>List<span class="token punctuation">)</span>
	taskApi<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/detail&quot;</span><span class="token punctuation">,</span> task<span class="token punctuation">.</span>Detail<span class="token punctuation">)</span>
	taskApi<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/create&quot;</span><span class="token punctuation">,</span> task<span class="token punctuation">.</span>Create<span class="token punctuation">)</span>
	taskApi<span class="token punctuation">.</span><span class="token function">PUT</span><span class="token punctuation">(</span><span class="token string">&quot;/update&quot;</span><span class="token punctuation">,</span> task<span class="token punctuation">.</span>Update<span class="token punctuation">)</span>
	taskApi<span class="token punctuation">.</span><span class="token function">DELETE</span><span class="token punctuation">(</span><span class="token string">&quot;/delete&quot;</span><span class="token punctuation">,</span> task<span class="token punctuation">.</span>Delete<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Run(&quot;里面不指定端口号默认为8080&quot;)</span>
g<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="业务代码-task-go" tabindex="-1"><a class="header-anchor" href="#业务代码-task-go" aria-hidden="true">#</a> 业务代码（task.go）</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> task

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
    <span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">List</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
        <span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Detail</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
        <span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;detail&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Create</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
        <span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;create&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Update</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
        <span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;update&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Delete</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
        <span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;delete&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[o];function e(u,i){return s(),a("div",null,c)}const d=n(p,[["render",e],["__file","2.html.vue"]]);export{d as default};
