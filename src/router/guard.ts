import { storageToken } from '@/storage'
// import { useUser } from '@/models/user'

import type { Router } from 'vue-router'
import type { RouteType } from './defined'

export const beforeEach = (router: Router) => {
  // const { state, getUserInfo, clearUserInfo } = useUser(router)
  router.beforeEach(async (to, form, next) => {
    if (to.name === 'login') {
      if (!storageToken.get()) {
        next()
      } else {
        next('/')
      }
    } else if (!storageToken.get()) {
      // TODO: 添加重定向参数
      next('/login')
    } else {
      // if (state.userInfo == null) {
      //   try {
      //     // TODO: 此处获取用户信息(权限)
      //     await getUserInfo()
      //   } catch {
      //     clearUserInfo()
      //     next('/login')
      //     return
      //   }
      // }
      // TODO: 权限校验
      next()
    }
  })
}
