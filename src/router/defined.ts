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
  icon?: string
  /* 菜单名称 */
  title?: string
  /* 外链 */
  link?: string
}

export interface OutLinkItem {
  path: string
  name: string
  meta: CustomRouteMeta
  children?: RouteType[]
}

export type RouteType = RouteRecordRaw | OutLinkItem

declare module 'vue-router' {
  interface RouteMeta extends CustomRouteMeta { }
}

/* 具有类型提示的路由定义方法 */
export const definedRoutes = (routes: RouteType[]) => routes

/* 过滤非原生路由配置(用于创建真实路由) */
export const filterRowRoutes = (routes: RouteType[]): RouteRecordRaw[] => {
  const result: RouteRecordRaw[] = []
  const isRow = (route: RouteType): route is RouteRecordRaw  => !route.meta?.link
  for (const route of routes) {
    if (isRow(route)) {
      if (route.children?.length) {
        route.children = filterRowRoutes(route.children)
      }
      result.push(route)
    }
  }
  return result
}
