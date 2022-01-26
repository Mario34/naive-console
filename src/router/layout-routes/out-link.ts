import { definedRoutes } from '../defined'
import { Link as LinkIcon } from '@vicons/carbon'

/**
 * 外链
*/
export default definedRoutes([
  {
    path: 'github',
    name: 'github',
    meta: {
      title: 'github',
      link: '//github.com/Mario34/naiveui-console',
      icon: LinkIcon,
    },
    redirect: '//github.com/Mario34/naiveui-console',
  },
])
