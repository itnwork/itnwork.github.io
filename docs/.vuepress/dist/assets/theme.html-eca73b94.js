import{_ as d,M as o,p as c,q as i,Q as n,t as e,N as s,V as t,a1 as l}from"./framework-e921cdd2.js";const p={},u=n("h1",{id:"主题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#主题","aria-hidden":"true"},"#"),e(" 主题")],-1),h=n("p",null,"VuePress 主题为你提供了布局、样式和其他功能，帮助你专注于 Markdown 内容的写作。",-1),m=n("p",null,[e("然而，你可能觉得默认主题不够出色。或者你想要搭建一个其他类型的网站而不是文档，比如博客。此时，你可以尝试 "),n("a",{href:"#%E7%A4%BE%E5%8C%BA%E4%B8%BB%E9%A2%98"},"使用社区主题"),e(" 或者 "),n("a",{href:"#%E6%9C%AC%E5%9C%B0%E4%B8%BB%E9%A2%98"},"创建本地主题"),e("。")],-1),v=n("h2",{id:"社区主题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#社区主题","aria-hidden":"true"},"#"),e(" 社区主题")],-1),_={href:"https://www.npmjs.com/search?q=keywords:vuepress-theme",target:"_blank",rel:"noopener noreferrer"},k=l(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以使用主题名称或者它的简称：</p><table><thead><tr><th>主题名称</th><th>简称</th></tr></thead><tbody><tr><td><code>vuepress-theme-foo</code></td><td><code>foo</code></td></tr><tr><td><code>@org/vuepress-theme-bar</code></td><td><code>@org/bar</code></td></tr><tr><td><code>@vuepress/theme-default</code></td><td><code>@vuepress/default</code></td></tr></tbody></table><h2 id="本地主题" tabindex="-1"><a class="header-anchor" href="#本地主题" aria-hidden="true">#</a> 本地主题</h2><p>如果你想要使用自己的自定义主题，但是又不想发布它，你可以创建一个本地主题。</p><p>首先，创建本地主题目录，一般是 <code>.vuepress/theme</code> ：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└─ docs
   ├─ .vuepress
   │  ├─ theme
   │  │  └─ index.js
   │  └─ config.js
   └─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，设置主题目录的绝对路径来使用它：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./path/to/docs/.vuepress/theme&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function f(b,g){const a=o("RouterLink"),r=o("ExternalLinkIcon");return c(),i("div",null,[u,h,n("p",null,[e("VuePress 有一个开箱即用的默认主题，正使用在你当前正在浏览的文档网站上。默认主题为文档网站提供了基础且实用的功能，你可以前往 "),s(a,{to:"/reference/default-theme/config.html"},{default:t(()=>[e("默认主题配置参考")]),_:1}),e(" 获取全部的配置列表。")]),m,v,n("p",null,[e("社区用户创建了很多主题，并将它们发布到了 "),n("a",_,[e("NPM"),s(r)]),e(" 上。查看主题本身的文档可以获取更详细的指引。")]),n("p",null,[e("一般而言，你需要在 "),s(a,{to:"/reference/config.html#theme"},{default:t(()=>[e("theme")]),_:1}),e(" 配置项中设置你要使用的主题名称：")]),k,n("p",null,[e("接下来，前往 "),s(a,{to:"/advanced/theme.html"},{default:t(()=>[e("深入 > 开发主题")]),_:1}),e(" 学习如何开发你自己的主题。")])])}const E=d(p,[["render",f],["__file","theme.html.vue"]]);export{E as default};
