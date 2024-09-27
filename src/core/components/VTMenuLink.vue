<script lang="ts" setup>
import type { MenuItemWithLink } from '../types/menu'
import VTLink from './VTLink.vue'

const props = defineProps<{ item: MenuItemWithLink }>()
</script>

<template>
  <VTLink class="vt-menu-link" :href="props.item.link" :badge="props.item.badge">
    {{ props.item.text }}
  </VTLink>
</template>

<style>
.vt-menu-link {
  --at-apply:
    block leading-7 text-[13px] font-normal px-[18px] text-dark/80 dark:text-light/80
    whitespace-nowrap transition-[color] duration-[0.25s] hover:text-primary;
}
</style>
