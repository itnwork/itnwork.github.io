import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from '@vuepress/utils'
import { searchPlugin } from '@vuepress/plugin-search'
import {
    head,
    navbarZh,
    sidebarZh,
  } from './configs/index.js'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
    base: '/',

    head,
  
    // site-level locales config
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '艾特学苑',
        description: 'Vue 驱动的静态网站生成器',
      },
    },

    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {},
      }),

    theme: defaultTheme({
        // 在这里进行配置
        logo: '/images/hero.png',

        repo: 'itnwork/itnwork.github.io',

        docsDir: 'docs',

        // theme-level locales config
        locales: {
        /**
         * Chinese locale config
         */
        '/': {
            // navbar
            navbar: navbarZh,

            // sidebar
            sidebar: sidebarZh,

            // page meta
            editLinkText: '在 GitHub 上编辑此页',
            lastUpdatedText: '上次更新',
            contributorsText: '贡献者',

            // custom containers
            tip: '提示',
            warning: '注意',
            danger: '警告',

            // 404 page
            notFound: [
            '这里什么都没有',
            '我们怎么到这来了？',
            '这是一个 404 页面',
            '看起来我们进入了错误的链接',
            ],
            backToHome: '返回首页',

            // a11y
            openInNewWindow: '在新窗口打开',
            toggleColorMode: '切换颜色模式',
            toggleSidebar: '切换侧边栏',
            },
        },
    }),
     // configure markdown
    markdown: {
        importCode: {
        handleImportPath: (str) =>
            str.replace(/^@vuepress/, path.resolve(__dirname, '../../ecosystem')),
        },
    },

    plugins: [
        searchPlugin({
          // 配置项
          // 排除首页
          isSearchable: (page) => page.path !== '/',
          // 允许搜索 Frontmatter 中的 `tags`
        //   getExtraFields: (page) => page.frontmatter.tags ?? [],
          locales: {
            '/': {
              placeholder: '搜索',
            },
          },
        }),
      ],

    // registerComponentsPlugin({
    //     componentsDir: path.resolve(__dirname, './components'),
    // }),

})