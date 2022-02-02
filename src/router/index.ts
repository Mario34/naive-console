import { createRouter, createWebHashHistory } from 'vue-router'
import { filterRowRoutes } from './defined'
import { guard } from './guard'
import { routes } from './routes'

console.log(filterRowRoutes(routes))

export const router = createRouter({
  history: createWebHashHistory('./'),
  routes: filterRowRoutes(routes),
})

// 挂载路由守卫
guard(router)
