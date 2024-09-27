<script lang="ts" setup>
import type { MenuItem, MenuItemChild } from '../types/menu'
import VTMenuGroup from './VTMenuGroup.vue'
import VTMenuLink from './VTMenuLink.vue'

const props = defineProps<{
  items?: (MenuItem | MenuItemChild)[]
}>()
</script>

<template>
  <ul class="vt-menu">
    <div v-if="items" class="vt-menu-items">
      <template v-for="i in props.items" :key="i.text">
        <VTMenuLink v-if="'link' in i" :item="i" />
        <VTMenuGroup v-else :text="i.text" :items="i.items" />
      </template>
    </div>
  </ul>
</template>
