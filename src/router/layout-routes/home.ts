import { definedRoutes } from '../defined'
import Home from '@/views/home/index.vue'
import { Home as HomeIcon, AccumulationRain as AccumulationRainIcon } from '@vicons/carbon'

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
  {
    path: 'test',
    name: 'test',
    meta: {
      title: '测试',
      icon: AccumulationRainIcon,
    },
    component: Home,
  },
])
