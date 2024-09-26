<script setup lang="ts">
import { VTSwitchAppearance } from '../../core'
import VPColorPick from './VPColorPick.vue'
import VPNav from './VPNav.vue'
</script>

<template>
  <div class="mx-auto w-full h-full">
    <VPNav>
      <VPColorPick />
      <VTSwitchAppearance />
    </VPNav>
    homepage
  </div>
</template>
