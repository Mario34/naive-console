<template>
  <div :style="appRootStyle" class="app-provider">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useLoadingBar } from 'naive-ui'
import { computed } from 'vue'
import { useLayout } from '../config'

import type { LoadingBarApiInjection } from 'naive-ui/es/loading-bar/src/LoadingBarProvider'

declare global {
  interface Window {
    $appLoadingBar: LoadingBarApiInjection
  }
}

window.$appLoadingBar = useLoadingBar()

const layoutCtx = useLayout()
const appRootStyle = computed(() => {
  if (layoutCtx.state.dark) {
    return `
      --app-bg-base: rgb(24 24 28);
      --app-bg-header: rgb(24 24 28);
      --app-bg-main: rgb(24 24 28);
      --app-border-color: #000;
      color: #dcdcdc;
    `
  }
  return `
    --app-bg-base: #f2f2f2;
    --app-bg-header: #fff;
    --app-bg-main: #fff;
    --app-border-color: #ededed;
  `
})
</script>
