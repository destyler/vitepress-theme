<script setup lang="ts">
import { ref } from 'vue'
import { VTDivider } from '../../core'
import { useConfig } from '../composables/config'
import { useActiveAnchor, useOutlineHeaders } from '../composables/outline'
import VPDocOutlineItem from './VPDocOutlineItem.vue'

const { config } = useConfig()
const container = ref()
const marker = ref()
const headers = useOutlineHeaders()

useActiveAnchor(container, marker)
</script>

<template>
  <div ref="container" class="vp-content-doc-outline">
    <div ref="marker" class="outline-marker" />
    <div class="outline-title">
      {{ config.i18n?.toc ?? 'On this page' }}
    </div>
    <nav aria-labelledby="doc-outline-aria-label">
      <span id="doc-outline-aria-label" class="visually-hidden">{{
        config.i18n?.ariaToC ?? 'Table of Contents for current page'
      }}</span>
      <VPDocOutlineItem :headers="headers" />
    </nav>
    <VTDivider />
  </div>
</template>

<style scoped>
.vp-content-doc-outline {
  --at-apply: text-[13px] font-medium relative;
}

.outline-title {
  --at-apply: mb-1 font-bold uppercase text-[11px] tracking-[0.4px];
}

.outline-marker {
  --at-apply: bg-primary op-0 absolute rounded-4px w-1 h-5 top-8 left-[-12px] z-0;
  transition: top 0.25s cubic-bezier(0, 1, 0.5, 1), opacity 0.25s,
    background-color 0.5s;
}
</style>
