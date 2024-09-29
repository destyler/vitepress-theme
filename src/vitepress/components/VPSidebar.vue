<script lang="ts" setup>
import { nextTick, ref, watchPostEffect } from 'vue'
import { useConfig } from '../composables/config'
import { useSidebar } from '../composables/sidebar'
import VPSidebarGroup from './VPSidebarGroup.vue'

const props = defineProps<{
  open: boolean
}>()
const { sidebar, hasSidebar } = useSidebar()
const { config } = useConfig()

// A11y: Focus Nav element when menu has opened
const navEl = ref<(Element & { focus: () => void }) | null>(null)
watchPostEffect(async () => {
  if (props.open) {
    await nextTick()
    navEl.value?.focus()
  }
})
</script>

<template>
  <aside
    v-if="hasSidebar"
    ref="navEl"
    class="vp-sidebar scrollbar-hide"
    :class="{ open }"
    @click.stop
  >
    <nav class="vp-sidebar-nav" aria-labelledby="sidebar-aria-label" tabindex="-1">
      <slot name="top" />
      <span id="sidebar-aria-label" class="visually-hidden">{{
        config.i18n?.ariaSidebarNav ?? 'Sidebar Navigation'
      }}</span>
      <div v-for="group in sidebar" :key="group.text" class="group">
        <VPSidebarGroup :text="group.text" :badge="group.badge" :items="group.items" />
      </div>
      <slot name="bottom" />
    </nav>
  </aside>
</template>

<style scoped>
.vp-sidebar {
  --at-apply:
    fixed top-0 bottom-0 left-0 z-[--vp-z-index-sidebar] bg-background
    w-[calc(100vw_-_64px)] pb-24 px-8 max-w-[--vp-sidebar-width-mobile]
    op-0 overflow-x-hidden overflow-y-auto -translate-x-full;
  transition: background-color 0.5s, opacity 0.5s, transform 0.3s ease;
}

.vp-sidebar-nav {
  --at-apply: pt-24px outline-0 ;
}

@media (min-width: 960px) {
  .vp-sidebar {
    --at-apply:
      top-[--vt-nav-height] z-1 w-[--vp-sidebar-width-small]
      max-w-full op-100 visible shadow-none translate-x-0 transition-[border-color]
      duration-[0.5s,background-color] delay-[0.5s];
  }
}

@media (min-width: 1440px) {
  .vp-sidebar {
    padding: 0 32px 96px calc((100% - var(--vp-screen-max-width)) / 2);
    width: calc((100% - var(--vp-screen-max-width)) / 2 + var(--vp-sidebar-width-small));
  }
}

.vp-sidebar.open {
  --at-apply:
    op-100 visible ;
  transform: translateX(0);
  transition: background-color 0.5s, opacity 0.25s,
    transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.group + .group {
  --at-apply: pt-24px;
}

@media (min-width: 960px) {
  .group + .group {
    --at-apply: pt-16px;
  }
}
</style>
