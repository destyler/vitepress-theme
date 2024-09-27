<script setup lang="ts">
import type { MenuBadgeItem } from '../../core'
import { InfoRoot } from 'destyler'

const props = defineProps<{ item: MenuBadgeItem }>()
</script>

<template>
  <InfoRoot as="span" class="vt-menu-badge" :class="props.item.type">
    {{ props.item.text }}
  </InfoRoot>
</template>
