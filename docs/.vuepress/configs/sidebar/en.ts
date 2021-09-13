import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
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
      text: 'program',
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
}
