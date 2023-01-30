import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.563f81e6.js";const i={},l=e(`<h1 id="_4-sed" tabindex="-1"><a class="header-anchor" href="#_4-sed" aria-hidden="true">#</a> 4. sed</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>sed 是一种流编辑器，它是一个非交互式的文本编辑器。它一次处理一行内容，处理时将当前处理的行存储在临时缓冲区中，称为“模式空间”（pattern space），接着用 sed 命令处理缓冲区中的内容，处理完成后，把缓冲区的内容送往屏幕。接着处理下一行，这样不断重复，直到文件末尾。sed 主要用来自动编辑一个或多个文件；简化对文件的反复操作；编写转换程序等。</p><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h3 id="替换" tabindex="-1"><a class="header-anchor" href="#替换" aria-hidden="true">#</a> 替换</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/old/new/g&#39;</span> <span class="token function">file</span>

<span class="token comment"># -i 直接修改文件内容，而不是输出到终端 </span>
<span class="token comment"># s/old/new/g 表示将文件中的 old 替换为 new，g 表示全局替换</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/^$/d&#39;</span> <span class="token function">file</span>

<span class="token comment"># -i 直接修改文件内容，而不是输出到终端</span>
<span class="token comment"># /^$/d 表示删除空行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除指定行" tabindex="-1"><a class="header-anchor" href="#删除指定行" aria-hidden="true">#</a> 删除指定行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;1,3d&#39;</span> <span class="token function">file</span>

<span class="token comment"># -i 直接修改文件内容，而不是输出到终端</span>
<span class="token comment"># 1,3d 表示删除第 1 到第 3 行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示file文件第一行</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;1p&#39;</span> /path/to/file
 
<span class="token comment"># 显示file文件最后一行</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;$p&#39;</span> /path/fo/file
 
<span class="token comment"># 显示file文件第1-2行</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;1,2p&#39;</span> /pah/to/file
 
<span class="token comment"># 显示file文件第2到最后一行</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;2,$p&#39;</span> abc.file

<span class="token comment"># 查询关键词包含test的所有行</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/test/p&#39;</span> /path/to/file
 
<span class="token comment"># 查询包括关键字$所在所有行，使用反斜线\\屏蔽特殊含义</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/\\$/p&#39;</span> /path/to/file

<span class="token comment"># 删除file文件的第2行</span>
<span class="token function">sed</span> <span class="token string">&#39;2d&#39;</span>/path/to/file
 
<span class="token comment"># 删除file文件的第2行到末尾所有行</span>
<span class="token function">sed</span> <span class="token string">&#39;2,$d&#39;</span> /path/to/file
 
<span class="token comment"># 删除file文件的最后一行</span>
<span class="token function">sed</span> <span class="token string">&#39;$d&#39;</span> /path/to/file
 
<span class="token comment"># 删除file文件所有包含test的行</span>
<span class="token function">sed</span> <span class="token string">&#39;/test/&#39;</span>d /path/to/file

<span class="token comment"># 第一行后增加字符串&quot;XXX&quot;</span>
<span class="token function">sed</span> <span class="token string">&#39;1a XXX&#39;</span> /path/to/file
<span class="token comment"># 第一行到第3行，每行后面都增加字符串&quot;XXX&quot;</span>
<span class="token function">sed</span> <span class="token string">&#39;1,3a XXX&#39;</span> /path/to/file
<span class="token comment"># 在所有行后插入</span>
<span class="token function">sed</span>  <span class="token string">&#39;a  xxxx&#39;</span>    nssw.txt
 
<span class="token comment"># 第二行前插入xxxx</span>
<span class="token function">sed</span>  <span class="token string">&#39;2i  xxxx&#39;</span>    nssw.txt  
<span class="token comment"># 在所有行前插入xxxx</span>
<span class="token function">sed</span>  <span class="token string">&#39;i  xxxx&#39;</span>    nssw.txt   

<span class="token comment"># 第一行代替为XXX</span>
<span class="token function">sed</span> <span class="token string">&#39;1c XXX&#39;</span> /path/to/file
 
<span class="token comment"># 第一行到第2行代替为XXX</span>
<span class="token function">sed</span> <span class="token string">&#39;1,2c XXX&#39;</span> /path/to/file

<span class="token comment"># 对一行内匹配到的字符都进行替换</span>
<span class="token function">sed</span> <span class="token string">&#39;s/要被替换的字符串/新的字符串/g&#39;</span> filename  <span class="token comment"># 在整行范围内把old替换为new </span>
 
<span class="token comment"># 对一行内第一个匹配到的字符进行替换</span>
<span class="token function">sed</span> <span class="token string">&#39;s/要被替换的字符串/新的字符串/&#39;</span> filename   <span class="token comment"># 如果没有g标记，则只有每行第一个匹配的old被替换成new</span>
 
<span class="token comment"># 删除一行内指定列的字符</span>
<span class="token function">sed</span> <span class="token string">&#39;s/.//2&#39;</span> filename   <span class="token comment"># 通过.匹配任意字符，然后将第二个匹配的字符替换为空，则删除了第二个字符</span>
 
<span class="token comment"># 互换行内的字符位置</span>
<span class="token function">sed</span> <span class="token parameter variable">-r</span> <span class="token string">&#39;s/^(.)(.*)(.)$/\\3\\2\\1/&#39;</span> nssw.txt  <span class="token comment"># 通过-r参数，扩展正则操作</span>
 
<span class="token comment"># 范围内的行操作</span>
<span class="token function">sed</span> <span class="token string">&#39;4,7s/^/#/&#39;</span>   a.txt         //将第4~7行注释掉（行首加<span class="token comment">#号）</span>

<span class="token comment"># 对替换内容后的文件，进行直接修改保存 </span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/old/new/g&#39;</span> /path/to/file        <span class="token comment"># 使用-i参数对文件进行直接修改</span>
 
<span class="token comment"># 通过重定向符&gt;进行保存，注意sed后没有-n参数</span>
<span class="token function">sed</span> <span class="token string">&#39;s/old/new/g&#39;</span> /path/to/file  <span class="token operator">&gt;</span> newfile_path     <span class="token comment"># 使用&gt;对文件进行直接修改</span>
 
<span class="token comment"># 通过sed的-w参数进行保存，注意sed后有-n参数</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;1,3w c.txt&#39;</span> a.txt   <span class="token comment"># 把1到3行存储为新文件c.txt</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;/^ii/w d.txt&#39;</span> a.txt  <span class="token comment"># 把ii开头的行保存为d.txt</span>

只保留一份，不实用其他备份名字：
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;&#39;</span> <span class="token string">&#39;s/Hello Tom/Hello World/g&#39;</span> test1.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),t=[l];function c(d,p){return s(),a("div",null,t)}const v=n(i,[["render",c],["__file","4. sed.html.vue"]]);export{v as default};
