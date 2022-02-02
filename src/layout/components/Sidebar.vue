<template>
  <aside
    class="layout-sidebar"
    :class="{ collapsed: layoutCtx.state.sidebarCollapsed }"
  >
    <n-scrollbar style="max-height: 100%;">
      <div class="app-slogan">
        <img class="logo" src="/logo.png" alt="logo">
      </div>
      <n-menu
        inverted_
        accordion
        :options="menuOptions"
        :indent="16"
        :collapsed="layoutCtx.state.sidebarCollapsed"
        :collapsed-width="64"
        :value="currentKey"
      />
    </n-scrollbar>
  </aside>
</template>

<script setup lang="ts">
import { h, computed } from 'vue'
import { NMenu, NIcon, NScrollbar } from 'naive-ui'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { layoutRoutes } from '@/router/layout-routes'
import { useLayout } from '../config'
import { Lightning as LightningIcon } from '@vicons/carbon'

import type { MenuOption } from 'naive-ui'
import type { RouteRecordRaw } from 'vue-router'

function renderIcon(route: RouteRecordRaw) {
  if (!route.meta?.icon) {
    return () => null
  }
  return () => h(NIcon, null, { default: () => h(route.meta?.icon) })
}

function renderLabel(route: RouteRecordRaw) {
  if (route.meta?.link) {
    return () => h('a',
      {
        target: '__blank',
        href: route.meta?.link,
        'aria-hidden': true,
      },
      [route.meta?.title])
  }
  if (route.children?.length) {
    return () => h('div', {}, route.meta?.title)
  }
  return () => h(
    RouterLink,
    { to: { name: route.name } },
    { default: () => route.meta?.title },
  )
}

const transMenu = (routes: RouteRecordRaw[]) => {
  const result: MenuOption[] = []
  for (const route of routes) {
    const option: MenuOption = {
      label: renderLabel(route),
      key: route.meta?._key,
      icon: renderIcon(route),
    }
    if (Array.isArray(route.children)) {
      option.children = transMenu(route.children)
    }
    result.push(option)
  }
  return result
}

const layoutCtx = useLayout()
const menuOptions = transMenu(layoutRoutes)
const route = useRoute()
const router = useRouter()
const currentKey = computed(() => {
  return route.meta?._key ?? 0
})
</script>

<style lang="scss" scoped>
.layout-sidebar {
  height: 100vh;
  width: var(--app-side-width);
  position: fixed;
  top: 0;
  left: 0;
  transition: width var(--app-animation-duration);
  z-index: var(--app-zindex-side-bar);
  background-color: #fff;
  border-right: 1px solid var(--app-border-color);
  box-sizing: border-box;

  .app-slogan {
    color: #fff;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: width var(--app-animation-duration), height var(--app-animation-duration);
    overflow: hidden;

    .logo {
      height: 50px;
    }
  }

  &.collapsed {
    width: var(--app-side-collapsed-width);

    .app-name {
      width: 0;
    }

    .app-slogan {
      width: 0;
      height: 0;
      padding: 0;
    }
  }
}
</style>
