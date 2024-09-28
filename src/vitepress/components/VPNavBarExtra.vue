<script setup lang="ts">
import {
  Icon,
} from 'destyler'
import { VTFlyout, VTSocialLinks } from '../../core'
import { useConfig } from '../composables/config'

const { config } = useConfig()
</script>

<template>
  <VTFlyout content-width="12rem">
    <template #vt-flyout-trigger>
      <Icon name="carbon:overflow-menu-horizontal" class="vp-nav-bar-extra-icon vp-nav-bar-extra" />
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

<style scoped>
.vp-nav-bar-extra-icon{
  --at-apply:
    hidden md:block xl:hidden
    w-20px h-20px cursor-pointer
    text-foreground hover:text-foreground/60;
}
</style>
