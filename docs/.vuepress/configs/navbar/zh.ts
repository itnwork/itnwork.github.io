import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const zh: NavbarConfig = [
  {
    text: '指南',
    link: '/guide/',
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
]
