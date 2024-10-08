type ThemeColorString = `${number} ${number}% ${number}%`

export type ThemeCSSVarKey = (any)[number]

export type ThemeCSSVars = {
  [K in ThemeCSSVarKey]: ThemeColorString
}

export interface ThemeCSSVarsVariant {
  name: string
  light: ThemeCSSVars
  dark: ThemeCSSVars
}

export type Themes = (any)[number]

export const themes: Themes
