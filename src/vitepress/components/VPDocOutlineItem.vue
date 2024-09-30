<script setup lang="ts">
import type { MenuItemWithLinkAndChildren } from '../composables/outline'
import { Link } from 'destyler'
import { decode } from 'tiny-decode'

defineProps<{
  headers: MenuItemWithLinkAndChildren[]
  nested?: boolean
}>()

function onClick({ target: el }: Event) {
  const id = `#${(el as HTMLAnchorElement).href!.split('#')[1]}`
  const heading = document.querySelector<HTMLAnchorElement>(
    decodeURIComponent(id),
  )
  heading?.focus()
}
</script>

<template>
  <ul :class="nested ? 'nested' : 'root'">
    <li v-for="{ children, link, text, hidden } in headers" :key="link">
      <Link v-show="!hidden" class="outline-link" :to="link" @click="onClick">
        {{ decode(text) }}
      </Link>
      <template v-if="children?.length">
        <VPDocOutlineItem :headers="children" :nested="true" />
      </template>
    </li>
  </ul>
</template>

<style scoped>
.root {
  --at-apply: relative z-1;
}

.nested {
  --at-apply: pl-4;
}

.outline-link {
  --at-apply: text-foreground/60 leading-7 block overflow-hidden text-ellipsis whitespace-nowrap;
  transition: color 0.5s;
}

.outline-link:hover,
.outline-link.active {
  --at-apply: text-foreground;
  transition: color 0.25s;
}
</style>
