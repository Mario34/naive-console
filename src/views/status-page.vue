<template>
  <div class="status-page">
    <div class="icon">
      <n-icon size="28">
        <AiStatusFailedIcon />
      </n-icon>
    </div>
    <div><code>{{ $route.query.from }}</code>  -  {{ codeTexts[statusCode || '404'] }}</div>
    <n-divider dashed />
    <div class="operation">
      <n-button @click="$router.back()">
        返回
      </n-button>
      <n-button type="primary" style="margin-left: 20px;" @click="$router.replace('/')">
        返回首页
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton, NIcon, NDivider } from 'naive-ui'
import { Cursor1 as AiStatusFailedIcon } from '@vicons/carbon'

const props = defineProps<{
  statusCode: keyof (typeof codeTexts)
}>()

const codeTexts = {
  404: '页面找不到了',
  403: '无权访问该页面',
  500: '服务器出错了',
}
</script>

<style lang="scss" scoped>
.status-page {
  text-align: center;

  .icon {
    padding: 40px;
  }

  .operation {

  }
}
</style>
