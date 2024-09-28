<script setup lang="ts">
import {
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from 'destyler'

const props = withDefaults(defineProps<{
  contentWidth?: string
}>(), {
  contentWidth: '24rem',
})
</script>

<template>
  <ClientOnly>
    <PopoverRoot>
      <PopoverTrigger class="vt-flyout-trigger" v-bind="$attrs">
        <slot name="vt-flyout-trigger" />
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent
          side="bottom"
          :side-offset="5"
          class="vt-flyout-content"
          :style="{ width: props.contentWidth }"
          align="end"
          as-child
        >
          <slot name="vt-flyout-content" />
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
    <slot />
  </ClientOnly>
</template>
