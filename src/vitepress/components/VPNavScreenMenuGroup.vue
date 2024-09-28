<script setup lang="ts">
import type { MenuBadgeItem, MenuItemChild } from '../../core'
import {
  CollapseContent,
  CollapseHeader,
  CollapseItem,
  CollapseTrigger,
  Icon,
} from 'destyler'

const props = defineProps<{
  text: string
  badge?: MenuBadgeItem
  items: MenuItemChild[]
}>()
</script>

<template>
  <CollapseItem :value="props.text" class="w-full border-b border-solid border-input">
    <CollapseHeader class="w-full">
      <CollapseTrigger class="w-full flex items-center cursor-pointer">
        {{ props.text }}
        <Icon name="carbon:add" />
      </CollapseTrigger>
    </CollapseHeader>
    <CollapseContent>
      content
    </CollapseContent>
  </CollapseItem>
</template>
