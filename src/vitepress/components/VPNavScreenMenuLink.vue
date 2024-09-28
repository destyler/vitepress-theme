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
  <VTLink class="vp-nav-screen-menu-link" :href="link" :badge="badge" @click="closeScreen">
    {{ text }}
  </VTLink>
</template>

<style scoped>
.vp-nav-screen-menu-link {
  --at-apply:
    border-b border-solid border-input cursor-pointer
    block leading-6 text-sm font-medium pt-3 pb-11px
    text-foreground hover:text-foreground/60;
  transition: border-color 0.5s, color 0.25s;
}
</style>
