<script setup lang="ts">
import { provide } from 'vue'
import { useNav } from '../composables/nav'
import { useSidebar } from '../composables/sidebar'

const { isScreenOpen, closeScreen, toggleScreen } = useNav()
const { hasSidebar } = useSidebar()

provide('close-screen', closeScreen)
</script>

<template>
  <header class="vp-nav nav-bar" :class="{ stick: !hasSidebar }">
    <slot />
  </header>
</template>

<style scoped>
.vp-nav {
  --at-apply: relative top-0 left-0 z-20;
}

@media (min-width: 960px) {
  .vp-nav {
    --at-apply: fixed w-full top-0;
  }
}
</style>
