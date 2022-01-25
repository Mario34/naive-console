<template>
  <div class="status-page">
    {{ statusCode }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StatusPage',
  props: {
    statusCode: {
      type: Number,
      default: 404,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.status-page{}
</style>
