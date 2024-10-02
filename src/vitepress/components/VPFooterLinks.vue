<script setup lang="ts">
import { VTLink } from '../../core'
import { useConfig } from '../composables/config'

const { config } = useConfig()
</script>

<template>
  <ul class="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6">
    <li
      v-for="link in config.footer?.links"
      :key="link.link"
    >
      <VTLink
        class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        :href="link.link"
        no-icon
      >
        {{ link.text }}
      </VTLink>
    </li>
  </ul>
</template>
