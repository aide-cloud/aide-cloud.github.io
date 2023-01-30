import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.f0561611.js";const i={},t=e(`<h1 id="_2-部署web服务" tabindex="-1"><a class="header-anchor" href="#_2-部署web服务" aria-hidden="true">#</a> 2. 部署web服务</h1><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/local/nginx/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>user  nginx<span class="token punctuation">;</span> <span class="token comment"># nginx用户</span>

worker_processes  <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment"># 工作进程数</span>

error_log  /var/log/nginx/error.log warn<span class="token punctuation">;</span> <span class="token comment"># 错误日志</span>
pid        /var/run/nginx.pid<span class="token punctuation">;</span> <span class="token comment"># pid文件</span>

events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span> <span class="token comment"># 最大连接数</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       /etc/nginx/mime.types<span class="token punctuation">;</span> <span class="token comment"># mime类型</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

    log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span> <span class="token comment"># 日志格式</span>

    access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span> <span class="token comment"># 访问日志</span>

    sendfile        on<span class="token punctuation">;</span> <span class="token comment"># 开启高效文件传输模式</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0; # 长连接超时时间</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span> <span class="token comment"># 长连接超时时间</span>

    <span class="token comment">#gzip  on; # 开启gzip压缩</span>

    include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span> <span class="token comment"># 引入配置文件</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/nginx/conf.d/default.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 部署一个简单的index.html页面</span>

server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span> <span class="token comment"># 监听端口</span>
    server_name  localhost<span class="token punctuation">;</span> <span class="token comment"># 服务器名称</span>

    <span class="token comment">#charset koi8-r;</span>

    <span class="token comment">#access_log  /var/log/nginx/host.access.log  main;</span>

    location / <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span> <span class="token comment"># 静态资源目录</span>
        index  index.html index.htm<span class="token punctuation">;</span> <span class="token comment"># 默认首页</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#error_page  404              /404.html;</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token comment">#</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[t];function c(o,d){return s(),a("div",null,l)}const u=n(i,[["render",c],["__file","2. 部署web服务.html.vue"]]);export{u as default};
