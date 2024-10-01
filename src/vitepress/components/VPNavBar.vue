<script setup lang="ts">
import VPColorPick from './VPColorPick.vue'
import VPNavBarExtra from './VPNavBarExtra.vue'
import VPNavBarHamburger from './VPNavBarHamburger.vue'
import VPNavBarMenu from './VPNavBarMenu.vue'
import VPNavBarSearch from './VPNavBarSearch.vue'
import VPNavBarSocialLinks from './VPNavBarSocialLinks.vue'
import VPNavBarTitle from './VPNavBarTitle.vue'

const props = defineProps<{
  isScreenOpen: boolean
}>()

const emits = defineEmits(['toggle-screen'])
</script>

<template>
  <div class="vp-nav-bar">
    <div class="containersing">
      <VPNavBarTitle>
        <template #navbar-title>
          <slot name="navbar-title" />
        </template>
      </VPNavBarTitle>
      <div class="content">
        <VPNavBarSearch class="search" />
        <VPNavBarMenu class="menu" />
        <VPColorPick />
        <VPNavBarSocialLinks />
        <VPNavBarExtra />
        <VPNavBarHamburger
          class="hamburger"
          :active="props.isScreenOpen"
          @click="emits('toggle-screen')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.vp-nav-bar {
  --at-apply:
    relative
    border-b
    border-solid
    border-border
    bg-background
    whitespace-nowrap
    h-[var(--vt-nav-height)]
    pl-6
    pr-3
    md:pl-8
    md:pr-3
    xl:px-8;
    transition: border-color 0.5s, background-color 0.5s;
}

.containersing {
  --at-apply:
    flex
    justify-between
    max-w-[var(--vp-screen-max-width)]
    mx-auto
    my-0;
}

.content {
  --at-apply:
    flex
    justify-end
    items-center
    grow-1;
}
</style>
