<script setup lang="ts">
import { Button } from 'destyler'
import { onContentUpdated } from 'vitepress'
import { nextTick, ref } from 'vue'
import { VTIconChevronRight } from '../../core'
import { useConfig } from '../composables/config'
import { useOutlineHeaders } from '../composables/outline.js'
import VPDocOutlineItem from './VPDocOutlineItem.vue'

const { config } = useConfig()
const open = ref(false)
const vh = ref(0)
const items = ref<HTMLDivElement>()

const headers = useOutlineHeaders()

onContentUpdated(() => {
  open.value = false
})

function toggle() {
  open.value = !open.value
  vh.value = window.innerHeight + Math.min(window.scrollY - 64, 0)
}

function onItemClick(e: Event) {
  if ((e.target as HTMLElement).classList.contains('outline-link')) {
    // disable animation on hash navigation when page jumps
    if (items.value) {
      items.value.style.transition = 'none'
    }
    nextTick(() => {
      open.value = false
    })
  }
}

function scrollToTop() {
  open.value = false
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="vp-local-nav-outline-dropdown " :style="{ '--vt-vh': `${vh}px` }">
    <Button :class="{ open }" @click="toggle">
      {{ config.i18n?.toc ?? 'On this page' }}
      <VTIconChevronRight class="icon" />
    </Button>
    <Transition name="flyout">
      <div v-if="open" ref="items" class="items scrollbar-hide" @click="onItemClick">
        <a class="top-link" href="#" @click="scrollToTop">
          {{ config.i18n?.returnToTop || 'Return to top' }}
        </a>
        <VPDocOutlineItem :headers="headers" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.vp-local-nav-outline-dropdown {
  --at-apply: pt-3 pb-[11px] px-5;
}
.vp-local-nav-outline-dropdown button {
  --at-apply:
  block text-foreground text-xs font-medium
  leading-6 transition-[color] duration-[0.5s] relative;
}

.vp-local-nav-outline-dropdown button:hover {
  --at-apply: text-foreground/60;
  transition: color 0.25s;
}

.vp-local-nav-outline-dropdown button.open {
  --at-apply: text-foreground/60;
}

.icon {
  --at-apply: inline-block align-middle w-3.5 h-3.5 fill-current ml-0.5;
}

:deep(.outline-link) {
  --at-apply: text-sm font-medium px-0 py-0.5;
}

.open > .icon {
  transform: rotate(90deg);
}

.items {
  --at-apply:
    bg-background border border-solid border-border rounded-md
    absolute left-20px right-20px top-60px border-lg overflow-scroll
    pt-1 pb-4 px-5 shadow-md;
  max-height: calc(var(--vt-vh, 100vh) - 86px);
}

.top-link {
  --at-apply:
    block text-primary py-2
    text-[13px] font-medium
    mb-2.5 border-b border-b-border;
}

.flyout-enter-active {
  transition: all 0.2s ease-out;
}

.flyout-leave-active {
  transition: all 0.15s ease-in;
}

.flyout-enter-from,
.flyout-leave-to {
  --at-apply: op-0;
  transform: translateY(-16px);
}
</style>
