# Quick Start

## Installation

```bash
npm install -D @destyler/vitepress
```

## Setting configuration

```ts
// .vitepress/vite.config.ts
import type { Config as ThemeConfig } from '@destyler/vitepress-theme'
import baseConfig from '@destyler/vitepress-theme/config'
import {
  builtinColors,
  presetDestyler
} from '@destyler/vitepress-theme/unocss'
import { presetUno } from 'unocss'
import UnoCss from 'unocss/vite'
import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig as any,

  vite: {
    plugins: [
      UnoCss({
        presets: [
          presetUno(),
          presetDestyler(builtinColors.map(c => ({ color: c }))),
        ],
      }),
    ],
  },
})
```

## Update Theme

```ts
// .vitepress/theme/index.ts
import { VPTheme } from '@destyler/vitepress-theme'
import { h } from 'vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

export default {
  ...VPTheme,
  Layout() {
    return h(VPTheme.Layout!, null, {})
  },
}
```

## Running

Now when you run your project, you can see the `Destyler` is style site appear before your eyes.
