<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import {
  Icon,
} from 'destyler'
import { computed, nextTick, onMounted, watch } from 'vue'
import { VTFlyout, VTThemeAppearance, VTThemeColorPickPill, VTThemeRadiusPill } from '../../core'
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
  <VTFlyout>
    <template #vt-flyout-trigger>
      <div class="vt-locales-btn-icon-container">
        <Icon name="carbon:color-palette" class="icones" />
      </div>
    </template>
    <template #vt-flyout-content>
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
    </template>
  </VTFlyout>
</template>

<style>
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
