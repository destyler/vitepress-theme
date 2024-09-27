<script setup lang="ts">
import VPNav from './VPNav.vue'
</script>

<template>
  <div class="mx-auto w-full h-full">
    <VPNav>
      <template #navbar-title>
        <slot name="navbar-title" />
      </template>
    </VPNav>
    homepage
  </div>
</template>
