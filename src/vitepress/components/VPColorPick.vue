<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import {
  Icon,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from 'destyler'
import { computed, nextTick, onMounted, watch } from 'vue'
import { VTColorPickPill } from '../../core'
import { themes } from '../colors/themes'

const colors = computed(() => {
  const result = []
  for (const theme of themes) {
    result.push({
      value: theme.name,
      label: theme.label,
      hex: theme.activeColor,
    })
  }
  return result
})

const primary = useStorage('destyler-vitepress-theme-color', 'zinc')

onMounted(() => {
  nextTick(() => {
    watch(primary, (newColor, oldColor) => {
      document.body.classList.remove(`theme-${oldColor}`)
      document.body.classList.add(`theme-${newColor}`)
      primary.value = newColor
    }, {
      immediate: true,
    })
  })
})

function handleSelectColor(color: any) {
  primary.value = color.value
}
</script>

<template>
  <ClientOnly>
    <PopoverRoot>
      <PopoverTrigger class="vp-color-pick-trigger">
        <Icon name="carbon:color-palette" class="icones" />
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent
          side="bottom"
          :side-offset="5"
          as-child
          class="vp-color-pick-content"
        >
          <div class="vp-color-pick-box">
            <VTColorPickPill
              v-for="color in colors"
              :key="color.value"
              :color="color"
              :selected="primary"
              @select="handleSelectColor"
            />
          </div>
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
  </ClientOnly>
</template>

<style scoped>
.vp-color-pick-trigger{
  --at-apply: focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-[var(--header-primary)] hover:text-[var(--header-primary)] hover:bg-[var(--header-accent-foreground)] focus-visible:ring-inset focus-visible:ring-2 inline-flex items-center bg-transparent;
}

.vp-color-pick-content {
  --at-apply: w-[156px] rounded-md bg-background border border-solid border-border py-2 px-4;
}

.vp-color-pick-box{
  --at-apply: grid grid-cols-5 gap-2px;
}
</style>
