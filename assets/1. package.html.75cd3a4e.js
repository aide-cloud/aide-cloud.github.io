import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,e}from"./app.e3201f13.js";const i={},c=e(`<h1 id="_1-利用github发布自己的package" tabindex="-1"><a class="header-anchor" href="#_1-利用github发布自己的package" aria-hidden="true">#</a> 1. 利用github发布自己的package</h1><h2 id="_1-创建github仓库" tabindex="-1"><a class="header-anchor" href="#_1-创建github仓库" aria-hidden="true">#</a> 1. 创建github仓库</h2><p>在github上创建一个仓库，比如叫<code>my-go-package</code>，然后在本地创建一个同名的文件夹，比如<code>my-go-package</code>，然后在<code>my-go-package</code>文件夹下创建一个<code>go.mod</code>文件，内容如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>module github<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token operator">&lt;</span>username<span class="token operator">&gt;</span><span class="token operator">/</span>my<span class="token operator">-</span><span class="token keyword">go</span><span class="token operator">-</span><span class="token keyword">package</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-创建package" tabindex="-1"><a class="header-anchor" href="#_2-创建package" aria-hidden="true">#</a> 2. 创建package</h2><p>在<code>my-go-package</code>文件夹下创建一个<code>hello.go</code>文件，内容如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> mypackage

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-发布package" tabindex="-1"><a class="header-anchor" href="#_3-发布package" aria-hidden="true">#</a> 3. 发布package</h2><p>在<code>my-go-package</code>文件夹下执行如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init

<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;first commit&quot;</span>

<span class="token function">git</span> branch <span class="token parameter variable">-M</span> main

<span class="token function">git</span> remote <span class="token function">add</span> origin

<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-使用package" tabindex="-1"><a class="header-anchor" href="#_4-使用package" aria-hidden="true">#</a> 4. 使用package</h2><p>在其他项目中使用<code>my-go-package</code>，在项目下执行如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go get github.com/<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>/my-go-package
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后在代码中引入<code>my-go-package</code>，内容如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/&lt;username&gt;/my-go-package&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    mypackage<span class="token punctuation">.</span><span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-更新package" tabindex="-1"><a class="header-anchor" href="#_5-更新package" aria-hidden="true">#</a> 5. 更新package</h2><p>在<code>my-go-package</code>文件夹下修改<code>hello.go</code>文件，内容如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> mypackage

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在<code>my-go-package</code>文件夹下执行如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;update hello&quot;</span>

<span class="token function">git</span> tag v1.0.1

<span class="token function">git</span> push origin main <span class="token parameter variable">--tags</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[c];function t(p,l){return n(),s("div",null,o)}const u=a(i,[["render",t],["__file","1. package.html.vue"]]);export{u as default};
