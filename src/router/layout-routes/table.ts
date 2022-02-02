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
        component: () => import('@/views/list/index.vue'),
      },
    ],
  },
])
