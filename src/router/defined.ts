import type { RouteRecordRaw } from 'vue-router'

/**
 * 项目自定义路由meta类型
 */
export interface CustomRouteMeta {
  /* 在菜单栏中显示(默认true) */
  menu?: boolean
  /* 在标签(Tabs)中显示(默认true) */
  tabs?: boolean
  /* 菜单图标 */
  icon?: any
  /* 菜单名称 */
  title?: string
  /* 外链 */
  link?: string
  /* 存在嵌套路由时，面包屑的非叶子路由的点击重定向路由名称 */
  redirect?: string
  /* 唯一key值(侧边栏展开收起) */
  _key?: number
}

declare module 'vue-router' {
  interface RouteMeta extends CustomRouteMeta { }
}

let key = 0
/* 自增key */
function generateKey(): number {
  return ++key
}

export function definedRoutes(routes: RouteRecordRaw[]): RouteRecordRaw[] {
  return routes
}

/* 过滤非原生路由配置，添加必要属性(用于创建真实路由) */
export function filterRowRoutes(routes: RouteRecordRaw[]): RouteRecordRaw[] {
  const result: RouteRecordRaw[] = []
  const isRow = (route: RouteRecordRaw): route is RouteRecordRaw  => !route.meta?.link
  for (const route of routes) {
    if (isRow(route)) {
      const copyRoute = { ...route }
      if (copyRoute.children) {
        copyRoute.children = filterRowRoutes(copyRoute.children)
      }
      if (copyRoute.meta === undefined) {
        copyRoute.meta = {}
      }
      if (copyRoute.meta._key === undefined) {
        copyRoute.meta._key = generateKey()
      }
      result.push(copyRoute)
    }
  }
  return result
}
