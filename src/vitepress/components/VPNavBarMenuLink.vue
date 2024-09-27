<script setup lang="ts">
import type { NavItemWithLink } from '../config'
import {
  NavigationLink,
} from 'destyler'

const props = defineProps<{
  item: NavItemWithLink
}>()
</script>

<template>
  <NavigationLink class="vp-nav-bar-menu-link">
    {{ props.item.text }}
  </NavigationLink>
</template>

<style>
.vp-nav-bar-menu-link {
  --at-apply:
    flex items-center h-[var(--vt-nav-height)]
    px-3 transition-[color] duration-[0.5s] cursor-pointer
    text-foreground hover:text-foreground/60;
}
</style>
