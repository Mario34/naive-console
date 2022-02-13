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
        accordion
        :inverted="layoutCtx.state.dark"
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
import { RouterLink, useRoute } from 'vue-router'
import { layoutRoutes } from '@/router/layout-routes'
import { useLayout } from '../config'

import type { MenuOption } from 'naive-ui'
import type { RouteRecordRaw, RouteLocationNormalizedLoaded } from 'vue-router'

const layoutCtx = useLayout()
const route = useRoute()
const menuOptions = transMenu(layoutRoutes, route)
const currentKey = computed(() => {
  return route.meta?._key ?? 0
})

function renderIcon(route: RouteRecordRaw) {
  if (!route.meta?.icon) {
    return () => null
  }
  return () => h(NIcon, null, { default: () => h(route.meta?.icon) })
}

function renderLabel(menu: RouteRecordRaw, route: RouteLocationNormalizedLoaded) {
  if (menu.meta?.link) {
    return () => h('a',
      {
        target: '__blank',
        href: menu.meta?.link,
        'aria-hidden': true,
      },
      [menu.meta?.title])
  }
  if (menu.children?.length) {
    return () => h('div', {}, menu.meta?.title)
  }
  return () => h(
    RouterLink,
    { to: { name: menu.name } },
    { default: () => menu.meta?.title },
  )
}

function transMenu(routes: RouteRecordRaw[], route: RouteLocationNormalizedLoaded) {
  const result: MenuOption[] = []
  for (const route_ of routes) {
    const option: MenuOption = {
      label: renderLabel(route_, route),
      key: route_.meta?._key,
      icon: renderIcon(route_),
    }
    if (Array.isArray(route_.children)) {
      option.children = transMenu(route_.children, route)
    }
    result.push(option)
  }
  return result
}
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
  background-color: var(--app-bg-header);
  border-right: 1px solid var(--app-border-color);
  box-sizing: border-box;

  .app-slogan {
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
