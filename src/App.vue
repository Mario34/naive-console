<template>
  <n-config-provider :theme_="darkTheme" :locale="zhCN" size="small">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, NMessageProvider, darkTheme, zhCN } from 'naive-ui'
</script>

<style lang="scss" scoped>
.app {

}
</style>
