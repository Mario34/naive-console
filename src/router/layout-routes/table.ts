import { RouterView } from 'vue-router'
import { definedRoutes } from '../defined'
import { Table as TableIcon } from '@vicons/carbon'

/**
 * 表格
*/
export default definedRoutes([
  {
    path: 'table',
    meta: {
      title: 'table',
      icon: TableIcon,
      redirect: 'table-list',
    },
    component: RouterView,
    children: [
      {
        path: '',
        name: 'table-list',
        meta: {
          title: 'demo',
        },
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: 'table-demo-table',
        name: 'table-demo-table',
        meta: {
          title: 'demo-table',
        },
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
])
