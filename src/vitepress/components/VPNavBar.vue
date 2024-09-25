<script setup lang="ts">
const props = defineProps<{
  isScreenOpen: boolean
}>()
</script>

<template>
  <div class="vp-nav-bar">
    <slot />
  </div>
</template>

<style scoped>
.vp-nav-bar {
  --at-apply: relative border-b border-solid border-border bg-background whitespace-nowrap pl-6 pr-3 transition-[border-color] duration-[0.5s,background-color] delay-[0.5s] md:pl-8 md:pr-3 xl:px-8;
  height: var(--vt-nav-height);
}
</style>
