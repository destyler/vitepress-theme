<script setup lang="ts">
import { InstallScript, LandingBackground } from '@destyler/vitepress-theme'
import { Button, Icon } from 'destyler'
</script>

<template>
  <main class="min-h-[calc(89vh-var(--vt-nav-height))] px-7 py-10 of-x-hidden">
    <div class="py-24 sm:py-32 md:py-40 relative mb-[8rem]">
      <LandingBackground />
      <div class="mx-auto px-4 sm:px-6 lg:px-8 gap-16 sm:gap-y-24 flex flex-col max-w-4xl">
        <div class="text-center relative z-[2]">
          <!-- title -->
          <div class="text-5xl font-bold tracking-tight text-dark-900 dark:text-white sm:text-7xl">
            An <span class="text-primary">Elegant</span>
            <br class="hidden lg:block">
            Vitepress Theme
          </div>
          <!-- desc -->
          <div class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">
            <span>
              A Vitepress theme inspired by <code>@vue/theme</code>, completely constructed using Destyler.
            </span>
          </div>
          <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
            <Button class="btn">
              Get Started
              <Icon name="carbon:direction-straight-right" class="flex-shrink-0 h-5 w-5" />
            </Button>
            <div class="w-86">
              <InstallScript install-script="pnpm add @destyler/vitepress-theme" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
