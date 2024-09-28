<script lang="ts" setup>
import type { MenuBadgeItem } from '../../core'
import { inject } from 'vue'
import { VTLink } from '../../core'

defineProps<{
  text: string
  link: string
  badge?: MenuBadgeItem
}>()

const closeScreen = inject('close-screen') as () => void
</script>

<template>
  <VTLink class="vp-nav-screen-menu-group-link" :href="link" :badge="badge" @click="closeScreen">
    {{ text }}
  </VTLink>
</template>

<style scoped>
.vp-nav-screen-menu-group-link {
  --at-apply:
    block leading-8 text-13px font-normal
    transition-[color] duration-[0.25s] ml-0.6em
    text-foreground hover:text-foreground/60;
}
</style>
