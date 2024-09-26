<script setup lang="ts">
import type { NavItemWithChildren } from '../config'
import {
  Icon,
  NavigationContent,
  NavigationTrigger,
} from 'destyler'

const props = defineProps<{
  item: NavItemWithChildren
}>()
</script>

<template>
  <NavigationTrigger class="vp-nav-bar-menu-button">
    {{ props.item.text }}
    <Icon name="carbon:chevron-down" class="vp-nav-bar-menu-text-icon" />
  </NavigationTrigger>
  <NavigationContent>
    11
  </NavigationContent>
</template>

<style>
.vp-nav-bar-menu-button {
  --at-apply:
    flex items-center h-[var(--vt-nav-height)]
    px-3 transition-[color] duration-[0.5s]
    text-popover-foreground hover:text-muted-foreground;
}

.vp-nav-bar-menu-text-icon {
  --at-apply: ml-1 w-14px h-14px fill-current;
}
</style>
