<template>
  <div class="table">
    <div class="table">table</div>
    <el-input v-model="value" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Table',
  setup() {
    const route = useRoute()
    console.log(route.matched)
    return {
      value: ref(''),
    }
  },
})
</script>

<style lang="scss" scoped>
.table {
}
</style>
