<script lang="ts" setup>
import { Button, Icon } from 'destyler'
import { useConfig } from '../composables/config'
import { useSidebar } from '../composables/sidebar'

const props = defineProps<{ open: boolean }>()
const emits = defineEmits(['open-menu'])

const { hasSidebar } = useSidebar()
const { config } = useConfig()
</script>

<template>
  <div v-if="hasSidebar" class="VPLocalNav">
    <Button
      class="menu"
      :aria-expanded="props.open"
      aria-controls="VPSidebarNav"
      @click="emits('open-menu')"
    >
      <Icon name="carbon:text-align-left" class="menu-icon" />
      <span class="menu-text">{{ config.i18n?.menu || 'Menu' }}</span>
    </Button>
  </div>
</template>

<style scoped>
.VPLocalNav {
  --at-apply:
    sticky left-0 z-[--vp-z-index-local-nav] flex w-full
    justify-between border-b border-b-border bg-background;
  top: var(--vt-banner-height, 0px);
  transition: border-color 0.5s, background-color 0.5s;
}

@media (min-width: 960px) {
  .VPLocalNav {
    --at-apply: hidden;
  }
}

.menu {
  --at-apply: flex items-center leading-[47px]
  text-xs font-medium px-6 text-foreground cursor-pointer;
  transition: color 0.5s;
}

.menu:hover {
  --at-apply: text-foreground/60;
  transition: color 0.25s;
}

@media (min-width: 768px) {
  .menu {
    --at-apply: px-8;
  }
}

.menu-icon {
  --at-apply: mr-2 w-4 h-4 fill-current;
}
</style>
