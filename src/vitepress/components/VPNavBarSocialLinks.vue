<script lang="ts" setup>
import { VTSocialLinks } from '../../core'
import { useConfig } from '../composables/config'

const { config } = useConfig()
</script>

<template>
  <VTSocialLinks
    v-if="config.socialLinks"
    class="VPNavBarSocialLinks"
    size="small"
    :links="config.socialLinks"
  />
</template>

<style scoped>
.VPNavBarSocialLinks {
  --at-apply: hidden mr-[-10px];
}

@media (min-width: 1280px) {
  .VPNavBarSocialLinks {
    --at-apply: flex;
  }
}
</style>
