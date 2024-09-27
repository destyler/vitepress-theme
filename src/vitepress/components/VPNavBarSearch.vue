<script setup lang="ts">
import {
  Button,
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxRoot,
  ComboboxViewport,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
  Icon,
  InfoRoot,
} from 'destyler'
import { useRouter } from 'vitepress'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useConfig } from '../composables/config'

const { config } = useConfig()

const router = useRouter()

const openStatus = ref<boolean>(false)
const metaKey = ref('Meta')

onMounted(() => {
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

const searchValue = ref<string>('')

const sidebar = computed(() => {
  const result: any[] = []
  Object.keys(config.value.sidebar!).forEach((item: string) => {
    result.push(...config.value.sidebar[item])
  })
  return result
})

function handleGo(path: string) {
  new Promise((resolve) => {
    openStatus.value = false
    resolve({})
  }).then(() => {
    router.go(path)
  })
}

watch(openStatus, (value) => {
  if (!value) {
    searchValue.value = ''
    document.body.style.overflow = 'auto'
  }
  else {
    document.body.style.overflow = 'hidden'
  }
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
          <ComboboxRoot v-model="searchValue" :default-open="true" class="doc-search-combobox-root">
            <!-- input -->
            <ComboboxAnchor class="doc-search-combobox-anchor">
              <Icon name="carbon:search" class="doc-search-combobox-icon" />
              <ComboboxInput
                auto-focus
                class="doc-search-combobox-input"
                placeholder="Placeholder..."
              />
              <DialogClose
                class="doc-search-dialog-close"
              >
                <Icon name="carbon:close" class="doc-search-dialog-close-icon" />
              </DialogClose>
            </ComboboxAnchor>
            <!-- content -->
            <ComboboxViewport class="doc-search-combobox-viewport">
              <ComboboxContent>
                <ComboboxEmpty
                  class="doc-search-combobox-empty"
                >
                  <Icon name="carbon:search" class="doc-search-combobox-empty-icon" />
                  <p class="doc-search-combobox-empty-desc">
                    We couldn't find any items with that term. Please try again.
                  </p>
                </ComboboxEmpty>
                <ComboboxGroup v-for="item in sidebar" :key="item.text" class="doc-search-combobox-group">
                  <ComboboxLabel class="doc-search-combobox-label">
                    {{ item.text }}
                  </ComboboxLabel>
                  <div class="doc-search-combobox-item-box">
                    <ComboboxItem
                      v-for="sub in item.items"
                      :key="sub.link"
                      :value="sub.text"
                      class="doc-search-combobox-item"
                      @click="handleGo(sub.link)"
                    >
                      <div class="doc-search-combobox-item-item">
                        <Icon :name="sub.icon ?? 'clarity:file-line'" class="doc-search-combobox-item-icon" />
                        <div class="doc-search-combobox-item-desc">
                          <span class="doc-search-combobox-item-text">{{ sub.text }}</span>
                        </div>
                      </div>
                    </ComboboxItem>
                  </div>
                </ComboboxGroup>
              </ComboboxContent>
            </ComboboxViewport>
          </ComboboxRoot>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style>
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

.doc-search-combobox-root {
  --at-apply: relative h-full;
}

.doc-search-combobox-anchor {
  --at-apply: relative flex items-center;
}

.doc-search-combobox-icon {
  --at-apply: pointer-events-none absolute start-4 text-gray-400 dark:text-gray-500 h-5 w-5;
}

.doc-search-combobox-input {
  --at-apply: w-full placeholder-gray-400 dark:placeholder-gray-500 bg-transparent border-0 text-gray-900 dark:text-white focus:ring-0 focus:outline-none sm:text-sm h-[--vt-nav-height] sm:h-12 px-4 ps-11 pe-10;
}

.doc-search-dialog-close {
  --at-apply:
    focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed
    disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75
    flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5
    hover:bg-accent hover:text-accent-foreground
    focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500
    dark:focus-visible:ring-primary-400 inline-flex items-center absolute end-4;
}

.doc-search-dialog-close-icon {
  --at-apply: flex-shrink-0 h-5 w-5;
}

.doc-search-combobox-viewport {
  --at-apply:
  relative flex-1 h-dvh sm:h-[calc(28rem-var(--vt-nav-height))]
  overflow-y-scroll border-t border-border;
}

.doc-search-combobox-empty {
  --at-apply: flex flex-col h-full w-full items-center justify-center flex-1 px-6 py-14 sm:px-14;
}

.doc-search-combobox-empty-icon {
  --at-apply: w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4;
}

.doc-search-combobox-empty-desc {
  --at-apply: text-sm text-center text-gray-900 dark:text-white;
}

.doc-search-combobox-group {
  --at-apply: p-2;
}

.doc-search-combobox-label {
  --at-apply: px-2.5 my-2 text-xs text-start font-semibold text-gray-900 dark:text-white;
}

.doc-search-combobox-item-box {
  --at-apply: text-sm text-gray-700 dark:text-gray-200;
}

.doc-search-combobox-item {
  --at-apply:
    flex justify-between select-none items-center rounded-md
    px-2.5 py-1.5 gap-2 relative cursor-pointer
    data-[highlighted]:bg-accent;
}

.doc-search-combobox-item-item {
  --at-apply: flex items-center gap-1.5 min-w-0;
}

.doc-search-combobox-item-icon {
  --at-apply: flex-shrink-0 w-5 h-5;
}

.doc-search-combobox-item-desc {
  --at-apply: flex items-center gap-1.5 min-w-0;
}

.doc-search-combobox-item-text {
  --at-apply: truncate;
}
</style>
