import type { Config as ThemeConfig } from '@destyler/vitepress-theme'
import baseConfig from '@destyler/vitepress-theme/config'
import { builtinColors, presetDestyler } from '@destyler/vitepress-theme/unocss'
import { presetUno } from 'unocss'
import UnoCss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfigWithTheme } from 'vitepress'
import { version } from '../../package.json'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig as any,

  vite: {
    build: {
      minify: false,
    },
    plugins: [
      UnoCss({
        presets: [
          presetUno(),
          presetDestyler(builtinColors.map(c => ({ color: c }))),
        ],
      }),
      Components({
        include: [/\.vue/, /\.md/],
        dirs: [
          '.vitepress/components',
        ],
        dts: '.vitepress/components.d.ts',
      }),
      AutoImport({
        dirs: [
          '.vitepress/composables',
        ],
        imports: [
          'vue',
          'vitepress',
          '@vueuse/core',
        ],
        dts: '.vitepress/auto-imports.d.ts',
      }),
    ],
  },

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
              { text: 'Guide', link: '/guide/introduction' },
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
