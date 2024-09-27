import type { Theme } from 'vitepress'
import VPApp from './components/VPApp.vue'
import { withConfigProvider } from './composables/config'

import './styles/variable.css'
import './styles/main.css'
import '../core/styles/index.css'

const VPTheme: Theme = {
  Layout: withConfigProvider(VPApp),
}

export { VPTheme }
