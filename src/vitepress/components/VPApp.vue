<script setup lang="ts">
import { useSidebar } from '../composables/sidebar'
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
    <VPNav>
      <template #navbar-title>
        <slot name="navbar-title" />
      </template>
    </VPNav>
    <VPSidebar :open="isSidebarOpen">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </VPSidebar>
    homepage
  </div>
</template>
