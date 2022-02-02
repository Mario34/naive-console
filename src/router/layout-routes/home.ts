import { definedRoutes } from '../defined'
import Home from '@/views/home/index.vue'
import { Home as HomeIcon } from '@vicons/carbon'

/**
 * 基础路由
 */
export default definedRoutes([
  {
    path: '',
    name: 'home',
    meta: {
      title: '首页',
      icon: HomeIcon,
    },
    component: Home,
  },
])
