import { mergeDeep } from 'unocss'
import { themeCSSVarKeys, themes } from './themes.js'

function generateColorCSSVars(color) {
  return Object.entries(color)
    .map(([key, value]) => {
      if (!themeCSSVarKeys.includes(key))
        return ''
      return `  --${key}: ${value};`
    })
    .filter(Boolean)
    .join('\n')
}

function colorCSSVarsStyles(lightVars, darkVars, { radius, themeName, darkSelector }) {
  return `
${themeName ? `.theme-${themeName}` : ':root'} {
${lightVars}
${radius ? generateRadiusCSSVars(radius) : ''}
}
${themeName ? `${darkSelector} .theme-${themeName}` : darkSelector} {
${darkVars}
}`
}

function generateRadiusCSSVars(radius) {
  return `  --radius: ${radius}rem;`
}

function radiusCSSVarsStyles(radius) {
  return `
:root {
${generateRadiusCSSVars(radius)}
}
`
}

export function generateGlobalStyles() {
  return `
* {
  border-color: hsl(var(--border));
}

body {
  color: hsl(var(--foreground));
  background: hsl(var(--background));
}
`
}

function getBuiltInTheme(name) {
  const theme = themes.find(t => t.name === name)
  if (!theme)
    throw new Error(`Unknown color: ${name}`)
  return {
    name,
    ...theme.cssVars,
  }
}

function getColorTheme(color) {
  let light
  let dark
  let name

  if (typeof color === 'string') {
    name = color
    ;({ light, dark } = getBuiltInTheme(color))
  }
  else if ('base' in color) {
    name = color.base
    ;({ light, dark } = mergeDeep(getBuiltInTheme(color.base), color))
  }
  else {
    name = color.name
    ;({ light, dark } = color)
  }
  return { light, dark, name }
}

export function generateCSSVars(theme, onlyOne = true) {
  if (Array.isArray(theme))
    return theme.map(t => generateCSSVars(t, false)).join('\n')

  const { color = 'zinc', radius = 0.5, darkSelector = '.dark' } = theme

  let cssStyle = ''

  if (!color) {
    if (radius)
      cssStyle += radiusCSSVarsStyles(radius)
  }
  else {
    const { light, dark, name } = getColorTheme(color)
    const lightVars = generateColorCSSVars(light)
    const darkVars = generateColorCSSVars(dark)

    cssStyle += colorCSSVarsStyles(lightVars, darkVars, { radius, themeName: !onlyOne && name, darkSelector })
  }

  return cssStyle
}
