<script setup lang="ts">
import type { Ref } from 'vue'
import {
  NavigationItem,
  NavigationList,
  NavigationRoot,
  NavigationViewport,
} from 'destyler'
import { provide, ref, watch } from 'vue'
import { useConfig } from '../composables/config'
import VPNavBarMenuGroup from './VPNavBarMenuGroup.vue'
import VPNavBarMenuLink from './VPNavBarMenuLink.vue'

const { config } = useConfig()

const menuModel = ref('')

const action = ref<{ label: string, x: number }>()

const triggerXList: Ref<{ label: string, x: number }[]> = ref([])

function handleSetTriggerX(label: string, x: number) {
  triggerXList.value.push({ label, x })
}

provide('vp-nav-bar-menu-trigger-x', {
  handleSetTriggerX,
  triggerXList,
})

const min = ref<number>(0)

watch(menuModel, (value) => {
  const numberLists = []
  let feckAction: any = {}
  for (const item of triggerXList.value) {
    numberLists.push(item.x)
    feckAction = triggerXList.value.filter(item => item.label === value)[0]
  }
  min.value = Math.min(...numberLists)
  if (feckAction) {
    action.value = feckAction
  }
}, {
  immediate: true,
  deep: true,
})
</script>

<template>
  <NavigationRoot v-model="menuModel" class="vp-nav-bar-menu-root">
    <NavigationList class="vp-nav-bar-menu">
      <NavigationItem
        v-for="item in config.nav"
        :key="item.text"
        :value="item.text"
        class="vp-nav-bar-menu-item"
      >
        <VPNavBarMenuLink v-if="'link' in item" :item="item" />
        <VPNavBarMenuGroup v-else :item="item" />
      </NavigationItem>
    </NavigationList>
    <div :style="{ '--left': `${action ? action.x - min : 0}px` }" class="vp-nav-bar-menu-viewport-box">
      <NavigationViewport class="vp-nav-bar-menu-viewport" />
    </div>
  </NavigationRoot>
</template>

<style>
.vp-nav-bar-menu {
  --at-apply: hidden md:flex;
}

.vp-nav-bar-menu-root {
  --at-apply: relative z-10 flex max-w-max flex-1 items-center justify-center;
}

.vp-nav-bar-menu-item {
  --at-apply: relative;
}

.vp-nav-bar-menu-viewport-box {
  --at-apply: absolute left-[--left] top-4/5 flex justify-center;
}

.vp-nav-bar-menu-viewport {
  --at-apply:
    origin-top-center relative mt-1.5
    h-[var(--destyler-navigation-viewport-height)]
    w-full overflow-hidden rounded-md border
    bg-popover text-popover-foreground shadow-lg
    data-[state=open]:animate-in
    data-[state=closed]:animate-out
    data-[state=closed]:zoom-out-95
    data-[state=open]:zoom-in-90
    md:w-[var(--destyler-navigation-viewport-width)];
}
</style>
