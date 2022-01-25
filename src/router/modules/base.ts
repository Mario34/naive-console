import { definedRoutes } from '../defined'

/**
 * 基础路由
*/
export default definedRoutes([
  {
    path: '/login',
    name: 'login',
    meta: {
      menu: false,
      tabs: false,
    },
    component: () => import('@/views/login/index.vue'),
  },
])
