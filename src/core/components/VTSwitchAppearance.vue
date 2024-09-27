<script setup lang="ts">
import { Button, Icon } from 'destyler'
import { useAppearance } from '../composables/appearance'

const { toggleDark, isDark } = useAppearance()
</script>

<template>
  <Button
    class="head-btn"
    @click="toggleDark"
  >
    <Icon :name="isDark ? 'carbon:moon' : 'carbon:sun'" class="icones" />
  </Button>
</template>
