import { reactive } from 'vue'
// import { RouteRecordRaw } from 'vue-router'

import type { RouteLocationNormalizedLoaded } from 'vue-router'

interface Tabs {
  [path: string]: RouteLocationNormalizedLoaded
}

interface MenuConfig {
  /**
   * 菜单折叠
  */
  isFold: boolean
}

interface Config {
  tabs: Tabs
  menuConfig: MenuConfig
}

const state = reactive<Config>({
  tabs: {},
  menuConfig: {
    isFold: false,
  },
})

export const useConfig = (): typeof state => state

export const useTabs = () => {
  const closeAll = () => {
    state.tabs = {}
  }
  const createOrUpdate = (item: RouteLocationNormalizedLoaded) => {
    state.tabs[item.path] = { ...item }
  }
  const closeItem = (item: RouteLocationNormalizedLoaded) => {
    const values = Object.values(state.tabs)
    let index = -1
    for (let i = 0; i < values.length; i++) {
      if (values[i].path === item.path) {
        index = i
        break
      }
    }
    const pre = values[index - 1]
    const next = values[index + 1]

    delete state.tabs[item.path]
    return next || pre
  }
  return {
    tabs: state.tabs,
    closeAll,
    createOrUpdate,
    closeItem,
  }
}

export const useMenu = () => {
  return {
    menuConfig: state.menuConfig,
    switchFold: () => state.menuConfig.isFold = !state.menuConfig.isFold,
  }
}
