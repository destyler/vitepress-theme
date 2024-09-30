<script setup lang="ts">
import { Icon, Link } from 'destyler'
import { useData } from 'vitepress'
import { computed } from 'vue'
import { useConfig } from '../composables/config'

const { page } = useData()
const { config } = useConfig()

const repoUrl = computed(() => {
  return `${config.value.editLink?.repo}${
    page.value.relativePath
  }`
})

const icons = {
  discord: {
    icon: 'ri:chat-1-line',
    label: 'Chat on Discord',
  },
  facebook: {
    icon: 'ri:group-3-line',
    label: 'Share on Facebook',
  },
  github: {
    icon: 'ri:star-s-line',
    label: 'Star on GitHub',
  },
  linkedin: {
    icon: 'ri:file-user-line',
    label: 'Share on LinkedIn',
  },
  slack: {
    icon: 'ri:road-map-line',
    label: 'Join on Slack',
  },
  twitter: {
    icon: 'ri:heart-3-line',
    label: 'Follow on Twitter',
  },
  x: {
    icon: 'ri:heart-3-line',
    label: 'Follow on Twitter',
  },
}
</script>

<template>
  <ul class="root">
    <li>
      <Link class="community" :to="repoUrl" target="_blank">
        <Icon class="w-5 h-5 flex-shrink-0" name="ri:quill-pen-line" />
        <span class="ml-2">Edit this page</span>
      </Link>
    </li>
    <li v-for="{ link, icon } in config.socialLinks" :key="link">
      <Link class="community" :to="link" target="_blank">
        <Icon class="w-5 h-5 flex-shrink-0" :name="icons[icon].icon" />
        <span class="ml-2">{{ icons[icon].label }}</span>
      </Link>
    </li>
  </ul>
</template>

<style scoped>
.root {
  --at-apply: relative z-1;
}

.nested {
  --at-apply: pl-4;
}

.community {
  --at-apply: text-foreground/60 leading-7 block overflow-hidden text-ellipsis whitespace-nowrap flex items-center;
  transition: color 0.5s;
}

.community:hover,
.community.active {
  --at-apply: text-foreground;
  transition: color 0.25s;
}
</style>
