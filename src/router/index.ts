import { createRouter, createWebHashHistory } from 'vue-router'
import { filterRowRoutes } from './defined'
import { beforeEach } from './guard'
import home from './modules/home'
import base from './modules/base'

const routes = filterRowRoutes([
  ...home,
  ...base,
])

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 挂载路由守卫
beforeEach(router)
