import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as s,e as n}from"./app.9d267368.js";const i={},d=n(`<h1 id="_1-基础命令" tabindex="-1"><a class="header-anchor" href="#_1-基础命令" aria-hidden="true">#</a> 1. 基础命令</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Linux 是一个类 Unix 的操作系统，它是免费使用和自由传播的，因此成为类 Unix 操作系统中最流行的一个。Linux 继承了 Unix 以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。Linux 可以运行主要的 Unix 工具软件、应用程序和网络协议。它支持 32 位和 64 位硬件。</p><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h3 id="查看系统版本" tabindex="-1"><a class="header-anchor" href="#查看系统版本" aria-hidden="true">#</a> 查看系统版本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/redhat-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看系统内核版本" tabindex="-1"><a class="header-anchor" href="#查看系统内核版本" aria-hidden="true">#</a> 查看系统内核版本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">uname</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看系统版本-1" tabindex="-1"><a class="header-anchor" href="#查看系统版本-1" aria-hidden="true">#</a> 查看系统版本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看磁盘空间" tabindex="-1"><a class="header-anchor" href="#查看磁盘空间" aria-hidden="true">#</a> 查看磁盘空间</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">df</span> <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看内存使用情况" tabindex="-1"><a class="header-anchor" href="#查看内存使用情况" aria-hidden="true">#</a> 查看内存使用情况</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">free</span> <span class="token parameter variable">-m</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看-cpu-信息" tabindex="-1"><a class="header-anchor" href="#查看-cpu-信息" aria-hidden="true">#</a> 查看 CPU 信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/cpuinfo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看-cpu-核数" tabindex="-1"><a class="header-anchor" href="#查看-cpu-核数" aria-hidden="true">#</a> 查看 CPU 核数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;processor&quot;</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看-cpu-使用率" tabindex="-1"><a class="header-anchor" href="#查看-cpu-使用率" aria-hidden="true">#</a> 查看 CPU 使用率</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">top</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看系统运行时间、用户数、负载" tabindex="-1"><a class="header-anchor" href="#查看系统运行时间、用户数、负载" aria-hidden="true">#</a> 查看系统运行时间、用户数、负载</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">uptime</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看系统所有用户" tabindex="-1"><a class="header-anchor" href="#查看系统所有用户" aria-hidden="true">#</a> 查看系统所有用户</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看系统所有组" tabindex="-1"><a class="header-anchor" href="#查看系统所有组" aria-hidden="true">#</a> 查看系统所有组</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/group
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看系统所有进程" tabindex="-1"><a class="header-anchor" href="#查看系统所有进程" aria-hidden="true">#</a> 查看系统所有进程</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看系统所有端口" tabindex="-1"><a class="header-anchor" href="#查看系统所有端口" aria-hidden="true">#</a> 查看系统所有端口</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-tunlp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看系统所有服务" tabindex="-1"><a class="header-anchor" href="#查看系统所有服务" aria-hidden="true">#</a> 查看系统所有服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chkconfig</span> <span class="token parameter variable">--list</span>

<span class="token function">service</span> --status-all

systemctl list-unit-files <span class="token parameter variable">--type</span><span class="token operator">=</span>service

systemctl list-units <span class="token parameter variable">--type</span><span class="token operator">=</span>service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看系统所有开机启动项" tabindex="-1"><a class="header-anchor" href="#查看系统所有开机启动项" aria-hidden="true">#</a> 查看系统所有开机启动项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chkconfig</span> <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看系统所有已安装软件" tabindex="-1"><a class="header-anchor" href="#查看系统所有已安装软件" aria-hidden="true">#</a> 查看系统所有已安装软件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span>  <span class="token comment"># RedHat 系</span>

yum list installed <span class="token comment"># RedHat 系</span>

dpkg <span class="token parameter variable">-l</span> <span class="token comment"># Debian 系</span>

<span class="token function">apt</span> list <span class="token parameter variable">--installed</span> <span class="token comment"># Debian 系</span>

pacman <span class="token parameter variable">-Q</span> <span class="token comment"># Arch 系</span>

<span class="token function">zypper</span> search <span class="token parameter variable">-i</span> <span class="token comment"># SUSE 系</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看系统所有已安装软件包" tabindex="-1"><a class="header-anchor" href="#查看系统所有已安装软件包" aria-hidden="true">#</a> 查看系统所有已安装软件包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="网络相关" tabindex="-1"><a class="header-anchor" href="#网络相关" aria-hidden="true">#</a> 网络相关</h2><h3 id="查看本机-ip-地址" tabindex="-1"><a class="header-anchor" href="#查看本机-ip-地址" aria-hidden="true">#</a> 查看本机 IP 地址</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ifconfig</span>

<span class="token function">ip</span> addr

<span class="token function">ip</span> a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看本机-mac-地址" tabindex="-1"><a class="header-anchor" href="#查看本机-mac-地址" aria-hidden="true">#</a> 查看本机 MAC 地址</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ifconfig</span> eth0 <span class="token operator">|</span> <span class="token function">grep</span> HWaddr <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $5}&#39;</span> <span class="token comment"># RedHat 系</span>

<span class="token function">ifconfig</span> eth0 <span class="token operator">|</span> <span class="token function">grep</span> ether <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token comment"># Debian 系</span>

<span class="token function">ip</span> <span class="token function">link</span> show eth0 <span class="token operator">|</span> <span class="token function">grep</span> ether <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token comment"># Arch 系</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看本机默认网关" tabindex="-1"><a class="header-anchor" href="#查看本机默认网关" aria-hidden="true">#</a> 查看本机默认网关</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>route <span class="token parameter variable">-n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看本机-dns-服务器" tabindex="-1"><a class="header-anchor" href="#查看本机-dns-服务器" aria-hidden="true">#</a> 查看本机 DNS 服务器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/resolv.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看本机主机名" tabindex="-1"><a class="header-anchor" href="#查看本机主机名" aria-hidden="true">#</a> 查看本机主机名</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">hostname</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看本机域名" tabindex="-1"><a class="header-anchor" href="#查看本机域名" aria-hidden="true">#</a> 查看本机域名</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>domainname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看本机所有网卡流量" tabindex="-1"><a class="header-anchor" href="#查看本机所有网卡流量" aria-hidden="true">#</a> 查看本机所有网卡流量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ifconfig</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看本机指定网卡流量" tabindex="-1"><a class="header-anchor" href="#查看本机指定网卡流量" aria-hidden="true">#</a> 查看本机指定网卡流量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ifconfig</span> eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="文件相关" tabindex="-1"><a class="header-anchor" href="#文件相关" aria-hidden="true">#</a> 文件相关</h2><h3 id="查看文件内容" tabindex="-1"><a class="header-anchor" href="#查看文件内容" aria-hidden="true">#</a> 查看文件内容</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看文件内容-分页" tabindex="-1"><a class="header-anchor" href="#查看文件内容-分页" aria-hidden="true">#</a> 查看文件内容（分页）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">more</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看文件内容-分页-可向前翻页" tabindex="-1"><a class="header-anchor" href="#查看文件内容-分页-可向前翻页" aria-hidden="true">#</a> 查看文件内容（分页，可向前翻页）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">less</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看文件内容-十六进制" tabindex="-1"><a class="header-anchor" href="#查看文件内容-十六进制" aria-hidden="true">#</a> 查看文件内容（十六进制）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>od <span class="token parameter variable">-x</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看文件内容-二进制" tabindex="-1"><a class="header-anchor" href="#查看文件内容-二进制" aria-hidden="true">#</a> 查看文件内容（二进制）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>od <span class="token parameter variable">-b</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看文件内容-八进制" tabindex="-1"><a class="header-anchor" href="#查看文件内容-八进制" aria-hidden="true">#</a> 查看文件内容（八进制）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>od <span class="token parameter variable">-o</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看文件内容-十进制" tabindex="-1"><a class="header-anchor" href="#查看文件内容-十进制" aria-hidden="true">#</a> 查看文件内容（十进制）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>od <span class="token parameter variable">-d</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="进程管理" tabindex="-1"><a class="header-anchor" href="#进程管理" aria-hidden="true">#</a> 进程管理</h2><h3 id="查看进程" tabindex="-1"><a class="header-anchor" href="#查看进程" aria-hidden="true">#</a> 查看进程</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看进程-树状" tabindex="-1"><a class="header-anchor" href="#查看进程-树状" aria-hidden="true">#</a> 查看进程（树状）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pstree
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看进程-树状-显示-pid" tabindex="-1"><a class="header-anchor" href="#查看进程-树状-显示-pid" aria-hidden="true">#</a> 查看进程（树状，显示 PID）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pstree <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看进程-树状-显示进程名" tabindex="-1"><a class="header-anchor" href="#查看进程-树状-显示进程名" aria-hidden="true">#</a> 查看进程（树状，显示进程名）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pstree <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查杀进程" tabindex="-1"><a class="header-anchor" href="#查杀进程" aria-hidden="true">#</a> 查杀进程</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">kill</span> <span class="token parameter variable">-9</span> PID

<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">grep</span> xxx
<span class="token function">kill</span> <span class="token parameter variable">-9</span> PID

<span class="token comment"># 万能查杀</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&#39;keyword&#39;</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span><span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>
<span class="token comment"># or</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&#39;keyword&#39;</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看进程打开的文件" tabindex="-1"><a class="header-anchor" href="#查看进程打开的文件" aria-hidden="true">#</a> 查看进程打开的文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">lsof</span> <span class="token parameter variable">-p</span> PID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看进程打开的端口" tabindex="-1"><a class="header-anchor" href="#查看进程打开的端口" aria-hidden="true">#</a> 查看进程打开的端口</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-tunlp</span> <span class="token operator">|</span> <span class="token function">grep</span> PID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看进程打开的端口-树状" tabindex="-1"><a class="header-anchor" href="#查看进程打开的端口-树状" aria-hidden="true">#</a> 查看进程打开的端口（树状）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">lsof</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-P</span> <span class="token parameter variable">-n</span> <span class="token operator">|</span> <span class="token function">grep</span> PID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,87),r=[d];function l(c,t){return e(),s("div",null,r)}const h=a(i,[["render",l],["__file","1. 基础命令.html.vue"]]);export{h as default};
