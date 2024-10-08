<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { Button, Icon } from 'destyler'
import { ref } from 'vue'

const props = defineProps<{
  installScript: string
}>()

const { copy } = useClipboard({ source: props.installScript })

const isCopied = ref(false)
function handleCopy() {
  copy(props.installScript)
  isCopied.value = true
  setTimeout(() => {
    isCopied.value = false
  }, 2000)
}
</script>

<template>
  <div class="relative">
    <input
      type="text"
      class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-dark-500 text-sm px-3.5 py-2.5 shadow-sm bg-gray-50 dark:bg-dark-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-dark-300 ps-11 pe-11 focus:ring-1 focus:ring-gray-300 dark:focus:ring-dark-700"
      readonly
      autocomplete="off"
      aria-label="Install Scripts"
      :value="props.installScript"
    >
    <span class="absolute inset-y-0 start-0 flex items-center pointer-events-none px-3.5">
      <Icon name="carbon:terminal" class="flex-shrink-0 text-dark-400 dark:text-light-500 h-5 w-5" />
    </span>
    <span class="absolute inset-y-0 end-0 flex items-center px-3.5">
      <Button
        class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1 p-1 text-dark-500 dark:text-light-400 hover:text-dark-700 dark:hover:text-light-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-green-400 inline-flex items-center bg-transparent"
        @click="handleCopy"
      >
        <Icon v-if="isCopied" name="carbon:checkmark" class="flex-shrink-0 h-4 w-4 text-primary" />
        <Icon v-else name="carbon:copy" class="flex-shrink-0 h-4 w-4" />
      </Button>
    </span>
  </div>
</template>
