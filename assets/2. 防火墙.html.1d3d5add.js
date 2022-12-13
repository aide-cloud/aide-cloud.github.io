import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as s,e as d}from"./app.9d267368.js";const i={},r=d(`<h1 id="_2-防火墙" tabindex="-1"><a class="header-anchor" href="#_2-防火墙" aria-hidden="true">#</a> 2. 防火墙</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>防火墙是一种网络安全设备，用于过滤网络流量，防止非法访问，保护网络安全。</p><h2 id="防火墙的分类" tabindex="-1"><a class="header-anchor" href="#防火墙的分类" aria-hidden="true">#</a> 防火墙的分类</h2><h3 id="主机防火墙" tabindex="-1"><a class="header-anchor" href="#主机防火墙" aria-hidden="true">#</a> 主机防火墙</h3><p>主机防火墙是一种软件防火墙，它运行在操作系统内核中，通过过滤数据包来保护主机。主机防火墙可以防止来自外部的攻击，也可以防止来自内部的攻击。</p><h3 id="网络防火墙" tabindex="-1"><a class="header-anchor" href="#网络防火墙" aria-hidden="true">#</a> 网络防火墙</h3><p>网络防火墙是一种硬件防火墙，它运行在网络设备中，通过过滤数据包来保护网络。网络防火墙可以防止来自外部的攻击，也可以防止来自内部的攻击。</p><h3 id="应用层防火墙" tabindex="-1"><a class="header-anchor" href="#应用层防火墙" aria-hidden="true">#</a> 应用层防火墙</h3><p>应用层防火墙是一种软件防火墙，它运行在操作系统内核中，通过过滤数据包来保护应用程序。应用层防火墙只能防止来自外部的攻击，不能防止来自内部的攻击。</p><h2 id="防火墙的工作原理" tabindex="-1"><a class="header-anchor" href="#防火墙的工作原理" aria-hidden="true">#</a> 防火墙的工作原理</h2><p>防火墙的工作原理是通过过滤数据包来保护网络安全。防火墙可以通过过滤数据包的源地址、目的地址、协议类型、端口号等来实现对网络流量的过滤。</p><h2 id="防火墙的工作模式" tabindex="-1"><a class="header-anchor" href="#防火墙的工作模式" aria-hidden="true">#</a> 防火墙的工作模式</h2><p>防火墙的工作模式有两种：包过滤模式和网关模式。</p><h3 id="包过滤模式" tabindex="-1"><a class="header-anchor" href="#包过滤模式" aria-hidden="true">#</a> 包过滤模式</h3><p>包过滤模式是一种软件防火墙，它运行在操作系统内核中，通过过滤数据包来保护网络。包过滤模式的工作原理是通过过滤数据包的源地址、目的地址、协议类型、端口号等来实现对网络流量的过滤。</p><h3 id="网关模式" tabindex="-1"><a class="header-anchor" href="#网关模式" aria-hidden="true">#</a> 网关模式</h3><p>网关模式是一种硬件防火墙，它运行在网络设备中，通过过滤数据包来保护网络。网关模式的工作原理是通过过滤数据包的源地址、目的地址、协议类型、端口号等来实现对网络流量的过滤。</p><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h3 id="查看防火墙状态" tabindex="-1"><a class="header-anchor" href="#查看防火墙状态" aria-hidden="true">#</a> 查看防火墙状态</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl status firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="开启防火墙" tabindex="-1"><a class="header-anchor" href="#开启防火墙" aria-hidden="true">#</a> 开启防火墙</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="关闭防火墙" tabindex="-1"><a class="header-anchor" href="#关闭防火墙" aria-hidden="true">#</a> 关闭防火墙</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl stop firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="重启防火墙" tabindex="-1"><a class="header-anchor" href="#重启防火墙" aria-hidden="true">#</a> 重启防火墙</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="开机启动防火墙" tabindex="-1"><a class="header-anchor" href="#开机启动防火墙" aria-hidden="true">#</a> 开机启动防火墙</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="关闭开机启动防火墙" tabindex="-1"><a class="header-anchor" href="#关闭开机启动防火墙" aria-hidden="true">#</a> 关闭开机启动防火墙</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看防火墙版本" tabindex="-1"><a class="header-anchor" href="#查看防火墙版本" aria-hidden="true">#</a> 查看防火墙版本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看帮助" tabindex="-1"><a class="header-anchor" href="#查看帮助" aria-hidden="true">#</a> 查看帮助</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看所有打开的端口" tabindex="-1"><a class="header-anchor" href="#查看所有打开的端口" aria-hidden="true">#</a> 查看所有打开的端口</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --list-ports
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="打开端口" tabindex="-1"><a class="header-anchor" href="#打开端口" aria-hidden="true">#</a> 打开端口</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--permanent</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="关闭端口" tabindex="-1"><a class="header-anchor" href="#关闭端口" aria-hidden="true">#</a> 关闭端口</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --remove-port<span class="token operator">=</span><span class="token number">80</span>/tcp <span class="token parameter variable">--permanent</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看防火墙状态-1" tabindex="-1"><a class="header-anchor" href="#查看防火墙状态-1" aria-hidden="true">#</a> 查看防火墙状态</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--state</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看所有打开的服务" tabindex="-1"><a class="header-anchor" href="#查看所有打开的服务" aria-hidden="true">#</a> 查看所有打开的服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --list-services
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看所有打开的接口" tabindex="-1"><a class="header-anchor" href="#查看所有打开的接口" aria-hidden="true">#</a> 查看所有打开的接口</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --list-interfaces
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看默认区域" tabindex="-1"><a class="header-anchor" href="#查看默认区域" aria-hidden="true">#</a> 查看默认区域</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd --get-default-zone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看区域信息" tabindex="-1"><a class="header-anchor" href="#查看区域信息" aria-hidden="true">#</a> 查看区域信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd --get-active-zones
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看指定接口所属区域" tabindex="-1"><a class="header-anchor" href="#查看指定接口所属区域" aria-hidden="true">#</a> 查看指定接口所属区域</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd --get-zone-of-interface<span class="token operator">=</span>eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,53),n=[r];function l(h,c){return e(),s("div",null,n)}const u=a(i,[["render",l],["__file","2. 防火墙.html.vue"]]);export{u as default};
