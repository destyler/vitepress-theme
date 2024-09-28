<script setup lang="ts">
import { Icon } from 'destyler'
import { computed } from 'vue'
import { VTFlyout, VTSocialLinks } from '../../core'
import { useConfig } from '../composables/config'

const { config } = useConfig()

const hasContent = computed(() => {
  return config.value.appearance || config.value.socialLinks
})
</script>

<template>
  <VTFlyout v-if="hasContent" content-width="12rem" class="vp-nav-bar-extra">
    <template #vt-flyout-trigger>
      <Icon name="carbon:overflow-menu-horizontal" class="vp-nav-bar-extra-icon" />
    </template>
    <template #vt-flyout-content>
      <div v-if="config.socialLinks" class="vt-menu-group">
        <div class="vt-menu-item item">
          <VTSocialLinks
            class="social-links"
            size="small"
            :links="config.socialLinks"
          />
        </div>
      </div>
    </template>
  </VTFlyout>
</template>

<style>
.vp-nav-bar-extra-icon{
  --at-apply:
    w-20px h-20px cursor-pointer
    text-foreground hover:text-foreground/60;
}

.vp-nav-bar-extra {
  display: none !important;
}

@media (min-width: 768px) {
  .vp-nav-bar-extra {
    display: block !important;
  }
}

@media (min-width: 1280px) {
  .vp-nav-bar-extra {
    display: none !important;
  }
}
</style>
