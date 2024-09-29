<script lang="ts" setup>
import type { MenuItemWithLink } from '../../core'
import { Link } from 'destyler'
import { useData } from 'vitepress'
import { inject, onMounted, ref, watchPostEffect } from 'vue'
import { VTMenuBadge } from '../../core'
import { isActive } from '../support/utils'

const props = defineProps<{
  item: MenuItemWithLink
}>()

const { page } = useData()
const closeSideBar = inject('close-sidebar') as () => void

const active = ref(false)
function updateActive() {
  active.value = isActive(page.value.relativePath, props.item.link)
}
onMounted(updateActive)
watchPostEffect(updateActive)
</script>

<template>
  <Link
    :to="props.item.link"
    class="link"
    :class="{
      'link-hover': active,
    }"
  >
    <span class="text-sm/6 truncate">
      {{ props.item.text }}
      <VTMenuBadge v-if="item.badge" :item="item.badge" />
    </span>
  </Link>
</template>

<style scoped>
.link {
  --at-apply:
    flex items-center group border-l -ml-px pl-4
    cursor-pointer text-foreground/60 hover:text-foreground
    border-l border-l-border hover:border-l-primary;
}

.link-hover {
  --at-apply: border-l-primary text-primary;
}
</style>
