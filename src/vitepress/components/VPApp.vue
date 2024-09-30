<script setup lang="ts">
import { provide } from 'vue'
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

provide('close-sidebar', closeSidebar)
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
    <VPContent>
      <template #content-top>
        <slot name="content-top" />
      </template>
      <template #content-bottom>
        <slot name="content-bottom" />
      </template>
      <template #aside-top>
        <slot name="aside-top" />
      </template>
      <template #aside-mid>
        <slot name="aside-mid" />
      </template>
      <template #aside-bottom>
        <slot name="aside-bottom" />
      </template>
      <template #footer-before>
        <slot name="footer-before" />
      </template>
      <template #footer-after>
        <slot name="footer-after" />
      </template>
    </VPContent>
  </div>
</template>
