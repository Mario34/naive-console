import { definedRoutes } from '../defined'
import { Layout } from '@/components/Layout'
import Home from '@/views/home/index.vue'
import StatusPage from '@/views/status-page.vue'

/**
 * 基础路由
 */
export default definedRoutes([
  {
    path: '/',
    name: '',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'el-icon-data-analysis',
        },
        component: Home,
      },
      { path: '/status/:statusCode', component: StatusPage, props: true },
    ],
  },
])
