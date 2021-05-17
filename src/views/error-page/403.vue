<template>
  <Layout code="200 * 2 + 3" desc="暂无访问权限" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from './components/Layout.vue'

export default defineComponent({
  name: '403',
  components: {
    Layout,
  },
})
</script>