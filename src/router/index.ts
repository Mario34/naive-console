import { createRouter, createWebHashHistory } from 'vue-router'
import base from './modules/base'
import home from './modules/home'
import table from './modules/table'
import outLink from './modules/out-link'

import type { RouteRecordRaw, RouteMeta } from 'vue-router'

export type ConfigRoute = RouteRecordRaw | OutLinkItem

export interface CustomRouteMeta {
  /**
    * 在菜单栏中显示(默认true)
  */
  menu?: boolean
  /**
    * 在标签(Tabs)中显示(默认true)
  */
  tabs?: boolean
  /**
   * 菜单图标
  */
  icon?: string
  /**
   * 菜单名称
  */
  title?: string
  /**
   * 外链
  */
  link?: string
}

export interface OutLinkItem {
  path: string
  name: string
  meta: RouteMeta
  children?: ConfigRoute[]
}

declare module 'vue-router' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface RouteMeta extends CustomRouteMeta {}
}

const isRouteRaw = (route: ConfigRoute): route is RouteRecordRaw => {
  return !route.meta?.link
}

/**
 * 过滤部分非路由配置，返回原生路由配置
*/
export const filterRoutes = (routes: (ConfigRoute)[]): RouteRecordRaw[] => {
  return routes.reduce((pre, curr) => {
    if (isRouteRaw(curr)) {
      if (curr.children) {
        curr.children = filterRoutes(curr.children)
      }
      pre.push(curr as RouteRecordRaw)
    }
    return pre
  }, [] as RouteRecordRaw[])
}

/**
 * 配置式路由
*/
export const configRoutes: (ConfigRoute)[] = [
  ...base,
  ...home,
  ...table,
  ...outLink,
  {
    path: '/:pathMatch(.*)',
    name: 'notFount',
    meta: {
      menu: false,
      tabs: false,
    },
    component: () => import('/@/views/error-page/not-found.vue'),
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes: filterRoutes(configRoutes),
})
