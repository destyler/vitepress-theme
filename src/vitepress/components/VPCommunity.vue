<script setup lang="ts">
import { VTDivider } from '../../core'
import { useConfig } from '../composables/config'
import VPCommunityItem from './VPCommunityItem.vue'

const { config } = useConfig()
</script>

<template>
  <div class="vp-content-community">
    <div class="community-title">
      {{ config.i18n?.community ?? 'Community' }}
    </div>
    <nav aria-labelledby="doc-community-aria-label">
      <VPCommunityItem />
    </nav>
    <VTDivider />
  </div>
</template>

<style scoped>
.vp-content-community {
  --at-apply: text-[13px] font-medium relative;
}

.community-title {
  --at-apply: mb-1 font-bold uppercase text-[11px] tracking-[0.4px];
}
</style>
