import{_ as p,M as t,p as o,q as l,Q as s,t as n,N as e,a1 as r}from"./framework-e921cdd2.js";const c={},i=s("h2",{id:"定时监测mysql进程终止后自动重启的方法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#定时监测mysql进程终止后自动重启的方法","aria-hidden":"true"},"#"),n(" 定时监测MySQL进程终止后自动重启的方法")],-1),d=s("h2",{id:"前言",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),n(" 前言")],-1),u={href:"https://cloud.tencent.com/product/cdb?from=10680",target:"_blank",rel:"noopener noreferrer"},m={href:"https://cloud.tencent.com/product/cat?from=10680",target:"_blank",rel:"noopener noreferrer"},v=s("p",null,"运行环境：Linux centos7",-1),k=s("h2",{id:"编写shell脚本",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#编写shell脚本","aria-hidden":"true"},"#"),n(" 编写Shell脚本")],-1),b=s("p",null,"首先，我们要编写一个shell脚本，脚本主要执行的逻辑如下：",-1),h=s("p",null,"显示mysqld进程状态，如果判断进程未在运行，那么输出日志到文件，然后启动mysql服务，如果进程在运行，那么不执行任何操作，可以选择性输出监测结果。",-1),g=s("p",null,"可能大家对于shell脚本比较陌生，在这里推荐官方的shell脚本文档来参考一下",-1),y={href:"http://wiki.ubuntu.org.cn/Shell%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80",target:"_blank",rel:"noopener noreferrer"},q=r(`<p>shell脚本的后缀为sh，在任何位置新建一个脚本文件，我选择在 /etc/mysql 目录下新建一个 listen.sh 文件。</p><p>执行如下命令：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cd <span class="token operator">/</span>etc<span class="token operator">/</span>mysql
touch listen<span class="token punctuation">.</span>sh
vi listen<span class="token punctuation">.</span>sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入到vi中，我们添加如下脚本内容：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token hashbang comment">#!/bin/bash</span>
pgrep mysqld <span class="token operator">&amp;</span><span class="token operator">&gt;</span> <span class="token operator">/</span>dev<span class="token operator">/</span><span class="token keyword">null</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> $<span class="token operator">?</span> <span class="token operator">-</span>gt <span class="token number">0</span> <span class="token punctuation">]</span>
then
echo <span class="token string">&quot;\`date\` mysql is stop&quot;</span>
service mysql start
<span class="token keyword">else</span>
echo <span class="token string">&quot;\`date\` mysql running&quot;</span>
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 pgrep mysqld 是监测mysqld服务的运行状态，&amp;&gt; /dev/null 是将其结果输出到空文件，也就是不保存输出信息</p><p>$? 是拿到上一条命令的运行结果，-gt 0 是判断是否大于0，后面则是输出时间到日志文件，然后启动mysql，否则不启动mysql</p><p>保存好了，那么我们执行如下的命令，来测试一下。</p><p>命令文字版本：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>root@iZ28uogb3laZ<span class="token operator">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>mysql# vi listen<span class="token punctuation">.</span>sh
root@iZ28uogb3laZ<span class="token operator">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>mysql# pgrep mysqld
<span class="token number">3359</span>
root@iZ28uogb3laZ<span class="token operator">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>mysql# chmod <span class="token number">777</span> listen<span class="token punctuation">.</span>sh
root@iZ28uogb3laZ<span class="token operator">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>mysql# <span class="token punctuation">.</span><span class="token operator">/</span>listen<span class="token punctuation">.</span>sh
Sun Aug <span class="token number">16</span> <span class="token number">16</span><span class="token operator">:</span><span class="token number">44</span><span class="token operator">:</span><span class="token number">58</span> <span class="token constant">CST</span> <span class="token number">2015</span> mysql running
root@iZ28uogb3laZ<span class="token operator">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>mysql# sudo service mysql stop
mysql stop<span class="token operator">/</span>waiting
root@iZ28uogb3laZ<span class="token operator">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>mysql# <span class="token punctuation">.</span><span class="token operator">/</span>listen<span class="token punctuation">.</span>sh
Sun Aug <span class="token number">16</span> <span class="token number">16</span><span class="token operator">:</span><span class="token number">45</span><span class="token operator">:</span><span class="token number">17</span> <span class="token constant">CST</span> <span class="token number">2015</span> mysql is stop
mysql start<span class="token operator">/</span>running<span class="token punctuation">,</span> process <span class="token number">4084</span>
root@iZ28uogb3laZ<span class="token operator">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>mysql# <span class="token punctuation">.</span><span class="token operator">/</span>listen<span class="token punctuation">.</span>sh
Sun Aug <span class="token number">16</span> <span class="token number">16</span><span class="token operator">:</span><span class="token number">45</span><span class="token operator">:</span><span class="token number">24</span> <span class="token constant">CST</span> <span class="token number">2015</span> mysql running
root@iZ28uogb3laZ<span class="token operator">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>mysql#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>嗯，编辑完了.sh文件之后，我们首先要对其进行授权，增加可执行的权限。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>sudo chmod <span class="token number">777</span> listen<span class="token punctuation">.</span>sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后运行脚本测试一下，显示mysql正在运行。把mysql关掉，运行脚本，便会检测到mysql已关闭，然后重新启动了mysql，再次运行，便会发现mysql正常运行了。</p><h2 id="修改日志输出" tabindex="-1"><a class="header-anchor" href="#修改日志输出" aria-hidden="true">#</a> 修改日志输出</h2><p>好，接下来我们把输出的内容保存到日志里。修改脚本文件如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token hashbang comment">#!/bin/bash</span>
pgrep mysqld <span class="token operator">&amp;</span><span class="token operator">&gt;</span> <span class="token operator">/</span>dev<span class="token operator">/</span><span class="token keyword">null</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> $<span class="token operator">?</span> <span class="token operator">-</span>gt <span class="token number">0</span> <span class="token punctuation">]</span>
then
echo <span class="token string">&quot;\`date\` mysql is stop&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>log<span class="token operator">/</span>mysql_listen<span class="token punctuation">.</span>log
service mysql start
<span class="token keyword">else</span>
echo <span class="token string">&quot;\`date\` mysql running&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>log<span class="token operator">/</span>mysql_listen<span class="token punctuation">.</span>log
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，每执行一次脚本，输出结果都会被保存到 /var/log/mysql_listen.log 中了。</p><h2 id="添加定时任务" tabindex="-1"><a class="header-anchor" href="#添加定时任务" aria-hidden="true">#</a> 添加定时任务</h2><p>好了，脚本可以顺利执行了，那么我们就需要定时调用一下这个脚本来运行了，我们需要用到 cron。</p><p>首先我们需要编辑一下corn调度表格，命令如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>crontab <span class="token operator">-</span>e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你是第一次编辑这个，他会让你选择文件打开方式，随便选一个数字就好了。</p><p>比如我们用GNU打开的，我们就在它的最后一行添加下面的一句话即可。</p><p>文字版本：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">*</span><span class="token operator">/</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token operator">*</span> <span class="token operator">*</span> <span class="token operator">*</span> <span class="token operator">/</span>etc<span class="token operator">/</span>mysql<span class="token operator">/</span>mysql_listen<span class="token punctuation">.</span>sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>/5代表五分钟执行一次，后面的四个点依次代表了，小时，日，月，星期。如果想要时间长一些，比如一小时调度一次，那就设置一下后面第一个*就好了。</p><p>好，保存一下，重启cron服务。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>service cron restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>嗯，调度任务已经添加进去了，这样，每五分钟系统就会调用一下刚才写的那个脚本。</p><p>过一段时间，我们来看一下运行效果，嗯，监控跑的很顺利呐。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /var/log/mysql_listen.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="宝塔面板中设置定时任务解决" tabindex="-1"><a class="header-anchor" href="#宝塔面板中设置定时任务解决" aria-hidden="true">#</a> 宝塔面板中设置定时任务解决</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 修复mysql异常
pgrep <span class="token parameter variable">-x</span> mysqld <span class="token operator">&amp;&gt;</span> /dev/null
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
/etc/init.d/mysqld start 
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h2><p>这样，我们就实现了五分钟定时检测MySQL进程服务，妈妈再也不用担心我的网站会宕掉啦。</p>`,35);function _(f,x){const a=t("ExternalLinkIcon");return o(),l("div",null,[i,d,s("p",null,[n("最近发现"),s("a",u,[n("MySQL"),e(a)]),n("服务隔三差五就会挂掉，导致我的网站和爬虫都无法正常运作。自己的网站是基于MySQL，在做爬虫存取一些资料的时候也是基于MySQL，数据量一大了，MySQL它就有点受不了了，时不时会崩掉，虽然我自己有"),s("a",m,[n("网站监控"),e(a)]),n("和邮件通知，但是好多时候还是需要我来手动连接我的服务器重新启动一下我的MySQL，这样简直太不友好了，所以，我就觉定自己写个脚本，定时监控它，如果发现它挂掉了就重启它。")]),v,k,b,h,g,s("p",null,[s("a",y,[n("Ubuntu Shell 编程基础"),e(a)])]),q])}const S=p(c,[["render",_],["__file","questions.html.vue"]]);export{S as default};
