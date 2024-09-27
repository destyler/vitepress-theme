<script setup lang="ts">
import type { SocialLinkIcon, SocialLinkSize } from '../types/socialLink'
import { Icon, Link } from 'destyler'

const props = defineProps<{
  size?: SocialLinkSize
  icon: SocialLinkIcon
  link: string
}>()

const target = /^[a-z]+:/i.test(props.link) ? `_blank` : undefined

const icons = {
  discord: 'ri:discord-fill',
  facebook: 'ri:facebook-fill',
  github: 'ri:github-fill',
  linkedin: 'ri:linkedin-fill',
  slack: 'ri:slack-fill',
  twitter: 'ri:twitter-x-fill',
  x: 'ri:twitter-x-fill',
}
</script>

<template>
  <Link
    class="vt-social-link"
    :class="{
      'is-small': size === 'small',
      'is-medium': size === 'medium',
    }"
    :to="link"
    :title="icon"
    :target="target"
    rel="noopener noreferrer"
  >
    <Icon :name="icons[icon]" class="vt-social-link-icon" />
  </Link>
</template>
