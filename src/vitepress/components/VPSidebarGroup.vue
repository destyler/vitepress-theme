<script lang="ts" setup>
import type { MenuBadgeItem, MenuItemWithLink } from '../../core'
import { Label, Link } from 'destyler'
import { useData } from 'vitepress'
import VTMenuBadge from '../../core/components/VTMenuBadge.vue'
import { isActive } from '../support/utils'
import VPSidebarLink from './VPSidebarLink.vue'

const props = defineProps<{
  text: string
  badge?: MenuBadgeItem
  items: MenuItemWithLink[]
}>()

const { page } = useData()
function hasActiveLink() {
  const { relativePath } = page.value
  return props.items.some(item => isActive(relativePath, item.link))
}
</script>

<template>
  <section class="VPSidebarGroup">
    <Label
      class="group title"
    >
      {{ props.text }}
    </Label>
    <div class="mt-3 h-auto">
      <div class="text-sm text-inherit dark:text-inherit">
        <nav class="border-l border-gray-200 dark:border-dark-800 scrollbar-hide">
          <VPSidebarLink
            v-for="item in props.items"
            :key="item.link"
            :item="item"
          />
        </nav>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title {
  --at-apply:
    flex items-center w-full focus-visible:outline-primary
    border-transparent text-sm/6 font-semibold truncate;
}
</style>
