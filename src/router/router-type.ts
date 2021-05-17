import type { RouteRecordRaw, RouteMeta } from 'vue-router'

/**
 * 项目自定义的路由配置类型，生成路由会转成标准的路由配置
*/
export type ConfigRoute = RouteRecordRaw | OutLinkItem

/**
 * 项目自定义路由meta类型
*/
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
  interface RouteMeta extends CustomRouteMeta { }
}