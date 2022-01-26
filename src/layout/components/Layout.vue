<template>
  <div class="layout">
    <Sidebar />
    <main class="layout__main" :class="{ collapsed: layoutCtx.state.sidebarCollapsed }">
      <Header />
      <Content />
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import Content from './Content.vue'
import { useLayout } from '../config'

const layoutCtx = useLayout()
</script>

<style lang="scss" scoped>
.layout{
  &__main {
    min-height: 100vh;
    margin-left: var(--app-side-width);
    background-color: var(--app-bg-base);
    transition: margin var(--app-animation-duration);

    &.collapsed {
      margin-left: var(--app-side-collapsed-width);
    }
  }
}
</style>
