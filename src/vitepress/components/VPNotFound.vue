<script setup lang="ts">
import { useRouter } from 'vitepress'
import { useConfig } from '../composables/config'

const router = useRouter()
const { config } = useConfig()

function handleGoHome() {
  router.go('/')
}
</script>

<template>
  <div class="vt-doc">
    <div class="min-h-[calc(100%-var(--vt-nav-height))] flex flex-col items-center justify-center">
      <p class="text-base font-semibold text-primary">
        404
      </p>
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
        Error
      </h1>
      <p class="mt-6 text-base/7 text-gray-500 dark:text-gray-400 text-center">
        {{ config.i18n?.pageNotFound ?? 'Page Not Found' }}
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <Button
          class="
            inline-flex items-center justify-center whitespace-nowrap
            rounded-md text-sm font-medium transition-colors
            shadow h-9 px-3.5 py-2.5
            focus-visible:outline-none focus-visible:ring-1
            disabled:pointer-events-none disabled:opacity-50
            bg-primary hover:bg-primary/90 text-primary-foreground
            "
          @click="handleGoHome"
        >
          <span>Go back home</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vt-doc {
  padding: 32px 48px;
  margin: 32px;
  border-radius: 8px;
}
</style>
