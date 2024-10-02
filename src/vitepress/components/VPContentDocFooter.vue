<script setup lang="ts">
import type {
  MenuItemWithLink,
} from '../../core'
import type { SidebarGroup } from '../config'
import { Button, Icon } from 'destyler'
import { useData } from 'vitepress'
import { computed } from 'vue'
import { useConfig } from '../composables/config'
import { getSidebar } from '../support/sidebar'
import { isActive } from '../support/utils'

const { page } = useData()
const { config } = useConfig()

const links = computed(() => {
  const sidebar = getSidebar(config.value.sidebar, page.value.relativePath)
  const candidates = getFlatSideBarLinks(sidebar)
  const index = candidates.findIndex(link =>
    isActive(page.value.relativePath, link.link),
  )
  return {
    prev: candidates[index - 1],
    next: candidates[index + 1],
  }
})

function getFlatSideBarLinks(sidebar: SidebarGroup[]): MenuItemWithLink[] {
  const links: MenuItemWithLink[] = []
  for (const group of sidebar) {
    for (const link of group.items) {
      links.push(link)
    }
  }
  return links
}
</script>

<template>
  <footer v-if="links.prev || links.next" class="vp-content-doc-footer">
    <Button
      v-if="links.prev"
      class="
      block px-6 py-4 not-prose
      border! rounded-md! [border:1]! border-solid
      border-black! border-op-10!
      dark:border-white! dark:border-op-10!
      hover:bg-#F4F4F5/50 dark:hover:bg-#27272A/50
      group text-left"
    >
      <div
        class="
        inline-flex items-center rounded-full p-1.5
        bg-white dark:bg-black
        group-hover:bg-primary/10
        ring-1 ring-gray-300
        dark:ring-gray-700 mb-4
        group-hover:ring-primary/50"
      >
        <Icon name="carbon:arrow-left" class="w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary" />
      </div>
      <p class="font-medium text-gray-900 dark:text-white text-[15px] mb-1">
        {{ links.prev.text }}
      </p>
    </Button>
    <span v-else class="hidden sm:block" />
    <Button
      v-if="links.next"
      class="
      block px-6 py-4 not-prose
      border! rounded-md! [border:1]! border-solid
      border-black! border-op-10!
      dark:border-white! dark:border-op-10!
      hover:bg-#F4F4F5/50 dark:hover:bg-#27272A/50
      group text-right"
    >
      <div
        class="
      inline-flex items-center rounded-full p-1.5
      bg-white dark:bg-black
      group-hover:bg-primary/10
      ring-1 ring-gray-300
      dark:ring-gray-700 mb-4
      group-hover:ring-primary/50"
      >
        <Icon name="carbon:arrow-right" class="w-5 h-5 text-black dark:text-white group-hover:text-primary" />
      </div>
      <p class="font-medium text-gray-900 dark:text-white text-[15px] mb-1">
        {{ links.next.text }}
      </p>
    </Button>
    <span v-else class="hidden sm:block" />
  </footer>
</template>

<style scoped>
.vp-content-doc-footer {
  --at-apply: grid gap-8 sm:grid-cols-2;
}
</style>
