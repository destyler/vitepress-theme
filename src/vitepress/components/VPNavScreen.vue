<script setup lang="ts">
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'
import { ref } from 'vue'
import VPNavScreenMenu from './VPNavScreenMenu.vue'
import VPNavScreenSocialLinks from './VPNavScreenSocialLinks.vue'

defineProps<{
  open: boolean
}>()

const screen = ref<HTMLElement | null>(null)

function lockBodyScroll() {
  disableBodyScroll(screen.value!, { reserveScrollBarGap: true })
}

function unlockBodyScroll() {
  clearAllBodyScrollLocks()
}
</script>

<template>
  <transition
    name="fade"
    @enter="lockBodyScroll"
    @after-leave="unlockBodyScroll"
  >
    <div v-if="open" ref="screen" class="vp-nav-screen">
      <div class="container">
        <VPNavScreenMenu />
        <VPNavScreenSocialLinks class="mt-4" />
      </div>
    </div>
  </transition>
</template>

<style scoped>
.vp-nav-screen {
  --at-apply:
    bg-background fixed py-8
    right-0 bottom-0 left-0
    w-full overflow-y-auto
    transition-[background-color] duration-[0.5s];
  top: calc(var(--vt-nav-height) + var(--vt-banner-height, 0px));
}

.vp-nav-screen.fade-enter-active,
.vp-nav-screen.fade-leave-active {
  transition: opacity 0.25s;
}

.vp-nav-screen.fade-enter-active .container,
.vp-nav-screen.fade-leave-active .container {
  transition: transform 0.25s ease;
}

.vp-nav-screen.fade-enter-from,
.vp-nav-screen.fade-leave-to {
  --at-apply: op-0;
}

.vp-nav-screen.fade-enter-from .container,
.vp-nav-screen.fade-leave-to .container {
  transform: translateY(-8px);
}

@media (min-width: 768px) {
  .vp-nav-screen {
    --at-apply: hidden;
  }
}

.container {
  --at-apply: flex flex-col max-w-288px mx-auto pt-6 pb-24;
}

.menu+.appearance {
  --at-apply: mt-6;
}

.menu+.social-links {
  --at-apply: mt-4;
}

.appearance+.social-links {
  --at-apply: mt-3;
}
</style>
