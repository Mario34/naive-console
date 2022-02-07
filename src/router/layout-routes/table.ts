import { definedRoutes } from '../defined'
import { Table as TableIcon } from '@vicons/carbon'

/**
 * 表格
*/
export default definedRoutes([
  {
    path: 'table',
    name: 'table-list',
    meta: {
      title: '表格',
      icon: TableIcon,
      redirect: 'table-list',
    },
    component: () => import('@/views/list/index.vue'),
  },
])
