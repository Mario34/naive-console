<template>
  <div class="layout-content">
    <div class="layout-content-container">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <keep-alive :max="20">
            <component
              :is="Component"
              :key="route.path"
            />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLayout } from './config'

export default defineComponent({
  name: 'LayoutContent',
  setup() {
    const layoutCtx = useLayout()
    return {
      layoutCtx,
    }
  },
})
</script>

<style lang="scss" scoped>
.layout-content {
  min-height: calc(100vh - var(--app-header-height));
  box-sizing: border-box;
  padding: 16px;
}

.layout-content-container {
  background-color: var(--app-bg-main);
  height: 100%;
  padding: 20px;
  overflow: hidden;
  border-radius: 4px;
}
</style>
