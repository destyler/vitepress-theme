# Navbar

We have basically compatible with Vitepress Navbar configuration, but we have added some additional settings.

## Badge

We have added a Badge configuration that can display a Badge on each Item of the Navbar, as follows:

```ts
import { defineConfig } from 'vitepress'
export default defineConfig({
  nav: [
    {
      text: 'Docs',
      activeMatch: `^/(guide|examples)/`,
      items: [
        {
          items: [
            {
              text: 'Guide',
              link: '/guide/introduction',
              badge: {
                text: 'New',
                type: 'success'
              }
            },
            {
              text: 'Quick Start',
              link: '/guide/quick-start'
            },
          ],
        },
      ],
    },
  ],
})
```
### Props

- **text**: Displayed text

- **type**: The type of Badge can be `primary` | `secondary` | `success` | `info` | `warning` | `danger`.
