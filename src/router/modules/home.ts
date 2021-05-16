import type { RouteRecordRaw } from 'vue-router'

/**
 * 首页
*/
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '',
    component: () => import('/@/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'el-icon-data-analysis',
        },
        component: () => import('/@/views/home/index.vue'),
      },
    ],
  },
]

export default routes