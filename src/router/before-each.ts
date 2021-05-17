import { Token } from '/@/utils/storage'
import type { Router } from 'vue-router'
import { useUser } from '/@/models/user'

const { state, getUserInfo, clearUserInfo } = useUser()

const beforeEach = (router: Router) => {
  router.beforeEach(async (to, form, next) => {
    if (to.name === 'login') {
      if (!Token.get()) {
        next()
      } else {
        next('/')
      }
    } else {
      if (!Token.get()) {
        next('/login')
      } else {
        if (state.userInfo == null) {
          try {
            // TODO: 此处获取用户信息(权限)
            await getUserInfo()
          } catch {
            clearUserInfo()
            next('/login')
            return
          }
        }
        // TODO: 权限校验
        next()
      }
    }
  })
}

export default beforeEach