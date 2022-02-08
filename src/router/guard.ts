import { storageToken } from '@/storage'

import type { Router } from 'vue-router'

export const guard = (router: Router) => {
  router.beforeEach(async (to, form, next) => {
    if (to.name === 'login' || to.name === 'login-password') {
      if (storageToken.get()) {
        next('/')
      } else {
        next()
      }
    } else if (!storageToken.get()) {
      next('/login')
    } else {
      next()
    }
  })
  router.beforeResolve((to, form, next) => {
    window.$appLoadingBar.start()
    window.document.title = to.meta?.title ?? 'Naive Console'
    next()
  })
  router.afterEach((to, form, failure) => {
    if (failure) {
      window.$appLoadingBar.error()
    } else {
      window.$appLoadingBar.finish()
    }
  })
}
