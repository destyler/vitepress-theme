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

const triggerXList = ref<{ label: string, x: Ref<number> }[]>([])

function handleSetTriggerX(label: string, x: Ref<number>) {
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
  <NavigationRoot v-model="menuModel" class="relative z-10 flex max-w-max flex-1 items-center justify-center">
    <NavigationList class="vp-nav-bar-menu">
      <NavigationItem
        v-for="item in config.nav"
        :key="item.text"
        :value="item.text"
        class="relative"
      >
        <template v-if="'link' in item">
          <VPNavBarMenuLink :item="item" />
        </template>
        <template v-else>
          <VPNavBarMenuGroup :item="item" />
        </template>
      </NavigationItem>
    </NavigationList>
    <div :style="{ '--left': `${action ? action.x - min : 0}px` }" class="absolute left-[--left] top-full flex justify-center">
      <NavigationViewport
        class="
        origin-top-center relative mt-1.5
        h-[var(--destyler-navigation-viewport-height)]
        w-full overflow-hidden rounded-md border
        bg-popover text-popover-foreground shadow-lg
        data-[state=open]:animate-in
        data-[state=closed]:animate-out
        data-[state=closed]:zoom-out-95
        data-[state=open]:zoom-in-90
        md:w-[var(--destyler-navigation-viewport-width)]"
      />
    </div>
  </NavigationRoot>
</template>

<style>
.vp-nav-bar-menu {
  --at-apply: hidden md:flex;
}
</style>
