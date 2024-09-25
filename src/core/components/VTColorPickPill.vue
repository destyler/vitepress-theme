<script setup lang="ts">
import { TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'destyler'
import { useData } from 'vitepress'

const props = defineProps<{
  color: {
    value: string
    label: string
    hex: {
      light: string
      dark: string
    }
  }
  selected: string
}>()

const emits = defineEmits(['select'])

const { isDark } = useData()
</script>

<template>
  <ClientOnly>
    <TooltipProvider>
      <TooltipRoot class="relative inline-flex capitalize">
        <TooltipTrigger
          class="focus:outline-none focus-visible:outline-0 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1 shadow-sm ring-inset ring-gray-300 dark:ring-gray-700 text-primary focus-visible:ring-2 ring-0 hover:bg-[var(--header-hover)] inline-flex items-center justify-center cursor-pointer"
          :class="[props.color.value === props.selected ? 'bg-[var(--header-hover)]' : 'bg-transparent']"
          @click="emits('select', props.color)"
        >
          <span class="inline-block w-3 h-3 rounded-full cursor-pointer" :style="{ backgroundColor: `hsl(${isDark ? props.color.hex.dark : props.color.hex.light})` }" />
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent :side-offset="5" class="h-6 px-2 py-1 text-xs font-normal truncate relative bg-white dark:bg-dark text-dark dark:text-light rounded rounded-md shadow ring-1 ring-gray-200 dark:ring-gray-800">
            {{ props.color.label }},
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  </ClientOnly>
</template>
