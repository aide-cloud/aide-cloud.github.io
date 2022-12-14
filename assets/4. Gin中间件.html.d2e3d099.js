import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.6150c7bf.js";const e={},p=t(`<h1 id="_4-gin中间件" tabindex="-1"><a class="header-anchor" href="#_4-gin中间件" aria-hidden="true">#</a> 4. Gin中间件</h1><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>中间件是一种处理请求和响应的方式，它可以访问请求对象、响应对象和下一个中间件的处理程序。</p><h2 id="gin内置中间件" tabindex="-1"><a class="header-anchor" href="#gin内置中间件" aria-hidden="true">#</a> gin内置中间件</h2><ul><li><code>Logger</code> 日志中间件, 默认情况下，gin将日志写入gin.DefaultWriter，即使配置了GIN_MODE = release。</li><li><code>Recovery</code> 恢复中间件，如果有任何panic，它会写入500响应。</li></ul><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//r := gin.Default() // 默认使用Logger和Recovery中间件</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>gin<span class="token punctuation">.</span><span class="token function">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>gin<span class="token punctuation">.</span><span class="token function">Recovery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
            <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;pong&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义中间件" tabindex="-1"><a class="header-anchor" href="#自定义中间件" aria-hidden="true">#</a> 自定义中间件</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;time&quot;</span>
	<span class="token string">&quot;log&quot;</span>

	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token function">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
            <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;pong&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        t <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// after request</span>
        latency <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
        log<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>latency<span class="token punctuation">)</span>
        <span class="token comment">// access the status we are sending</span>
        status <span class="token operator">:=</span> c<span class="token punctuation">.</span>Writer<span class="token punctuation">.</span><span class="token function">Status</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见的中间件" tabindex="-1"><a class="header-anchor" href="#常见的中间件" aria-hidden="true">#</a> 常见的中间件</h2><ul><li><code>cors</code> 跨域中间件</li><li><code>auth</code> 认证中间件</li><li><code>rate</code> 限流中间件</li><li><code>session</code> session中间件</li><li><code>cache</code> 缓存中间件</li><li><code>i18n</code> 国际化中间件</li><li><code>gzip</code> 压缩中间件</li><li><code>static</code> 静态文件中间件</li><li><code>proxy</code> 代理中间件</li><li><code>bind</code> 数据绑定中间件</li><li><code>render</code> 渲染中间件</li><li><code>secure</code> 安全中间件</li><li><code>swagger</code> swagger中间件</li><li><code>validator</code> 验证器中间件</li><li><code>jwt</code> jwt中间件</li><li><code>casbin</code> casbin中间件</li><li><code>prometheus</code> prometheus中间件</li><li><code>opentracing</code> opentracing中间件</li><li><code>pprof</code> pprof中间件</li><li><code>requestid</code> requestid中间件</li><li><code>upload</code> 上传中间件</li><li><code>websocket</code> websocket中间件</li><li><code>timeout</code> 超时中间件</li></ul><h2 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> cors</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> cors

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;net/http&quot;</span>
    <span class="token string">&quot;strings&quot;</span>

    <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// Config defines the config for CORS middleware.</span>
<span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// AllowOrigins defines a list of origins that may access the resource.</span>
    <span class="token comment">// Optional. Default value []string{&quot;*&quot;}.</span>
    AllowOrigins <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>

    <span class="token comment">// AllowMethods defines a list methods allowed when accessing the resource.</span>
    <span class="token comment">// This is used in response to a preflight request.</span>
    <span class="token comment">// Optional. Default value []string{&quot;GET&quot;, &quot;POST&quot;, &quot;PUT&quot;, &quot;PATCH&quot;, &quot;DELETE&quot;, &quot;HEAD&quot;}.</span>
    AllowMethods <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>

    <span class="token comment">// AllowHeaders defines a list of request headers that can be used when</span>
    <span class="token comment">// making the actual request. This in response to a preflight request.</span>
    <span class="token comment">// Optional. Default value []string{&quot;Origin&quot;, &quot;Content-Length&quot;, &quot;Content-Type&quot;}.</span>
    AllowHeaders <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>

    <span class="token comment">// AllowCredentials indicates whether the request can include user credentials like</span>
    <span class="token comment">// cookies, HTTP authentication or client side SSL certificates.</span>
    <span class="token comment">// Optional. Default value false.</span>
    AllowCredentials <span class="token builtin">bool</span>

    <span class="token comment">// ExposeHeaders defines a whitelist headers that clients are allowed to access.</span>
    <span class="token comment">// Optional. Default value []string{}.</span>
    ExposeHeaders <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>

    <span class="token comment">// MaxAge indicates how long (in seconds) the results of a preflight request</span>
    <span class="token comment">// can be cached.</span>
    <span class="token comment">// Optional. Default value 12 * time.Hour.</span>
    MaxAge time<span class="token punctuation">.</span>Duration
