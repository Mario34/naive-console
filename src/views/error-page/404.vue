<template>
  <Layout code="200 * 2 + 4" desc="您访问的页面不存在" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from './components/Layout.vue'

export default defineComponent({
  name: '404',
  components: {
    Layout,
  },
})
</script>
