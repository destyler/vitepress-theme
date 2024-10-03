import type { ThemeCSSVars, ThemeCSSVarsVariant } from './themes'
import type { ColorOptions, PresetOptions } from './types'

declare function generateColorCSSVars(color: ThemeCSSVars): string

declare function colorCSSVarsStyles(
  lightVars: string,
  darkVars: string,
  { radius, themeName, darkSelector }: {
    radius?: number | false
    themeName?: string | false
    darkSelector: string
  }): string

declare function generateRadiusCSSVars(radius: number): string

declare function radiusCSSVarsStyles(radius: number): string

declare function generateGlobalStyles(): string

declare function getBuiltInTheme(name: string): ThemeCSSVarsVariant

declare function getColorTheme(color: ColorOptions): {
  light: ThemeCSSVars
  dark: ThemeCSSVars
  name: string
}

declare function generateCSSVars(theme: PresetOptions, onlyOne?: boolean): string
