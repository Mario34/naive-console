<template>
  <n-breadcrumb class="breadcrumb">
    <li v-for="item in matchList" :key="item.name" class="n-breadcrumb-item">
      <router-link
        v-slot="{ isExactActive, href, route: route_ }"
        :to="{ name: item.meta?.redirect || item.name }"
        custom
      >
        <span v-if="isExactActive" class="n-breadcrumb-item__link">
          {{ route_.meta?.title }}
        </span>
        <a
          v-else
          class="n-breadcrumb-item__link"
          aria-hidden="true"
          :href="href"
        >
          {{ route_.meta?.title }}
        </a>
      </router-link>
      <span class="n-breadcrumb-item__separator">/</span>
    </li>
  </n-breadcrumb>
</template>

<script setup lang="tsx">
import { computed } from 'vue'
import { NBreadcrumb } from 'naive-ui'
import { useRoute } from 'vue-router'

const route = useRoute()
const matchList = computed(() => {
  return route.matched.filter(o => o.meta?.title)
})
</script>

<style lang="scss" scoped>
.n-breadcrumb {
  .n-breadcrumb-item {
    &:last-child {
      font-size: 16px;
    }
  }
}
</style>
