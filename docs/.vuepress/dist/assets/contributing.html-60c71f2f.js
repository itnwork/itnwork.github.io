import{_ as c,M as n,p as s,q as i,Q as d,t as e,N as o,a1 as a}from"./framework-e921cdd2.js";const t={},l=d("h1",{id:"贡献指南",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#贡献指南","aria-hidden":"true"},"#"),e(" 贡献指南")],-1),p=d("h2",{id:"概览",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#概览","aria-hidden":"true"},"#"),e(" 概览")],-1),h={href:"https://classic.yarnpkg.com/zh-Hans/docs/workspaces",target:"_blank",rel:"noopener noreferrer"},u={href:"https://en.wikipedia.org/wiki/Monorepo",target:"_blank",rel:"noopener noreferrer"},b=d("code",null,"packages",-1),v=a('<ul><li><p><code>@vuepress/core</code>: Core 模块。提供 Node API 来创建 VuePress App ，包括页面逻辑、插件系统、数据准备等功能。</p></li><li><p><code>@vuepress/client</code>: Client 模块。包含客户端页面入口，并提供了客户端开发时可以用到的类型和工具函数。</p></li><li><p><code>@vuepress/bundler-vite</code>: 基于 Vite 的 Bundler 模块。使用 Vite 对 VuePress App 执行 <code>dev</code> 和 <code>build</code> 操作。</p></li><li><p><code>@vuepress/bundler-webpack</code>: 基于 Webpack 的 Bundler 模块。使用 Webpack 对 VuePress App 执行 <code>dev</code> 和 <code>build</code> 操作。</p></li><li><p><code>@vuepress/cli</code>: 命令行接口 (CLI) 模块。包含解析用户配置文件、调用 <code>@vuepress/core</code> 创建 VuePress App 、调用 <code>@vuepress/bundler-${name}</code> 来执行对应命令等功能。</p></li><li><p><code>@vuepress/theme-default</code>: 默认主题。</p></li><li><p><code>@vuepress/plugin-${name}</code>: 官方插件。</p></li><li><p><code>@vuepress/shared</code>: 既可以在 Node 端使用、也可以在客户端使用的工具函数模块。</p></li><li><p><code>@vuepress/utils</code>: 仅可以在 Node 端使用的工具函数模块。</p></li><li><p><code>vuepress</code>: 是 <code>@vuepress/cli</code> + <code>@vuepress/bundler-webpack</code> + <code>@vuepress/theme-default</code> 的封装。如果用户想使用 默认主题 + Webpack ，仅安装这个 Package 就可以了。</p></li><li><p><code>vuepress-vite</code>: 是 <code>@vuepress/cli</code> + <code>@vuepress/bundler-vite</code> + <code>@vuepress/theme-default</code> 的封装。如果用户想使用 默认主题 + Vite ，仅安装这个 Package 就可以了。</p></li></ul><h2 id="开发配置" tabindex="-1"><a class="header-anchor" href="#开发配置" aria-hidden="true">#</a> 开发配置</h2><p>开发要求：</p>',3),_={href:"http://nodejs.org",target:"_blank",rel:"noopener noreferrer"},f=d("strong",null,"version 12+",-1),y={href:"https://classic.yarnpkg.com/zh-Hans/docs/install",target:"_blank",rel:"noopener noreferrer"},g=a(`<p>克隆代码仓库，并安装依赖：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>监听源文件修改：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打开另一个终端，开始开发项目文档网站：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>本项目开发使用的一些主要工具：</p>`,7),k={href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"},V=a('<h2 id="开发脚本" tabindex="-1"><a class="header-anchor" href="#开发脚本" aria-hidden="true">#</a> 开发脚本</h2><h3 id="yarn-build" tabindex="-1"><a class="header-anchor" href="#yarn-build" aria-hidden="true">#</a> <code>yarn build</code></h3><p><code>build</code> 命令会使用 <code>tsc</code> 将 TS 源文件编译为 JS 文件。</p><p>你在克隆代码仓库后，可能需要先执行该命令来确保项目代码可以顺利运行，因为编译后的 JS 文件被 <code>.gitignore</code> 排除在仓库以外了。</p><h3 id="yarn-copy" tabindex="-1"><a class="header-anchor" href="#yarn-copy" aria-hidden="true">#</a> <code>yarn copy</code></h3><p><code>copy</code> 命令会执行所有子 Package 中的 <code>copy</code> 命令，将一些资源文件从源代码目录复制到输出目录。</p><p>一些资源文件（如 <code>.vue</code>, <code>.css</code> 文件等）不能被 <code>build</code> 命令处理，但是同样需要将他们放置到输出目录中。</p><p>你在克隆代码仓库后，可能也需要先执行该命令来确保项目代码可以顺利运行。</p><h3 id="yarn-dev" tabindex="-1"><a class="header-anchor" href="#yarn-dev" aria-hidden="true">#</a> <code>yarn dev</code></h3><p><code>dev</code> 命令使用监听 (watch) 模式执行 <code>copy</code> 和 <code>build</code> 命令。</p><h3 id="yarn-clean" tabindex="-1"><a class="header-anchor" href="#yarn-clean" aria-hidden="true">#</a> <code>yarn clean</code></h3><p><code>clean</code> 命令会执行所有子 Package 中的 <code>clean</code> 命令，清除所有的输出文件目录和缓存文件。换言之，它将移除所有通过 <code>build</code> 和 <code>copy</code> 命令生成的文件。</p><p>当你想要从最初状态重新构建源代码时，你可以执行该命令。</p><h3 id="yarn-docs" tabindex="-1"><a class="header-anchor" href="#yarn-docs" aria-hidden="true">#</a> <code>yarn docs:*</code></h3><h4 id="yarn-docs-build-yarn-docs-dev-yarn-docs-clean" tabindex="-1"><a class="header-anchor" href="#yarn-docs-build-yarn-docs-dev-yarn-docs-clean" aria-hidden="true">#</a> <code>yarn docs:build</code>, <code>yarn docs:dev</code>, <code>yarn docs:clean</code></h4><p><code>docs:</code> 前缀表明，这些命令是针对文档 (documentation) 进行操作的，即 <code>docs</code> 目录。</p><p>VuePress 使用它自己来构建自己的文档网站。</p><p>你需要先执行 <code>yarn build &amp;&amp; yarn copy</code> 来构建 VuePress 源代码，然后再运行这些 <code>docs:</code> 开头的命令来开发或构建文档。</p><h4 id="yarn-docs-serve" tabindex="-1"><a class="header-anchor" href="#yarn-docs-serve" aria-hidden="true">#</a> <code>yarn docs:serve</code></h4><p>在本地启动文档网站服务器。</p><p>你需要先运行 <code>yarn docs:build</code> 来生成文档网站的输出文件，然后再通过该命令来启动文档网站。</p><h3 id="yarn-lint" tabindex="-1"><a class="header-anchor" href="#yarn-lint" aria-hidden="true">#</a> <code>yarn lint</code></h3><p><code>lint</code> 命令使用 ESLint 来检查所有源文件。</p><h3 id="yarn-test" tabindex="-1"><a class="header-anchor" href="#yarn-test" aria-hidden="true">#</a> <code>yarn test</code></h3><p><code>test</code> 命令使用 Jest 来运行单元测试。</p><h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2><p>VuePress 的文档是由 VuePress 自己驱动的，是由该仓库中的源码构建而来。</p><p>所有的 Markdown 源文件都放置在 <code>docs</code> 目录下。我们维护了两种翻译：</p><ul><li>英语 (en-US) 在 <code>/</code> 路径下</li><li>中文 (zh-CN) 在 <code>/zh/</code> 路径下</li></ul><p>我们部署了两套站点：</p>',30),w={href:"https://www.netlify.com",target:"_blank",rel:"noopener noreferrer"},N={href:"https://v2.vuepress.vuejs.org",target:"_blank",rel:"noopener noreferrer"},S={href:"https://pages.github.com",target:"_blank",rel:"noopener noreferrer"},j={href:"https://vuepress.github.io",target:"_blank",rel:"noopener noreferrer"};function C(A,B){const r=n("ExternalLinkIcon");return s(),i("div",null,[l,p,d("p",null,[e("项目仓库借助于 "),d("a",h,[e("Yarn Classic 工作区"),o(r)]),e(" 来实现 "),d("a",u,[e("Monorepo"),o(r)]),e(" ，在 "),b,e(" 目录下存放了多个互相关联的独立 Package 。")]),v,d("ul",null,[d("li",null,[d("a",_,[e("Node.js"),o(r)]),e(),f]),d("li",null,[d("a",y,[e("Yarn v1 classic"),o(r)])])]),g,d("ul",null,[d("li",null,[d("a",k,[e("TypeScript"),o(r)]),e(" 作为开发语言")]),d("li",null,[d("a",m,[e("Jest"),o(r)]),e(" 用于单元测试")]),d("li",null,[d("a",x,[e("ESLint"),o(r)]),e(" + "),d("a",P,[e("Prettier"),o(r)]),e(" 用于代码检查和格式化")])]),V,d("ul",null,[d("li",null,[e("在 "),d("a",w,[e("Netlify"),o(r)]),e(" 部署的 Release 版本。该站点是从最新发布的版本中构建而来，因此用户不会看到未发布的改动。域名为 "),d("a",N,[e("https://v2.vuepress.vuejs.org"),o(r)]),e("。")]),d("li",null,[e("在 "),d("a",S,[e("GitHub Pages"),o(r)]),e(" 部署的 Developer 版本。该站点是从最新的提交中构建而来，因此开发者可以预览最新的改动。域名为 "),d("a",j,[e("https://vuepress.github.io"),o(r)]),e("。")])])])}const L=c(t,[["render",C],["__file","contributing.html.vue"]]);export{L as default};