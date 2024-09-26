<script setup lang="ts">
import {
  NavigationItem,
  NavigationList,
  NavigationRoot,
  NavigationViewport,
} from 'destyler'
import { useConfig } from '../composables/config'
import VPNavBarMenuGroup from './VPNavBarMenuGroup.vue'
import VPNavBarMenuLink from './VPNavBarMenuLink.vue'

const { config } = useConfig()
</script>

<template>
  <NavigationRoot>
    <NavigationList class="vp-nav-bar-menu">
      <NavigationItem v-for="item in config.nav" :key="item.text" class="relative">
        <template v-if="'link' in item">
          <VPNavBarMenuLink :item="item" />
        </template>
        <template v-else>
          <VPNavBarMenuGroup :item="item" />
        </template>
      </NavigationItem>
    </NavigationList>
    <div class="absolute left-0 top-full flex justify-center">
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
