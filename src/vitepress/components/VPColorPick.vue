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
import { VTThemeAppearance, VTThemeColorPickPill, VTThemeRadiusPill } from '../../core'
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
const radius = useStorage('destyler-vitepress-theme-radius', 0.5)

onMounted(() => {
  nextTick(() => {
    watch(primary, (newColor, oldColor) => {
      document.body.classList.remove(`theme-${oldColor}`)
      document.body.classList.add(`theme-${newColor}`)
      primary.value = newColor
    }, {
      immediate: true,
    })

    watch(radius, (value) => {
      document.body.style.setProperty('--radius', `${value}rem`)
    }, {
      immediate: true,
    })
  })
})

function handleSelectColor(color: any) {
  primary.value = color.value
}

function handleSetRadius(r: number) {
  radius.value = r
}

const RADII = [0, 0.25, 0.5, 0.75, 1]
</script>

<template>
  <ClientOnly>
    <PopoverRoot>
      <PopoverTrigger class="vp-color-pick-trigger">
        <div class="vt-locales-btn-icon-container">
          <Icon name="carbon:color-palette" class="icones" />
        </div>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent
          side="bottom"
          :side-offset="5"
          as-child
          class="vp-color-pick-content"
        >
          <div class="p-4">
            <div class="grid space-y-1">
              <h1 class="text-md text-foreground font-semibold">
                Customize
              </h1>
              <p class="text-xs text-muted-foreground">
                Pick a style and color for your components.
              </p>
            </div>
            <div class="space-y-1.5 pt-6">
              <Label for="color" class="text-xs"> Color </Label>
              <div class="grid grid-cols-3 gap-2 py-1.5">
                <VTThemeColorPickPill
                  v-for="color in colors"
                  :key="color.value"
                  :color="color"
                  :selected="primary"
                  @select="handleSelectColor"
                />
              </div>
            </div>
            <div class="space-y-1.5 pt-6">
              <Label for="radius" class="text-xs"> Radius </Label>
              <div class="grid grid-cols-5 gap-2 py-1.5">
                <VTThemeRadiusPill
                  v-for="r in RADII"
                  :key="r"
                  :radius="r"
                  :selected="radius"
                  @select="handleSetRadius"
                />
              </div>
            </div>
            <div class="space-y-1.5 pt-6">
              <Label for="theme" class="text-xs"> Theme </Label>
              <div class="flex space-x-2 py-1.5">
                <VTThemeAppearance />
              </div>
            </div>
          </div>
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
  </ClientOnly>
</template>

<style>
.vp-color-pick-trigger{
  --at-apply:
    flex items-center px-3
    h-[var(--vt-nav-height)]
    text-foreground
    hover:text-primary
    transition-[color] duration-[0.5s];
}

.vp-color-pick-content {
  --at-apply:
    w-96 rounded-md border border-solid border-border p-4 shadow-md
    z-50 bg-popover text-popover-foreground outline-none
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0
    data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
    data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2
    data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2;
}

.vp-color-pick-box{
  --at-apply: grid grid-cols-3 gap-2px;
}

.vt-locales-btn-icon-container {
  --at-apply: flex items-center cursor-pointer;
}

.vt-locales-btn-icon-container::before,
.vt-locales-btn-icon-container::after {
  --at-apply: w-px h-6 content-[""] bg-foreground/40;
}

.vt-locales-btn-icon-container::before {
  --at-apply: mr-3;
}

.vt-locales-btn-icon-container::after {
  --at-apply: ml-3;
}
</style>
