import type { Config as ThemeConfig } from '../../src/vitepress/config'
import path from 'node:path'
import { presetUno } from 'unocss'
import UnoCss from 'unocss/vite'
import { defineConfigWithTheme } from 'vitepress'
import baseConfig from '../../src/vitepress/config/baseConfig'
import { builtinColors, presetDestyler } from '../../src/vitepress/unocss'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  vite: {
    build: {
      minify: false,
    },
    resolve: {
      alias: {
        '@destyler/vitepress-theme': path.join(__dirname, '../../src'),
      },
    },
    plugins: [
      UnoCss({
        presets: [
          presetUno(),
          presetDestyler(builtinColors.map(c => ({ color: c }))),
        ],
      }),
    ],
  },

  lang: 'en-US',
  title: 'Destyler',

  description: 'Vue.js - The Progressive JavaScript Framework',

  themeConfig: {

    logo: {
      light: '/light-logo.svg',
      dark: '/dark-logo.svg',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vue' },
      { icon: 'x', link: 'https://twitter.com/vuejs' },
      { icon: 'discord', link: 'https://discord.com/invite/HBherRA' },
    ],

    editLink: {
      repo: 'https://github.com/vuejs/docs/tree/main/src',
    },

    nav: [
      {
        text: 'Docs',
        activeMatch: `^/(guide|examples)/`,
        items: [
          {
            items: [
              { text: 'Guide', link: '/guide/introduction', badge: { text: 'New', type: 'success' } },
              { text: 'Installation', link: '/guide/installation' },
            ],
          },
        ],
      },
      {
        text: 'API Reference',
        activeMatch: `^/api/`,
        link: '/api/',
      },
      {
        text: 'Ecosystem',
        items: [
          {
            items: [{ text: 'Jobs', link: 'https://vuejobs.com/?ref=vuejs' }],
          },
          {
            text: 'Official Projects',
            items: [
              { text: 'Vue Router', link: 'https://next.router.vuejs.org/' },
              { text: 'Vuex', link: 'https://next.vuex.vuejs.org/' },
              { text: 'Vue CLI', link: 'https://cli.vuejs.org/' },
              {
                text: 'Vue Test Utils',
                link: 'https://next.vue-test-utils.vuejs.org/v2/guide/introduction.html',
              },
              {
                text: 'Devtools',
                link: 'https://github.com/vuejs/vue-devtools',
              },
            ],
          },
        ],
      },
      {
        text: 'Community',
        activeMatch: `^/community/`,
        badge: {
          text: 'New',
          type: 'primary',
        },
        items: [
          {
            items: [
              { text: 'Team', link: '/community/team/' },
              {
                text: 'Contribution Guide',
                link: '/community/contribution-guide',
              },
              { text: 'Events', link: 'https://events.vuejs.org/' },
            ],
          },
          {
            text: 'News',
            items: [
              { text: 'Twitter', link: 'https://twitter.com/vuejs' },
              { text: 'Newsletter', link: 'https://news.vuejs.org/' },
              { text: 'Blog', link: 'https://blog.vuejs.org/' },
            ],
          },
          {
            text: 'Help',
            items: [
              { text: 'Forum', link: 'https://forum.vuejs.org/' },
              { text: 'Chat', link: 'https://discord.com/invite/HBherRA' },
              { text: 'DEV Community', link: 'https://dev.to/t/vue' },
            ],
          },
        ],
      },
      {
        text: 'Sponsor',
        link: '/sponsor/',
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Essentials',
          items: [
            { text: 'Introduction', link: '/guide/introduction', icon: 'carbon:ai-status', badge: { text: 'New', type: 'success' } },
            { text: 'Installation', link: '/guide/installation' },
            {
              text: 'Application & Component Instances',
              link: '/guide/instance',
            },
            { text: 'Template Syntax', link: '/guide/template-syntax' },
            {
              text: 'Data Properties and Methods',
              link: '/guide/data-methods',
            },
            {
              text: 'Computed Properties and Watchers',
              link: '/guide/computed',
            },
            {
              text: 'Class and Style Bindings',
              link: '/guide/class-and-style',
            },
            { text: 'Conditional Rendering', link: '/guide/conditional' },
            { text: 'List Rendering', link: '/guide/list' },
            { text: 'Event Handling', link: '/guide/events' },
            { text: 'Form Input Bindings', link: '/guide/forms' },
            { text: 'Components Basics', link: '/guide/component-basics' },
          ],
        },
        {
          text: 'Components In-Depth',
          items: [
            {
              text: 'Component Registration',
              link: '/guide/component-registration',
            },
            { text: 'Props', link: '/guide/component-props' },
            { text: 'Non-Prop Attributes', link: '/guide/component-attrs' },
            { text: 'Custom Events', link: '/guide/component-custom-events' },
            { text: 'Slots', link: '/guide/component-slots' },
            {
              text: 'Provide / inject',
              link: '/guide/component-provide-inject',
            },
            {
              text: 'Dynamic & Async Components',
              link: '/guide/component-dynamic-async',
            },
            { text: 'Template refs', link: '/guide/component-template-refs' },
            {
              text: 'Handling Edge Cases',
              link: '/guide/component-edge-cases',
            },
          ],
        },
        {
          text: 'Transitions & Animation',
          items: [
            { text: 'Overview', link: '/guide/transitions-overview' },
            {
              text: 'Enter & Leave Transitions',
              link: '/guide/transitions-enterleave',
            },
            { text: 'List Transitions', link: '/guide/transitions-list' },
            { text: 'State Transitions', link: '/guide/transitions-state' },
          ],
        },
        {
          text: 'Reusability',
          items: [
            { text: 'Mixins', link: '/guide/mixins' },
            { text: 'Custom Directives', link: '/guide/custom-directive' },
          ],
        },
        {
          text: 'Composition API',
          items: [
            {
              text: 'Introduction',
              link: '/guide/composition-api-introduction',
            },
            { text: 'Setup', link: '/guide/composition-api-setup' },
            {
              text: 'Lifecycle Hooks',
              link: '/guide/composition-api-lifecycle-hooks',
            },
            {
              text: 'Provide / Inject',
              link: '/guide/composition-api-provide-inject',
            },
            {
              text: 'Template Refs',
              link: '/guide/composition-api-template-refs',
            },
          ],
        },
        {
          text: 'Advanced',
          items: [
            { text: 'Teleport', link: '/guide/teleport' },
            { text: 'Render Function', link: '/guide/render-function' },
            { text: 'Plugins', link: '/guide/plugins' },
          ],
        },
        {
          text: 'Digging Deeper',
          items: [
            { text: 'Reactivity in Depth', link: '/guide/reactivity' },
            {
              text: 'Reactivity Fundamentals',
              link: '/guide/reactivity-fundamentals',
            },
            {
              text: 'Reactivity in Computed and Watch',
              link: '/guide/reactivity-computed-watchers',
            },
            {
              text: 'Rendering Mechanisms and Optimizations',
              link: '/guide/optimizations',
            },
          ],
        },
        {
          text: 'Tooling',
          items: [
            {
              text: 'Single File Components',
              link: '/guide/single-file-component',
            },
            { text: 'Testing', link: '/guide/testing' },
            { text: 'TypeScript Support', link: '/guide/typescript-support' },
            { text: 'Mobile', link: '/guide/mobile' },
            {
              text: 'Production Deployment',
              link: '/guide/tooling/deployment',
            },
          ],
        },
        {
          text: 'Scaling Up',
          items: [
            { text: 'Routing', link: '/guide/routing' },
            { text: 'State Management', link: '/guide/state-management' },
            { text: 'Server-Side Rendering', link: '/guide/ssr' },
          ],
        },
        {
          text: 'Accessibility',
          items: [
            { text: 'Basics', link: '/guide/a11y-basics' },
            { text: 'Semantics', link: '/guide/a11y-semantics' },
            { text: 'Standards', link: '/guide/a11y-standards' },
            { text: 'Resources', link: '/guide/a11y-resources' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'Global API',
          items: [
            { text: 'Application', link: '/api/application' },
            { text: 'Utilities', link: '/api/utilities' },
          ],
        },
        {
          text: 'Component',
          items: [
            { text: 'Options: State', link: '/api/options-state' },
            { text: 'Options: Rendering', link: '/api/options-rendering' },
            {
              text: 'Options: Lifecycle Hooks',
              link: '/api/options-lifecycle',
            },
            {
              text: 'Options: Composition',
              link: '/api/options-composition',
            },
            { text: 'Options: Misc', link: '/api/options-misc' },
            {
              text: 'Instance',
              link: '/api/component-instance',
            },
          ],
        },
        {
          text: 'Composition API',
          items: [
            { text: 'setup()', link: '/api/composition-setup' },
            { text: 'Reactivity', link: '/api/composition-reactivity' },
            { text: 'Lifecycle', link: '/api/composition-lifecycle' },
          ],
        },
        {
          text: 'Built-ins',
          items: [
            { text: 'Directives', link: '/api/built-in-directives' },
            { text: 'Components', link: '/api/built-in-components' },
            { text: 'Special Attributes', link: '/api/special-attributes' },
          ],
        },
        {
          text: 'Single File Component',
          items: [
            { text: 'Specification', link: '/api/sfc-spec' },
            { text: '<script setup>', link: '/api/sfc-script-setup' },
            { text: '<style> Features', link: '/api/sfc-style' },
          ],
        },
        {
          text: 'TypeScript',
          items: [{ text: 'Utility Types', link: '/api/types-utility' }],
        },
        {
          text: 'Advanced',
          items: [
            { text: 'Render Function Helpers', link: '/api/render-function' },
            { text: 'Compiler Transforms', link: '/api/compiler' },
            { text: 'Server-Side Rendering', link: '/api/ssr' },
            { text: 'Custom Renderer', link: '/api/custom-renderer' },
          ],
        },
      ],
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT',
      },
      copyright: `Copyright © 2014-${new Date().getFullYear()} Evan You`,
      links: [
        { text: 'Figma Kit', link: '' },
        { text: 'Playground', link: 'https://play.destyler.org/' },
        { text: 'Roadmap', link: 'https://github.com/destyler/destyler/pulls?q=sort:updated-desc+is:pr+is:open' },
        { text: 'Release', link: 'https://github.com/destyler/destyler/releases' },
      ],
    },

    // For locale links
    localeLinks: [
      {
        link: 'https://vuejs.org',
        text: 'English',
        repo: 'https://github.com/vuejs/docs',
      },
      {
        link: 'https://ja.vuejs.org',
        text: '日本語',
        repo: 'https://github.com/vuejs-translations/docs-ja',
      },
      {
        link: '/guide/introduction',
        text: 'Help Us Translate!',
        isTranslationsDesc: true,
      },
    ],
  },
})
