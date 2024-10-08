import type { Theme } from 'vitepress'
import VPApp from './components/VPApp.vue'
import { withConfigProvider } from './composables/config'
import { builtinColors, builtinRadiuses, presetDestyler } from './unocss/index.js'

import './styles/variable.css'
import './styles/main.css'
import '../core/styles/index.css'

const VPTheme: Theme = {
  Layout: withConfigProvider(VPApp),
}

export {
  builtinColors,
  builtinRadiuses,
  presetDestyler,
  VPTheme,
}

export type { Config } from './config'
