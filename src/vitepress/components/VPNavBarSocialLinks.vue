<script lang="ts" setup>
import { VTSocialLinks } from '../../core'
import { useConfig } from '../composables/config'

const { config } = useConfig()
</script>

<template>
  <VTSocialLinks
    v-if="config.socialLinks"
    class="vp-nav-bar-social-links"
    size="small"
    :links="config.socialLinks"
  />
</template>

<style scoped>
.vp-nav-bar-social-links {
  --at-apply: hidden mr-[-10px];
}

@media (min-width: 1280px) {
  .vp-nav-bar-social-links {
    --at-apply: flex;
  }
}
</style>
