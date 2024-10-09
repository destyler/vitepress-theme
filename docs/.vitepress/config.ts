import type { Config as ThemeConfig } from '@destyler/vitepress-theme'
import baseConfig from '@destyler/vitepress-theme/config'
import { defineConfigWithTheme } from 'vitepress'
import { version } from '../../package.json'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig as any,

  lang: 'en-US',
  title: '@destyler/vitepress-theme',

  description: 'A Vitepress theme inspired by @vue/theme, completely constructed using Destyler.',

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },

  themeConfig: {

    logo: {
      light: '/light-logo.svg',
      dark: '/dark-logo.svg',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/destyler/vitepress-theme' },
      { icon: 'x', link: 'https://twitter.com/elonehoo' },
      { icon: 'discord', link: 'https://discord.gg/SwgESrV7HY' },
    ],

    editLink: {
      repo: 'https://github.com/destyler/vitepress-theme/tree/main/docs',
    },

    nav: [
      {
        text: 'Docs',
        activeMatch: `^/(guide|examples)/`,
        items: [
          {
            items: [
              { text: 'Guide', link: '/guide/introduction', badge: { text: 'New', type: 'success' } },
              { text: 'Quick Start', link: '/guide/quick-start' },
            ],
          },
        ],
      },
      {
        text: version,
        items: [
          {
            items: [
              { text: 'Release Notes', link: 'https://github.com/destyler/vitepress-theme/releases' },
            ],
          },
        ],
      },
    ],

    sidebar: {
      '/': [
        {
          text: 'Essentials',
          items: [
            { text: 'Introduction', link: '/guide/introduction', icon: 'carbon:ai-status' },
            { text: 'Quick Start', link: '/guide/quick-start' },
          ],
        },
        {
          text: 'Layout',
          items: [
            { text: 'Home Page', link: '/layout/home-page' },
            { text: 'Navbar', link: '/layout/navbar' },
          ],
        },
        {
          text: 'Markdown',
          items: [
            { text: 'Extensions', link: '/markdown/index' },
          ],
        },
      ],
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://github.com/destyler/vitepress-theme/blob/main/LICENSE',
      },
      copyright: `Copyright © 2024-${new Date().getFullYear()} Elone Hoo`,
    },
  },
})
