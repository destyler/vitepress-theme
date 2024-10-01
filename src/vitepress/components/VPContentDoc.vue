<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
import VPCommunity from './VPCommunity.vue'
import VPContentDocOutline from './VPContentDocOutline.vue'

const { page, frontmatter } = useData()

const pageClass = computed(() => {
  const { relativePath } = page.value
  return relativePath.slice(0, relativePath.indexOf('/'))
})
</script>

<template>
  <div
    class="vp-content-doc"
    :class="{ 'has-aside': frontmatter.aside !== false }"
  >
    <div class="containering">
      <div v-if="frontmatter.aside !== false" class="aside">
        <div class="aside-containering">
          <slot name="aside-top" />
          <VPContentDocOutline
            v-if="page.headers && frontmatter.outline !== false"
          />
          <slot name="aside-mid" />
          <VPCommunity />
          <slot name="aside-bottom" />
        </div>
      </div>
      <div class="content">
        <slot name="content-top" />
        <main>
          <Content class="vt-doc" :class="pageClass" />
        </main>
        <slot name="content-bottom" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.vp-content-doc {
  padding: 32px 24px 96px;
}

.vt-doc {
  margin-bottom: 54px;
}

.content {
  margin: 0 auto;
  max-width: 688px;
  position: relative;
}

.aside {
  position: relative;
  display: none;
  flex-shrink: 0;
  padding-left: 64px;
  width: 320px;
}

.aside-containering {
  position: sticky;
  width: 224px;
  top: calc(var(--vt-nav-height) + var(--vt-banner-height, 0px) + 24px);
  bottom: 0;
}

.aside-containering::-webkit-scrollbar {
  display: none;
}

.edit-link {
  margin: 0 0 32px;
  /* text-align: center; */
}

.edit-link .vt-link {
  font-size: 14px;
  color: var(--vt-c-brand);
  font-weight: 500;
}

.vt-icon {
  width: 18px;
  height: 18px;
  color: var(--vt-c-brand);
  display: inline-block;
  margin-right: 8px;
  position: relative;
  top: -1px;
}

@media (min-width: 768px) {
  .vp-content-doc {
    padding: 48px 32px 96px;
  }
}

@media (min-width: 960px) {
  .vp-content-doc {
    padding: 64px 64px 96px;
  }
}

@media (min-width: 1280px) {
  .vp-content-doc {
    padding: 64px 0 96px 64px;
  }
  .vp-content-doc:not(.has-sidebar.has-aside) {
    padding-left: calc((100vw - 688px) / 2);
  }
  .vp-content-doc.has-aside:not(.has-sidebar) {
    padding-left: calc((100vw - 688px - 320px) / 2);
  }
  .containering {
    display: flex;
  }
  .content {
    min-width: 620px;
    margin: 0;
    order: 1;
  }
  .vp-content-doc:not(.has-aside) .content {
    min-width: 688px;
  }
  .aside {
    display: block;
    order: 2;
  }
}

@media (min-width: 1440px) {
  .vp-content-doc {
    padding: 64px 0 96px 96px;
  }
  .aside {
    padding-left: 96px;
  }
}
</style>
