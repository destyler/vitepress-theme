import type { Theme } from 'vitepress'
import VPApp from './components/VPApp.vue'
import { withConfigProvider } from './composables/config'

const VPTheme: Theme = {
  Layout: withConfigProvider(VPApp),
}

export { VPTheme }
