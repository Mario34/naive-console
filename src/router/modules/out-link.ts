import type { OutLinkItem } from '../router-type'

/**
 * 外链
*/
const routes: OutLinkItem[] = [
  {
    path: '/bilibili',
    name: 'bilibili',
    meta: {
      title: 'out-link',
      link: '//github.com/Mario34',
      icon: 'el-icon-link',
    },
  },
]

export default routes