<template>
  <n-config-provider :theme_="darkTheme" :locale="zhCN" size="small">
    <n-loading-bar-provider>
      <n-message-provider>
        <AppProvider>
          <router-view />
        </AppProvider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import {
  NConfigProvider, NMessageProvider, NLoadingBarProvider,
  darkTheme, zhCN,
} from 'naive-ui'
import { AppProvider } from '@/layout'
</script>

<style lang="scss" scoped>
.app {

}
</style>
