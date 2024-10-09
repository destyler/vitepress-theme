import { builtinColors, presetDestyler } from '@destyler/vitepress-theme/unocss'
import { presetUno } from 'unocss'
import UnoCss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['@vueuse/core', 'vitepress', 'vue-demi', 'destyler'],
  },
  plugins: [
    UnoCss({
      presets: [
        presetUno(),
        presetDestyler(builtinColors.map((c: any) => ({ color: c }))),
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
})
