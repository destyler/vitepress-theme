<script setup lang="ts">
import type { MenuBadgeItem } from '../types/menu'
import { Link } from 'destyler'
import { computed } from 'vue'
import VTIconExternalLink from './icons/VTIconExternalLink.vue'
import VTMenuBadge from './VTMenuBadge.vue'

const props = defineProps<{
  href?: string
  noIcon?: boolean
  badge?: MenuBadgeItem
}>()

const isExternal = computed(() => props.href && /^[a-z]+:/i.test(props.href))
</script>

<template>
  <component
    :is="props.href ? Link : 'span'"
    class="vt-link"
    :class="{ link: props.href }"
    :to="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <slot />
    <VTMenuBadge v-if="badge" :item="badge" />
    <VTIconExternalLink v-if="isExternal && !noIcon" class="vt-link-icon" />
  </component>
</template>
