<script lang="ts" setup>
import { useConfig } from '../../vitepress/composables/config'

defineProps<{
  active: boolean
}>()

const { config } = useConfig()

</script>

<template>
  <button
    type="button"
    class="vt-hamburger"
    :class="{ 'is-active': active }"
    :aria-label="config.i18n?.ariaMobileNav ?? 'Mobile navigation'"
    :aria-expanded="active"
    aria-controls="VPNavScreen"
  >
    <span class="vt-hamburger-container">
      <span class="vt-hamburger-top" />
      <span class="vt-hamburger-middle" />
      <span class="vt-hamburger-bottom" />
    </span>
  </button>
</template>
