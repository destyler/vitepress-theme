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
