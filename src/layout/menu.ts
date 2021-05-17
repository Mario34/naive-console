import { configRoutes } from '/@/router'
import type { ConfigRoute } from '/@/router/router-type'

const generateMenuList = (list: ConfigRoute[]): ConfigRoute[] => {
  const filter: ConfigRoute[] = []
  for (const route of list) {
    if (route.meta?.menu === false) {
      continue
    }
    if (route.children?.length) {
      route.children = generateMenuList(route.children)
    }
    filter.push(route)
  }
  return filter
}

const menuList = generateMenuList(configRoutes)

export default menuList
