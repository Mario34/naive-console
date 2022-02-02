<template>
  <n-config-provider :locale="zhCN" size="small" :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <n-message-provider>
        <n-dialog-provider>
          <AppProvider>
            <router-view />
          </AppProvider>
        </n-dialog-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import {
  NConfigProvider, NMessageProvider, NLoadingBarProvider, NDialogProvider,
  zhCN,
} from 'naive-ui'
import { AppProvider } from '@/layout'

import type { GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#0074E4FF',
    primaryColorHover: '#3299FCFF',
    primaryColorPressed: '#0570D7FF',
    infoColor: '#8494A6FF',
    primaryColorSuppl: '#0479EAFF',
    infoColorHover: '#91A3B8FF',
    infoColorPressed: '#6A7F98FF',
    infoColorSuppl: '#90A2B7FF',
  },
}
</script>

<style lang="scss" scoped>
.app {

}
</style>
