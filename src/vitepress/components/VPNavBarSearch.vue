<script setup lang="ts">
import {
  Button,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
  Icon,
  InfoRoot,
} from 'destyler'
import { onMounted, onUnmounted, ref } from 'vue'

const openStatus = ref<boolean>(false)
const metaKey = ref('Meta')

onMounted(() => {
  // meta key detect (same logic as in @docsearch/js)

  metaKey.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl'
  const handleSearchHotKey = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      openStatus.value = !openStatus.value
    }
  }
  const remove = () => {
    window.removeEventListener('keydown', handleSearchHotKey)
  }
  window.addEventListener('keydown', handleSearchHotKey)
  onUnmounted(remove)
})
</script>

<template>
  <DialogRoot v-model:open="openStatus">
    <DialogTrigger as-child class="vp-nav-bar-search">
      <div id="docsearch">
        <Button class="doc-search-button">
          <span class="doc-search-button-container">
            <Icon name="carbon:search" class="doc-search-search-icon" />
            <span class="doc-search-button-placeholder">Search</span>
          </span>
          <InfoRoot class="doc-search-button-keys" as="span">
            <kbd class="doc-search-button-key">{{ metaKey }}</kbd>
            <kbd class="doc-search-button-key">K</kbd>
          </InfoRoot>
        </Button>
      </div>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="doc-search-dialog-overlay" />
      <DialogContent class="doc-search-dialog-content">
        <div class="doc-search-dialog-content-box">
          Search
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped>
.vp-nav-bar-search {
  --at-apply: flex items-center pl-4 md:grow-1;
}

.doc-search-button {
  --at-apply:
    flex
    justify-center
    items-center
    m-0
    w-12
    h-[13.75]
    [background:transparent]
    hover:[background:transparent]
    md:justify-start
    md:w-full;
}

.doc-search-button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

.doc-search-button:focus:not(:focus-visible) {
  outline: none !important;
}

.doc-search-button-container{
  --at-apply: items-center flex;
}

.doc-search-button .doc-search-search-icon {
  --at-apply:
    text-muted-foreground
    w-4.5
    h-4.5
    relative
    transition-[color]
    duration-[0.5s]
    fill-current
    md:top-px
    md:mr-2.5
    md:w-3.75
    md:h-3.75;
}

.doc-search-button:hover .doc-search-search-icon {
  --at-apply: text-foreground;
}

.doc-search-button-placeholder {
  --at-apply:
    text-muted-foreground
    transition-[color]
    duration-[0.5s]
    text-13px
    font-medium
    hidden
    pr-2.5;
}

.doc-search-button:hover .doc-search-button-placeholder {
  --at-apply: text-foreground;
}

@media (min-width: 960px) {
  .doc-search-button-placeholder {
    --at-apply: inline-block;
  }
}

.doc-search-button .doc-search-button-keys {
  --at-apply:
    hidden
    gap-2px
    min-w-auto
    box-border
    border
    border-muted-foreground
    border-solid
    rounded-md
    px-1.5
    h-22px
    text-xs
    leading-[22px]
    font-medium
    md:flex;

  font-family: inherit;
  transition: color 0.5s, border-color 0.5s;
}

.doc-search-button:hover .doc-search-button-keys {
  --at-apply: border-primary;
}

.doc-search-button .doc-search-button-key {
  --at-apply:
    text-muted-foreground
    w-auto
    min-w-auto
    text-xs
    h-[22px]
    transition-[color]
    duration-[0.5s]
    m-0
    p-0
    flex
    justify-center
    items-center;
  font-family: inherit;
}

.doc-search-button:hover .doc-search-button-key {
  --at-apply: text-primary;
}

.doc-search-button .doc-search-button-key--pressed {
  box-shadow: none;
  transform: none;
}

.doc-search-dialog-overlay {
  --at-apply:
    fixed inset-0 z-99 h-screen w-screen overflow-hidden bg-white/50 dark:bg-black/50
    data-[state=open]:animate-in data-[state=open]:fade-in-0
    data-[state=closed]:animate-out data-[state=closed]:fade-out-0;
}

.doc-search-dialog-content {
  --at-apply:
    fixed left-50% top-50%
    z-200 grid w-full sm:max-w-3xl h-dvh sm:h-[28rem]
    translate-x--50% translate-y--50%
    gap-4 border sm:rounded-lg
    bg-white dark:bg-black
    border-border
    shadow-lg duration-200
    data-[state=open]:animate-in data-[state=closed]:animate-out
    data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
    data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
    data-[state=closed]:slide-out-to-left-50%
    data-[state=closed]:slide-out-to-top-48%
    data-[state=open]:slide-in-from-left-50%
    data-[state=open]:slide-in-from-top-48%;
}

.doc-search-dialog-content-box {
  --at-apply: flex flex-col min-h-full space-y-1.5 text-center sm:text-left h-full;
}
</style>
