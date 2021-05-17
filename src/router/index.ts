import { createRouter, createWebHashHistory } from 'vue-router'
import beforeEach from './before-each'
import base from './modules/base'
import home from './modules/home'
import table from './modules/table'
import outLink from './modules/out-link'

import type { RouteRecordRaw } from 'vue-router'
import type { ConfigRoute, CustomRouteMeta } from './router-type'

const defaultMeta: Partial<CustomRouteMeta> = {
  menu: true,
  tabs: true,
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
      curr.meta = Object.assign({}, defaultMeta, curr?.meta)
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
    component: () => import('../views/error-page/404.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: filterRoutes(configRoutes),
})

beforeEach(router)

export default router
