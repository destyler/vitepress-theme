<script setup lang="ts">
import { VTBackdrop } from '../../core'
import { useSidebar } from '../composables/sidebar'
import VPContent from './VPContent.vue'
import VPLocalNav from './VPLocalNav.vue'
import VPNav from './VPNav.vue'
import VPSidebar from './VPSidebar.vue'

const {
  isOpen: isSidebarOpen,
  open: openSidebar,
  close: closeSidebar,
} = useSidebar()
</script>

<template>
  <div class="mx-auto w-full h-full">
    <VTBackdrop class="z-[--vp-z-index-backdrop]" :show="isSidebarOpen" @click="closeSidebar" />
    <VPNav>
      <template #navbar-title>
        <slot name="navbar-title" />
      </template>
    </VPNav>
    <VPLocalNav :open="isSidebarOpen" @open-menu="openSidebar" />
    <VPSidebar :open="isSidebarOpen">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </VPSidebar>
    <VPContent/>
  </div>
</template>
