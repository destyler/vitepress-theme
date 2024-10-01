<script setup lang="ts">
import type { Ref } from 'vue'
import type { NavItemWithChildren } from '../config'
import { useElementBounding } from '@vueuse/core'
import {
  Icon,
  NavigationContent,
  NavigationTrigger,
} from 'destyler'
import { inject, useTemplateRef } from 'vue'
import { VTMenu, VTMenuBadge } from '../../core'

const props = defineProps<{
  item: NavItemWithChildren
}>()

const { handleSetTriggerX } = inject('vp-nav-bar-menu-trigger-x') as {
  handleSetTriggerX: (label: string, x: Ref<number>) => void
  triggerXList: { label: string, x: Ref<number> }[]
}

const triggerRef = useTemplateRef('trigger')
const { x } = useElementBounding(triggerRef)
handleSetTriggerX(props.item.text!, x)
</script>

<template>
  <NavigationTrigger ref="trigger" class="vp-nav-bar-menu-button group">
    {{ props.item.text }}
    <VTMenuBadge v-if="props.item.badge" :item="props.item.badge" />
    <Icon name="carbon:chevron-down" class="vp-nav-bar-menu-text-icon" />
  </NavigationTrigger>
  <NavigationContent
    class="vp-nav-bar-menu-group-content"
  >
    <VTMenu :items="props.item.items" />
  </NavigationContent>
</template>

<style scoped>
.vp-nav-bar-menu-button {
  --at-apply:
    flex items-center h-[var(--vt-nav-height)]
    px-3 transition-[color] duration-[0.5s]
    text-foreground hover:text-foreground/60;
}

.vp-nav-bar-menu-text-icon {
  --at-apply:
    ml-1 w-14px h-14px fill-current
    transition duration-200
    group-data-[state=open]:rotate-180;
}

.vp-nav-bar-menu-group-content {
  --at-apply:
    left-0 top-0 w-full
    data-[motion^=from-]:animate-in
    data-[motion^=to-]:animate-out
    data-[motion^=from-]:fade-in
    data-[motion^=to-]:fade-out
    data-[motion=from-end]:slide-in-from-right-52
    data-[motion=from-start]:slide-in-from-left-52
    data-[motion=to-end]:slide-out-to-right-52
    data-[motion=to-start]:slide-out-to-left-52
    md:absolute md:w-auto;
}
</style>
