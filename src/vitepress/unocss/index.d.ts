import type { Preset } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import type { PresetOptions } from './types'

export * from './generate'
export * from './themes'
export * from './types'

export function presetDestyler(options?: PresetOptions, globals?: boolean): Preset<Theme>

export const builtinColors: any

export const builtinRadiuses: number[]
