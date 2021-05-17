import { reactive, readonly } from 'vue'
import { Token } from '/@/utils/storage'
import * as api from '/@/api/user'
import router from '/@/router'

export interface UserInfo {
  username: string
  roles: string[]
}

export interface UserState {
  userInfo: UserInfo | null
}

const state = reactive<UserState>({
  userInfo: null,
})

export const useUser = () => {
  const setUserState = (data: UserInfo) => {
    state.userInfo = data
  }
  const getUserInfo = () => {
    api.getUserInfo({}).then(res => {
      setUserState(res.data)
    })
  }
  const clearUserInfo = () => {
    state.userInfo = null
  }
  const login = (data: unknown): Promise<unknown> => {
    return api.login(data).then(res => {
      Token.set(res.data.token)
    })
  }
  const logout = () => {
    Token.remove()
    router.push('/login')
  }

  return {
    state: readonly(state), // 避免意外修改
    login,
    logout,
    getUserInfo,
    clearUserInfo,
  }
}