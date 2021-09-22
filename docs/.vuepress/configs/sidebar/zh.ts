import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/guide/': [
    {
      text: '指南',
      children: [
        '/guide/README.md',
        '/guide/getting-started.md',
        '/guide/configuration.md',
        '/guide/page.md',
        '/guide/markdown.md',
        '/guide/assets.md',
        '/guide/i18n.md',
        '/guide/deployment.md',
        '/guide/theme.md',
        '/guide/plugin.md',
        '/guide/bundler.md',
        '/guide/migration.md',
      ],
    },
  ],
  '/program/': [
    {
      text: '程序',
      children: [
        '/program/README.md',
        '/program/c++.md',
        '/program/go.md',
        '/program/java.md',
        '/program/php.md',
        '/program/python.md',
      ],
    },
  ],
  '/blog/': [
    {
      text: '日志',
      children: [
        '/blog/README.md',
        '/blog/99-additional-bits-of-unsolicited-advice.md',
      ],
    },
  ],
}
