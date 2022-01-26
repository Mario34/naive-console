import { definedRoutes } from '../defined'
import { ConnectionSignalOff as ConnectionSignalOffIcon } from '@vicons/carbon'

/**
 * 外链
 */
export default definedRoutes([
  {
    path: 'error',
    name: 'error',
    meta: {
      title: '错误页面',
      icon: ConnectionSignalOffIcon,
    },
    component: () => import('@/views/error.vue'),
  },
])
