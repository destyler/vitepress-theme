<script lang="ts" setup>
import type { MenuItemWithLink } from '../../core'
import VPNavScreenMenuGroupLink from './VPNavScreenMenuGroupLink.vue'

defineProps<{
  text?: string
  items: MenuItemWithLink[]
}>()
</script>

<template>
  <div class="VPNavScreenMenuGroupSection">
    <p v-if="text" class="title">
      {{ text }}
    </p>
    <VPNavScreenMenuGroupLink
      v-for="item in items"
      :key="item.text"
      :text="item.text"
      :link="item.link"
      :badge="item.badge"
    />
  </div>
</template>

<style scoped>
.VPNavScreenMenuGroupSection {
  --at-apply: block;
}

.title {
  --at-apply:
    leading-8 text-[11px] font-bold uppercase
    transition-[color] duration-[0.25s]
    text-muted-foreground/80;
}
</style>
