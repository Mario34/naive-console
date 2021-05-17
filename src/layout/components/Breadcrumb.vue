<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
      v-for="route in routeList"
      :key="route.name"
      :to="route.path"
    >{{ route.meta?.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const route = useRoute()
    const routeList = computed(() => {
      return route.matched
    })
    return {
      routeList,
    }
  },
})
</script>