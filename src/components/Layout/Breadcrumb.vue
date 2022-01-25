<template>
  <n-breadcrumb class="breadcrumb">
    <n-breadcrumb-item href="#">
      北京总行
    </n-breadcrumb-item>
    <n-breadcrumb-item href="#">
      北京总行
    </n-breadcrumb-item>
    <n-breadcrumb-item href="#">
      北京总行
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup lang="ts">
import { NBreadcrumb, NBreadcrumbItem } from 'naive-ui'
</script>

<style lang="scss" scoped>
.n-breadcrumb {
  color: red;

  .n-breadcrumb-item {
    &:last-child {
      font-size: 16px;
    }
  }
}
</style>
