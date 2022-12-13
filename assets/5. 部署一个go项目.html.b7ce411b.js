import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,b as n,d as a,a as e,e as i,r as c}from"./app.9d267368.js";const p={},r=i(`<h1 id="_5-部署一个go项目" tabindex="-1"><a class="header-anchor" href="#_5-部署一个go项目" aria-hidden="true">#</a> 5. 部署一个go项目</h1><h2 id="准备一个go项目" tabindex="-1"><a class="header-anchor" href="#准备一个go项目" aria-hidden="true">#</a> 准备一个go项目</h2><ul><li>创建一个<code>go</code>项目</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// main.go</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// 自定义web服务</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 创建一个路由器</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;Hello, %s!&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Listening on port 8080&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// 启动web服务, 监听8080端口</span>
	http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>go项目的Dockfile</li></ul><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># Dockerfile</span>
<span class="token comment"># 编译阶段</span>
<span class="token instruction"><span class="token keyword">FROM</span> golang:1.18 <span class="token keyword">AS</span> builder </span>
<span class="token comment"># 工作目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app </span>
<span class="token comment"># 将当前目录下的所有文件拷贝到/app目录下</span>
<span class="token instruction"><span class="token keyword">COPY</span> . . </span>
<span class="token comment"># 编译, CGO_ENABLED=0表示不使用cgo, GOOS=linux表示编译成linux平台的可执行文件, GOARCH=amd64表示编译成64位的可执行文件, -o表示输出文件名, .表示当前目录</span>
<span class="token instruction"><span class="token keyword">RUN</span> CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main .</span>
<span class="token comment"># 运行阶段</span>
<span class="token instruction"><span class="token keyword">FROM</span> alpine:latest</span>
<span class="token comment"># EXPOSE表示暴露端口, 但是不会自动映射端口</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>
<span class="token comment"># 工作目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token comment"># 将编译阶段的输出文件拷贝到/app目录下</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app/ ./</span>
<span class="token comment"># 给可执行文件添加执行权限</span>
<span class="token instruction"><span class="token keyword">RUN</span> chmod +x main</span>
<span class="token comment"># 启动服务</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;./main&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建一个<code>docker-compose.yml</code>文件</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">go</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>                    <span class="token comment"># 指定构建镜像的路径</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> .              <span class="token comment"># 指定构建上下文的路径</span>
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile  <span class="token comment"># 指定构建镜像的Dockerfile文件</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>                    <span class="token comment"># 指定端口映射</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>           <span class="token comment"># 本地端口:容器端口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>项目目录结构</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── Dockerfile
├── docker-compose.yml
└── main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><ul><li>启动服务</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动服务，-d表示后台运行</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看服务</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看日志</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看日志， -f表示实时查看</span>
<span class="token function">docker-compose</span> logs <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>停止服务</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="保存镜像" tabindex="-1"><a class="header-anchor" href="#保存镜像" aria-hidden="true">#</a> 保存镜像</h2><ul><li>保存镜像</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> save <span class="token parameter variable">-o</span> go.tar go:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>加载镜像 <ul><li>上传<code>go.tar</code>到服务器</li><li>在服务器上执行</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> load <span class="token parameter variable">-i</span> go.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,25),d={href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://docs.docker.com/compose/compose-file/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://hub.docker.com/_/golang",target:"_blank",rel:"noopener noreferrer"},h={href:"https://hub.docker.com/_/alpine",target:"_blank",rel:"noopener noreferrer"};function g(f,_){const s=c("ExternalLinkIcon");return t(),o("div",null,[r,n("ul",null,[n("li",null,[n("a",d,[a("Dockerfile"),e(s)])]),n("li",null,[n("a",u,[a("docker-compose.yml"),e(s)])]),n("li",null,[n("a",k,[a("docker-compose"),e(s)])]),n("li",null,[n("a",m,[a("docker"),e(s)])]),n("li",null,[n("a",v,[a("go"),e(s)])]),n("li",null,[n("a",b,[a("go docker"),e(s)])]),n("li",null,[n("a",h,[a("alpine docker"),e(s)])])])])}const w=l(p,[["render",g],["__file","5. 部署一个go项目.html.vue"]]);export{w as default};
