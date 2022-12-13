import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as e,e as a}from"./app.9d267368.js";const i={},o=a(`<h1 id="_3-dockerfile" tabindex="-1"><a class="header-anchor" href="#_3-dockerfile" aria-hidden="true">#</a> 3. Dockerfile</h1><h2 id="第一个dockerfile" tabindex="-1"><a class="header-anchor" href="#第一个dockerfile" aria-hidden="true">#</a> 第一个Dockerfile</h2><ul><li>Dockerfile是一个文本文件，用于定义一个镜像的构建过程</li></ul><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> alpine:3.12</span>

<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&quot;Hello World&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过<code>docker build</code>命令构建镜像</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> hello-world <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>通过<code>docker run</code>命令运行容器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建一个go应用的dockerfile" tabindex="-1"><a class="header-anchor" href="#创建一个go应用的dockerfile" aria-hidden="true">#</a> 创建一个go应用的Dockerfile</h2><ul><li>创建一个go应用</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /tmp/go/src/hello-world
<span class="token builtin class-name">cd</span> /tmp/go/src/hello-world
<span class="token function">touch</span> main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>编写main.go</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建Dockerfile</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>编写Dockerfile</li></ul><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> golang:1.16-alpine</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">COPY</span> . .</span>

<span class="token instruction"><span class="token keyword">RUN</span> go build -o main .</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;./main&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过<code>docker build</code>命令构建镜像</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> my-go-app <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>通过<code>docker run</code>命令运行容器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 my-go-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="go应用的dockerfile优化" tabindex="-1"><a class="header-anchor" href="#go应用的dockerfile优化" aria-hidden="true">#</a> go应用的Dockerfile优化</h2><ul><li>优化1：使用多阶段构建</li></ul><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> golang:1.16-alpine <span class="token keyword">AS</span> builder</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">COPY</span> . .</span>

<span class="token instruction"><span class="token keyword">RUN</span> go build -o main .</span>

<span class="token instruction"><span class="token keyword">FROM</span> alpine:3.12</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app .</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;./main&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>优化2：使用scratch镜像</li></ul><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> golang:1.16-alpine <span class="token keyword">AS</span> builder</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">COPY</span> . .</span>

<span class="token instruction"><span class="token keyword">RUN</span> go build -o main .</span>

<span class="token instruction"><span class="token keyword">FROM</span> scratch</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app .</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;./main&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字段说明" tabindex="-1"><a class="header-anchor" href="#字段说明" aria-hidden="true">#</a> 字段说明</h2><ul><li><code>FROM</code>：指定基础镜像, 例如<code>FROM alpine:3.12</code></li><li><code>WORKDIR</code>：指定工作目录, 例如<code>WORKDIR /app</code></li><li><code>COPY</code>：复制文件, 例如<code>COPY . .</code>, <code>COPY --from=builder /app/main .</code>, 前者是将当前目录下的所有文件复制到镜像的/app目录下，后者是将builder阶段的/app/main文件复制到镜像的/app目录下</li><li><code>RUN</code>：执行命令, 例如<code>RUN go build -o main .</code>，<code>RUN</code>命令会在构建镜像时执行，构建镜像时会创建一个新的容器，执行<code>RUN</code>命令，然后将容器的文件系统提交为镜像的新层</li><li><code>EXPOSE</code>：暴露端口, 例如<code>EXPOSE 8080</code>，<code>EXPOSE</code>命令只是声明了容器运行时的端口，但是并不会将端口映射到宿主机上，需要通过<code>-p</code>参数来映射端口，例如<code>docker run -p 8080:8080 my-go-app</code></li><li><code>CMD</code>：执行命令, 例如<code>CMD [&quot;./main&quot;]</code>，<code>CMD</code>命令会在容器启动时执行，<code>CMD</code>命令只能出现一次，如果出现多次，只有最后一次生效</li><li><code>ENTRYPOINT</code>：执行命令, 例如<code>ENTRYPOINT [&quot;./main&quot;]</code>，<code>ENTRYPOINT</code>命令会在容器启动时执行，<code>ENTRYPOINT</code>命令可以出现多次，每次都会执行 <ul><li><code>ENTRYPOINT</code>命令和<code>CMD</code>命令的区别是，<code>ENTRYPOINT</code>命令不会被<code>docker run</code>命令的参数替换，例如<code>docker run my-go-app -p 8080:8080</code>，<code>ENTRYPOINT</code>命令不会被<code>-p 8080:8080</code>替换，而<code>CMD</code>命令会被替换，<code>CMD</code>命令的参数可以通过<code>docker run</code>命令的参数来替换，例如<code>docker run my-go-app -p 8080:8080</code>，<code>CMD</code>命令的参数<code>./main</code>会被<code>-p 8080:8080</code>替换，所以<code>ENTRYPOINT</code>命令和<code>CMD</code>命令的区别是，<code>ENTRYPOINT</code>命令不会被<code>docker run</code>命令的参数替换，而<code>CMD</code>命令会被替换</li></ul></li><li><code>ENV</code>：设置环境变量, 例如<code>ENV APP_NAME my-go-app</code></li><li><code>ARG</code>：设置构建参数, 例如<code>ARG APP_NAME</code><ul><li><code>ENV</code>命令和<code>ARG</code>命令的区别是，<code>ENV</code>命令会在构建镜像时设置环境变量，而<code>ARG</code>命令只会在构建镜像时设置构建参数，构建镜像时设置的构建参数可以在<code>RUN</code>命令中使用，例如<code>RUN echo $APP_NAME</code>，构建镜像时设置的构建参数不会在运行容器时设置环境变量，运行容器时设置的环境变量不会在构建镜像时设置构建参数</li></ul></li><li><code>VOLUME</code>：挂载卷, 例如<code>VOLUME /app</code></li><li><code>USER</code>：指定用户, 例如<code>USER root</code>, <code>USER</code>命令只是指定了容器运行时的用户，但是并不会创建用户，如果用户不存在，会报错</li><li><code>LABEL</code>：设置标签, 例如<code>LABEL maintainer=&quot;zhangsan&quot;</code>, <code>LABEL</code>命令会在构建镜像时设置标签，运行容器时可以通过<code>docker inspect</code>命令查看标签，例如<code>docker inspect my-go-app</code></li></ul>`,28),c=[o];function d(l,t){return s(),e("div",null,c)}const u=n(i,[["render",d],["__file","3. Dockerfile.html.vue"]]);export{u as default};
