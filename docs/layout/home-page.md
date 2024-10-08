# Home Page

Theme provides a homepage layout, which you can also see used on [the homepage of this site](/). You may use it on any of your pages by specifying `page: true` in the [frontmatter](https://vitepress.dev/guide/frontmatter).

```yaml
---
page: true
---
```

You can start using your favorite components to build your homepage.

If you need some good backgrounds, you can check out some of the backgrounds prepared for you in Destyler.

## LandingBackground

<Demo1 />

```vue
<script setup lang="ts">
import { LandingBackground } from '@destyler/vitepress-theme'
</script>

<template>
  <LandingBackground />
</template>
```

## GridPattern

<Demo2 />

```vue
<script setup lang="ts">
import { GridPattern } from '@destyler/vitepress-theme'
</script>

<template>
  <GridPattern />
</template>
```

## DotPattern

<Demo3 />

```vue
<script setup lang="ts">
import { DotPattern } from '@destyler/vitepress-theme'
</script>

<template>
  <DotPattern />
</template>
```
