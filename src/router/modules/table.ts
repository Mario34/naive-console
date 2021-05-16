import type { RouteRecordRaw } from 'vue-router'

/**
 * 表格
*/
const routes: RouteRecordRaw[] = [
  {
    path: '/demo',
    meta: {
      title: 'demo',
      icon: 'el-icon-ice-cream-round',
    },
    component: () => import('/@/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'demo',
        meta: {
          title: 'demo',
        },
        component: () => import('/@/views/home/index.vue'),
      },
      {
        path: 'demo-table',
        name: 'demo-table',
        meta: {
          title: 'demo-table',
        },
        component: () => import('/@/views/table/index.vue'),
      },
    ],
  },
]

export default routes