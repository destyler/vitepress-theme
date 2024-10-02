<script lang="ts" setup>
import {
  Image,
  ImageFallback,
  ImageRoot,
  Link,
} from 'destyler'
import { useData } from 'vitepress'
import { useConfig } from '../composables/config'
import VPFooterLinks from './VPFooterLinks.vue'
import VPNavBarSocialLinks from './VPNavBarSocialLinks.vue'

const { isDark } = useData()

const { config } = useConfig()
</script>

<template>
  <div class="w-full h-px bg-border flex items-center justify-center mb-3 mt-12">
    <div class="bg-white dark:bg-black px-4">
      <ImageRoot>
        <Image
          :src="typeof config.logo === 'string' ? config.logo : isDark ? config.logo?.dark : config.logo?.light"
          class="w-6 h-6"
        />
        <ImageFallback>DS</ImageFallback>
      </ImageRoot>
    </div>
  </div>
  <footer class="relative">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3">
      <div class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3">
        <VPNavBarSocialLinks />
      </div>
      <div class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center">
        <VPFooterLinks />
      </div>
      <div class="flex items-start justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1">
        <Link :to="config.footer?.license?.link" class="text-sm text-gray-500 dark:text-gray-400">
          Published under
          <span class="text-gray-900 dark:text-white">{{ config.footer?.license?.text }}</span>
        </Link>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