<span class="token punctuation">}</span>

<span class="token comment">// DefaultConfig returns a CORS middleware config with default values.</span>
<span class="token keyword">func</span> <span class="token function">DefaultConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Config <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Config<span class="token punctuation">{</span>
        AllowOrigins<span class="token punctuation">:</span>     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        AllowMethods<span class="token punctuation">:</span>     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PATCH&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;HEAD&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        AllowHeaders<span class="token punctuation">:</span>     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;Origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Content-Length&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        AllowCredentials<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        ExposeHeaders<span class="token punctuation">:</span>    <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        MaxAge<span class="token punctuation">:</span>           <span class="token number">12</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Hour<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// New returns a CORS middleware.</span>
<span class="token keyword">func</span> <span class="token function">New</span><span class="token punctuation">(</span>config Config<span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>AllowOrigins<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>AllowOrigins <span class="token operator">=</span> <span class="token function">DefaultConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>AllowOrigins
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>AllowMethods<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>AllowMethods <span class="token operator">=</span> <span class="token function">DefaultConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>AllowMethods
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>AllowHeaders<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>AllowHeaders <span class="token operator">=</span> <span class="token function">DefaultConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>AllowHeaders
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> config<span class="token punctuation">.</span>MaxAge <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>MaxAge <span class="token operator">=</span> <span class="token function">DefaultConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>MaxAge
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        origin <span class="token operator">:=</span> c<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;Origin&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> origin <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
            c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token operator">!</span><span class="token function">contains</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>AllowOrigins<span class="token punctuation">,</span> origin<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">contains</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>AllowOrigins<span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        c<span class="token punctuation">.</span>Writer<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span> origin<span class="token punctuation">)</span>
        c<span class="token punctuation">.</span>Writer<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Methods&quot;</span><span class="token punctuation">,</span> strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>AllowMethods<span class="token punctuation">,</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        c<span class="token punctuation">.</span>Writer<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Headers&quot;</span><span class="token punctuation">,</span> strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>AllowHeaders<span class="token punctuation">,</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        c<span class="token punctuation">.</span>Writer<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Expose-Headers&quot;</span><span class="token punctuation">,</span> strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>ExposeHeaders<span class="token punctuation">,</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> config<span class="token punctuation">.</span>AllowCredentials <span class="token punctuation">{</span>
            c<span class="token punctuation">.</span>Writer<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Credentials&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> c<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>Method <span class="token operator">==</span> http<span class="token punctuation">.</span>MethodOptions <span class="token punctuation">{</span>
            c<span class="token punctuation">.</span><span class="token function">AbortWithStatus</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusNoContent<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">contains</span><span class="token punctuation">(</span>list <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> item <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> list <span class="token punctuation">{</span>
        <span class="token keyword">if</span> i <span class="token operator">==</span> item <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="auth" tabindex="-1"><a class="header-anchor" href="#auth" aria-hidden="true">#</a> auth</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> auth

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;net/http&quot;</span>

    <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// BasicAuth returns a Basic Auth middleware. It verifies the username and password</span>
<span class="token comment">// against the provided handler. For a successful verification, the handler should</span>
<span class="token comment">// write a non-nil user into the gin context.</span>
<span class="token keyword">func</span> <span class="token function">BasicAuth</span><span class="token punctuation">(</span>handler gin<span class="token punctuation">.</span>HandlerFunc<span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        user<span class="token punctuation">,</span> pass<span class="token punctuation">,</span> ok <span class="token operator">:=</span> c<span class="token punctuation">.</span>Request<span class="token punctuation">.</span><span class="token function">BasicAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
            c<span class="token punctuation">.</span><span class="token function">AbortWithStatus</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusUnauthorized<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        c<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span>
        c<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;pass&quot;</span><span class="token punctuation">,</span> pass<span class="token punctuation">)</span>

        <span class="token function">handler</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rate" tabindex="-1"><a class="header-anchor" href="#rate" aria-hidden="true">#</a> rate</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> rate

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;net/http&quot;</span>
    <span class="token string">&quot;time&quot;</span>

    <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
    <span class="token string">&quot;github.com/juju/ratelimit&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// Config defines the config for Rate middleware.</span>
<span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// Limiter defines the limiter.</span>
    Limiter <span class="token operator">*</span>ratelimit<span class="token punctuation">.</span>Bucket
<span class="token punctuation">}</span>

<span class="token comment">// DefaultConfig returns a Rate middleware config with default values.</span>
<span class="token keyword">func</span> <span class="token function">DefaultConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Config <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Config<span class="token punctuation">{</span>
        Limiter<span class="token punctuation">:</span> ratelimit<span class="token punctuation">.</span><span class="token function">NewBucket</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// New returns a Rate middleware.</span>
<span class="token keyword">func</span> <span class="token function">New</span><span class="token punctuation">(</span>config Config<span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
    <span class="token keyword">if</span> config<span class="token punctuation">.</span>Limiter <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>Limiter <span class="token operator">=</span> <span class="token function">DefaultConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Limiter
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> config<span class="token punctuation">.</span>Limiter<span class="token punctuation">.</span><span class="token function">TakeAvailable</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            c<span class="token punctuation">.</span><span class="token function">AbortWithStatus</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusTooManyRequests<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jwt" tabindex="-1"><a class="header-anchor" href="#jwt" aria-hidden="true">#</a> jwt</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> jwt

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;net/http&quot;</span>
    <span class="token string">&quot;time&quot;</span>

    <span class="token string">&quot;github.com/dgrijalva/jwt-go&quot;</span>
    <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// Config defines the config for JWT middleware.</span>
<span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// SigningKey defines the JWT signing key.</span>
    SigningKey <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// SigningMethod defines the JWT signing method.</span>
    <span class="token comment">// Optional. Default value jwt.SigningMethodHS256.</span>
    SigningMethod jwt<span class="token punctuation">.</span>SigningMethod

    <span class="token comment">// ContextKey defines the key used to store user information from the JWT claims.</span>
    <span class="token comment">// Optional. Default value &quot;user&quot;.</span>
    ContextKey <span class="token builtin">string</span>

    <span class="token comment">// Claims defines the custom claims type used to decode the JWT.</span>
    <span class="token comment">// Optional. Default value jwt.MapClaims.</span>
    Claims jwt<span class="token punctuation">.</span>Claims

    <span class="token comment">// ErrorHandler defines a function to handle errors occurred during the middleware process.</span>
    <span class="token comment">// Optional. Default value nil.</span>
    ErrorHandler <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>

    <span class="token comment">// Unauthorized defines a function to handle unauthorized attempts.</span>
    <span class="token comment">// Optional. Default value nil.</span>
    Unauthorized <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">)</span>

    <span class="token comment">// TokenLookup is a string in the form of &quot;&lt;source&gt;:&lt;name&gt;&quot; that is used</span>
    <span class="token comment">// to extract token from the request.</span>
    <span class="token comment">// Optional. Default value &quot;header:Authorization</span>
    TokenLookup <span class="token builtin">string</span>

    <span class="token comment">// TokenHeadName is a string in the header. Default value is &quot;Bearer&quot;</span>
    TokenHeadName <span class="token builtin">string</span>

    <span class="token comment">// AuthScheme is a string in the header. Default value is &quot;Bearer&quot;</span>
    AuthScheme <span class="token builtin">string</span>
    
    <span class="token comment">// TimeFunc provides the current time. You can override it to use another time value. This is useful for testing or if your server uses a time zone other than UTC.</span>
    <span class="token comment">// Optional. Default value time.Now</span>
    TimeFunc <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> time<span class="token punctuation">.</span>Time
<span class="token punctuation">}</span>

<span class="token comment">// DefaultConfig returns a JWT middleware config with default values.</span>
<span class="token keyword">func</span> <span class="token function">DefaultConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Config <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Config<span class="token punctuation">{</span>
        SigningMethod<span class="token punctuation">:</span> jwt<span class="token punctuation">.</span>SigningMethodHS256<span class="token punctuation">,</span>
        ContextKey<span class="token punctuation">:</span>    <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
        Claims<span class="token punctuation">:</span>        jwt<span class="token punctuation">.</span>MapClaims<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        TokenLookup<span class="token punctuation">:</span>   <span class="token string">&quot;header:Authorization&quot;</span><span class="token punctuation">,</span>
        TokenHeadName<span class="token punctuation">:</span> <span class="token string">&quot;Bearer&quot;</span><span class="token punctuation">,</span>
        AuthScheme<span class="token punctuation">:</span>    <span class="token string">&quot;Bearer&quot;</span><span class="token punctuation">,</span>
        TimeFunc<span class="token punctuation">:</span>      time<span class="token punctuation">.</span>Now<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// New returns a JWT middleware.</span>
<span class="token keyword">func</span> <span class="token function">New</span><span class="token punctuation">(</span>config Config<span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
    defaultConfig <span class="token operator">:=</span> <span class="token function">DefaultConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> config<span class="token punctuation">.</span>SigningKey <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;jwt: signing key is required&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> config<span class="token punctuation">.</span>SigningMethod <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>SigningMethod <span class="token operator">=</span> defaultConfig<span class="token punctuation">.</span>SigningMethod
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> config<span class="token punctuation">.</span>ContextKey <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>ContextKey <span class="token operator">=</span> defaultConfig<span class="token punctuation">.</span>ContextKey
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> config<span class="token punctuation">.</span>Claims <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>Claims <span class="token operator">=</span> defaultConfig<span class="token punctuation">.</span>Claims
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> config<span class="token punctuation">.</span>TokenLookup <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>TokenLookup <span class="token operator">=</span> defaultConfig<span class="token punctuation">.</span>TokenLookup
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> config<span class="token punctuation">.</span>TokenHeadName <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>TokenHeadName <span class="token operator">=</span> defaultConfig<span class="token punctuation">.</span>TokenHeadName
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> config<span class="token punctuation">.</span>AuthScheme <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>AuthScheme <span class="token operator">=</span> defaultConfig<span class="token punctuation">.</span>AuthScheme
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> config<span class="token punctuation">.</span>TimeFunc <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>TimeFunc <span class="token operator">=</span> defaultConfig<span class="token punctuation">.</span>TimeFunc
    <span class="token punctuation">}</span>

	parts <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">Split</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>TokenLookup<span class="token punctuation">,</span> <span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> token <span class="token builtin">string</span>

        <span class="token keyword">switch</span> parts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&quot;header&quot;</span><span class="token punctuation">:</span>
            token <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">GetHeader</span><span class="token punctuation">(</span>parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token string">&quot;query&quot;</span><span class="token punctuation">:</span>
            token <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span>parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token string">&quot;cookie&quot;</span><span class="token punctuation">:</span>
            token<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">Cookie</span><span class="token punctuation">(</span>parts<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> token <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> config<span class="token punctuation">.</span>Unauthorized <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                config<span class="token punctuation">.</span><span class="token function">Unauthorized</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusUnauthorized<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                c<span class="token punctuation">.</span><span class="token function">AbortWithStatus</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusUnauthorized<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>parts<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">3</span> <span class="token punctuation">{</span>
            token <span class="token operator">=</span> parts<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> token
        <span class="token punctuation">}</span>

        authScheme <span class="token operator">:=</span> config<span class="token punctuation">.</span>AuthScheme <span class="token operator">+</span> <span class="token string">&quot; &quot;</span>
        <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>authScheme<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">len</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token function">len</span><span class="token punctuation">(</span>authScheme<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> token<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>authScheme<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">==</span> authScheme <span class="token punctuation">{</span>
            token <span class="token operator">=</span> token<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>authScheme<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>

        claims <span class="token operator">:=</span> config<span class="token punctuation">.</span>Claims
        <span class="token keyword">if</span> claims <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            claims <span class="token operator">=</span> jwt<span class="token punctuation">.</span>MapClaims<span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        tokenClaims<span class="token punctuation">,</span> err <span class="token operator">:=</span> jwt<span class="token punctuation">.</span><span class="token function">ParseWithClaims</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> claims<span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>token <span class="token operator">*</span>jwt<span class="token punctuation">.</span>Token<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> token<span class="token punctuation">.</span>Method<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>jwt<span class="token punctuation">.</span>SigningMethodHMAC<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> jwt<span class="token punctuation">.</span>ErrSignatureInvalid
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> config<span class="token punctuation">.</span>SigningKey<span class="token punctuation">,</span> <span class="token boolean">nil</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> config<span class="token punctuation">.</span>ErrorHandler <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                config<span class="token punctuation">.</span><span class="token function">ErrorHandler</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                c<span class="token punctuation">.</span><span class="token function">AbortWithError</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusUnauthorized<span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SetType</span><span class="token punctuation">(</span>gin<span class="token punctuation">.</span>ErrorTypePublic<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token operator">!</span>tokenClaims<span class="token punctuation">.</span>Valid <span class="token punctuation">{</span>
            <span class="token keyword">if</span> config<span class="token punctuation">.</span>Unauthorized <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                config<span class="token punctuation">.</span><span class="token function">Unauthorized</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> http<span class="token punctuation">.</span>StatusUnauthorized<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                c<span class="token punctuation">.</span><span class="token function">AbortWithStatus</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusUnauthorized<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        c<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>ContextKey<span class="token punctuation">,</span> tokenClaims<span class="token punctuation">)</span>
        c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="timeout" tabindex="-1"><a class="header-anchor" href="#timeout" aria-hidden="true">#</a> timeout</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> timeout

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;time&quot;</span>

    <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// Config defines the config for Timeout middleware.</span>
<span class="token keyword">type</span> Config <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// Timeout defines the timeout duration.</span>
    Timeout time<span class="token punctuation">.</span>Duration

    <span class="token comment">// Handler defines a function to handle timeout.</span>
    <span class="token comment">// Optional. Default value nil.</span>
    Handler <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// DefaultConfig returns a Timeout middleware config with default values.</span>
<span class="token keyword">func</span> <span class="token function">DefaultConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Config <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Config<span class="token punctuation">{</span>
        Timeout<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// New returns a Timeout middleware.</span>
<span class="token keyword">func</span> <span class="token function">New</span><span class="token punctuation">(</span>config Config<span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
    defaultConfig <span class="token operator">:=</span> <span class="token function">DefaultConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> config<span class="token punctuation">.</span>Timeout <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>Timeout <span class="token operator">=</span> defaultConfig<span class="token punctuation">.</span>Timeout
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        timer <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">NewTimer</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>Timeout<span class="token punctuation">)</span>
        <span class="token keyword">defer</span> timer<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            done <span class="token operator">&lt;-</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">select</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token operator">&lt;-</span>timer<span class="token punctuation">.</span>C<span class="token punctuation">:</span>
            <span class="token keyword">if</span> config<span class="token punctuation">.</span>Handler <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                config<span class="token punctuation">.</span><span class="token function">Handler</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                c<span class="token punctuation">.</span><span class="token function">AbortWithStatus</span><span class="token punctuation">(</span><span class="token number">503</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token keyword">case</span> <span class="token operator">&lt;-</span>done<span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token operator">!</span>timer<span class="token punctuation">.</span><span class="token function">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token operator">&lt;-</span>timer<span class="token punctuation">.</span>C
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","4. Gin中间件.html.vue"]]);export{r as default};
