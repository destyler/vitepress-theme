<script setup lang="ts">
import type { Ref } from 'vue'
import {
  CollapseRoot,
} from 'destyler'
import { ref } from 'vue'
import { useConfig } from '../composables/config'
import VPNavScreenMenuGroup from './VPNavScreenMenuGroup.vue'
import VPNavScreenMenuLink from './VPNavScreenMenuLink.vue'

const { config } = useConfig()

const selected: Ref<string[]> = ref([])
</script>

<template>
  <CollapseRoot
    v-model="selected"
    class="w-full"
    type="multiple"
    :collapsible="true"
  >
    <template v-for="item in config.nav" :key="item.text">
      <VPNavScreenMenuLink
        v-if="'link' in item"
        :text="item.text"
        :badge="item.badge"
        :link="item.link"
      />
      <VPNavScreenMenuGroup
        v-else
        :text="item.text || ''"
        :badge="item.badge"
        :items="item.items"
      />
    </template>
  </CollapseRoot>
</template>
