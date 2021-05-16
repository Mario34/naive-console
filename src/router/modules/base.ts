import type { RouteRecordRaw } from 'vue-router'

/**
 * 基础路由
*/
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    meta: {
      menu: false,
      tabs: false,
    },
    component: () => import('/@/views/login/index.vue'),
  },
]

export default routes