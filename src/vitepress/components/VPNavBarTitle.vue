<script setup lang="ts">
import { Image, ImageFallback, ImageRoot, Link } from 'destyler'
import { useData } from 'vitepress'
import { useConfig } from '../composables/config'

const { site, isDark } = useData()

const { config } = useConfig()
</script>

<template>
  <Link class="vp-nav-bar-title" to="/">
    <slot name="navbar-title">
      <ImageRoot class="logo">
        <Image :src="typeof config.logo === 'string' ? config.logo : isDark ? config.logo?.dark : config.logo?.light" />
        <ImageFallback>ET</ImageFallback>
      </ImageRoot>
      <span class="text">{{ site.title }}</span>
    </slot>
  </Link>
</template>

<style scoped>
.vp-nav-bar-title {
  --at-apply:
    flex
    items-center
    h-[var(--vt-nav-height)]
    transition-opacity
    duration-[0.25s]
    pt-px;
}

.logo {
  --at-apply: relative;
}
.logo + .text {
  --at-apply: pl-2;
}
.text {
  --at-apply: text-base font-medium hover:op-60;
}
</style>
