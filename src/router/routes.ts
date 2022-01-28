import { definedRoutes } from './defined'
import { layoutRoutes } from './layout-routes'

import StatusPage from '@/views/status-page.vue'
import Layout from '@/layout'

// 被Layout组件包裹的路由列表，根据需要进行模块拆分
export const routes = definedRoutes([
  {
    path: '/',
    component: Layout,
    children: [
      ...layoutRoutes,
      {
        path: 'status/:statusCode',
        name: 'app-status',
        component: StatusPage,
        props: true,
        meta: {
          title: '出错啦',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      menu: false,
      tabs: false,
    },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: to => ({
      name: 'app-status',
      params: {
        statusCode: '404',
      },
      query: {
        from: to.fullPath,
      },
    }),
  },
])
