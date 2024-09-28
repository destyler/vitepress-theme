<script lang="ts" setup>
import { computed } from 'vue'
import { VTHamburger } from '../../core'
import { useConfig } from '../composables/config'

defineProps<{
  active: boolean
}>()

const { config } = useConfig()

const hasContent = computed(() => {
  return config.value.appearance || config.value.socialLinks
})
</script>

<template>
  <VTHamburger v-if="hasContent" class="vp-nav-bar-hamburger" :active="active" />
</template>

<style scoped>
.vp-nav-bar-hamburger {
  --at-apply: w-40px h-[--vt-nav-height];
}

@media (min-width: 768px) {
  .vp-nav-bar-hamburger {
    --at-apply: hidden;
  }
}
</style>
