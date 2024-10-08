import { VPTheme } from '@destyler/vitepress-theme'
import { h } from 'vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

// uncomment to test CSS variables override
// import './override.css'

export default {
  ...VPTheme,
  Layout() {
    return h(VPTheme.Layout!, null, {})
  },
}
