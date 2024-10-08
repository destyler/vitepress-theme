import {
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetAnimations } from 'unocss-preset-animations'
import { generateCSSVars, generateGlobalStyles } from './generate.js'
import { themes } from './themes.js'

export const builtinColors = themes.map(theme => theme.name)
export const builtinRadiuses = [0, 0.3, 0.5, 0.75, 1]

/**
 * @param globals Generates global variables, like *.border-color, body.color, body.background.
 * @default
 */
export function presetDestyler(options = {}, globals = true) {
  return {
    name: 'unocss-preset-destyler',
    shortcuts: [
      {
        icones: 'w-5 h-5',
      },
    ],
    preflights: [
      {
        getCSS: () => `
          @keyframes collapse-down { from{ height: 0 } to { height: var(--destyler-collapse-content-height)} }
          @keyframes collapse-up { from{ height: var(--destyler-collapse-content-height)} to { height: 0 } }
          @keyframes collapsible-down { from{ height: 0 } to { height: var(--destyler-collapsible-content-height)} }
          @keyframes collapsible-up { from{ height: var(--destyler-collapsible-content-height)} to { height: 0 } }
          ${generateCSSVars(options)}
          ${globals ? generateGlobalStyles() : ''}
        `,
      },
    ],
    rules: [
      [
        'animate-collapse-down',
        {
          animation: 'collapse-down 0.2s ease-out',
        },
      ],
      [
        'animate-collapse-up',
        {
          animation: 'collapse-up 0.2s ease-out',
        },
      ],
      [
        'animate-collapsible-down',
        {
          animation: 'collapsible-down 0.2s ease-out',
        },
      ],
      [
        'animate-collapsible-up',
        {
          animation: 'collapsible-up 0.2s ease-out',
        },
      ],
    ],
    theme: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
    presets: [
      presetUno(),
      presetAttributify(),
      presetAnimations(),
    ],
    transformers: [
      transformerVariantGroup(),
      transformerDirectives(),
    ],
  }
}

export default presetDestyler
