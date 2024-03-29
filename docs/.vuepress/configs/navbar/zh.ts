import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
  {
    text: `首页`,
    link: '/',
  },
  {
    text: `日志`,
    link: '/blog/',
  },
  {
    text: '程序',
    children: [
      {
        text: '语言',
        children: [
          '/program/c++.md',
          '/program/go.md',
          '/program/java.md',
          '/program/php.md',
          '/program/python.md',
        ],
      },
      {
        text: '其他资源',
        children: [
          '/contributing.md',
          {
            text: 'Awesome VuePress',
            link: 'https://github.com/vuepress/awesome-vuepress',
          },
        ],
      },
    ],
  },
  {
    text: `其他`,
    link: '/other/',
  },
  {
    text: '本站指南',
    link: '/guide/',
  },
  {
    text: `关于我`,
    link: '/about/',
  },
]
