import type { RouteRecordRaw } from 'vue-router'

/**
 * 表格
*/
const routes: RouteRecordRaw[] = [
  {
    path: '/table',
    meta: {
      title: 'table',
      icon: 'el-icon-ice-cream-round',
    },
    component: () => import('/@/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'table',
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