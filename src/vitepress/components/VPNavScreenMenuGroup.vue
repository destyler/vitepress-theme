<script setup lang="ts">
import type { MenuBadgeItem, MenuItemChild } from '../../core'
import {
  CollapseContent,
  CollapseHeader,
  CollapseItem,
  CollapseTrigger,
  Icon,
} from 'destyler'
import { VTMenuBadge } from '../../core'
import VPNavScreenMenuGroupLink from './VPNavScreenMenuGroupLink.vue'
import VPNavScreenMenuGroupSection from './VPNavScreenMenuGroupSection.vue'

const props = defineProps<{
  text: string
  badge?: MenuBadgeItem
  items: MenuItemChild[]
}>()
</script>

<template>
  <CollapseItem :value="props.text" class="vp-nav-screen-menu-group-root">
    <CollapseHeader class="w-full">
      <CollapseTrigger class="vp-nav-screen-menu-group-trigger ">
        <span>
          {{ props.text }}
          <VTMenuBadge v-if="badge" :item="badge" />
        </span>
        <Icon name="carbon:add" class="vp-nav-screen-menu-group-trigger-icon" />
      </CollapseTrigger>
    </CollapseHeader>
    <CollapseContent class="vp-nav-screen-menu-group-content">
      <template v-for="item in props.items" :key="item.text">
        <VPNavScreenMenuGroupLink
          v-if="'link' in item" :key="item.text"
          :text="item.text"
          :link="item.link"
          :badge="item.badge"
        />

        <VPNavScreenMenuGroupSection
          v-else
          :text="item.text"
          :items="item.items"
        />
      </template>
    </CollapseContent>
  </CollapseItem>
</template>

<style scoped>
.vp-nav-screen-menu-group-trigger {
  --at-apply:
    flex justify-between items-center w-full
    leading-6 text-sm font-medium
    transition-[color] duration-[0.25s]
    pr-1 pt-3 pb-[11px]
    text-foreground hover:text-foreground/60
    transition-all [&[data-state=open]>svg]:rotate-45;
}

.vp-nav-screen-menu-group-trigger-icon {
  --at-apply:
    h-4 w-4 shrink-0 transition-transform duration-200;
}

.vp-nav-screen-menu-group-root {
  --at-apply: w-full border-b border-solid border-input;
}

.vp-nav-screen-menu-group-content {
  --at-apply:
    data-[state=closed]:animate-collapse-up
    data-[state=open]:animate-collapse-down;
}
</style>
