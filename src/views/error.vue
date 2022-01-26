<template>
  <n-space>
    <n-button @click="onClick('403')">
      403
    </n-button>
    <n-button @click="onClick('404')">
      404
    </n-button>
    <n-button @click="onClick('500')">
      500
    </n-button>
  </n-space>
</template>

<script setup lang="ts">
import { NButton, NSpace } from 'naive-ui'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const onClick = (code: string) => {
  router.push({ name: 'app-status', params: { statusCode: code }, query: { from: route.fullPath } })
}
</script>
