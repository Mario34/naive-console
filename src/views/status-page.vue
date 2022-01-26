<template>
  <div class="status-page">
    <code>{{ statusCode || 'Error' }} form {{ $route.query.from }}</code>
    <n-button @click="$router.back()">
      返回
    </n-button>
    <n-button @click="$router.replace('/')">
      返回首页
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'

const props = defineProps<{
  statusCode: string
}>()

</script>

<style lang="scss" scoped>
.status-page{}
</style>
