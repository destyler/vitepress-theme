import type { Theme } from 'vitepress'
import VPApp from './components/VPApp.vue'
import { withConfigProvider } from './composables/config'
import { presetDestyler } from './unocss'

import './styles/variable.css'
import './styles/main.css'
import '../core/styles/index.css'

const VPTheme: Theme = {
  Layout: withConfigProvider(VPApp),
}

export {
  presetDestyler,
  VPTheme
}

export type { Config } from './config'
