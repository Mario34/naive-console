<template>
  <aside
    class="layout-sidebar"
    :class="{ collapsed: layoutCtx.state.sidebarCollapsed }"
  >
    <n-scrollbar style="max-height: 100%;">
      <div class="app-slogan">
        <n-icon size="30">
          <LightningIcon />
        </n-icon>
        <span class="app-name">Naive Console</span>
      </div>
      <n-menu
        inverted
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
import { NMenu, NIcon, NScrollbar, NGradientText } from 'naive-ui'
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
  background-color: rgb(0, 20, 40);

  &.collapsed {
    width: var(--app-side-collapsed-width);

    .app-name {
      width: 0;
    }
  }
}

.app-slogan {
  color: #fff;
  padding: 14px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-name {
  font-size: 18px;
  margin-left: 4px;
  display: inline-block;
  transition: width var(--app-animation-duration);
  overflow: hidden;
  white-space: nowrap;
}
</style>
