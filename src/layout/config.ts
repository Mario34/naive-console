import { reactive, readonly } from 'vue'

const state = reactive<{
  dark: boolean
  sidebarCollapsed: boolean
  headerFixed: boolean
}>({
  /* 颜色模式 */
  dark: true,
  /* 侧边菜单栏折叠状态 */
  sidebarCollapsed: false,
  /* 头部吸顶状态 */
  headerFixed: false,
})

/* 切换侧边菜单栏折叠状态 */
const switchSidebar = (val?: boolean) => {
  if (val === undefined) {
    state.sidebarCollapsed = !state.sidebarCollapsed
  } else {
    state.sidebarCollapsed = val
  }
}

/* 切换侧头部吸顶状态 */
const switchHeaderFixed = (val?: boolean) => {
  if (val === undefined) {
    state.headerFixed = !state.headerFixed
  } else {
    state.headerFixed = val
  }
}

/* 切换暗色/亮色模式 */
const switchDark = (val?: boolean) => {
  if (val === undefined) {
    state.dark = !state.dark
  } else {
    state.dark = val
  }
}

/* 这里直接使用reactive实现全局配置，避免与其他状态管理库耦合 */
export const useLayout = () => {
  return {
    state: readonly(state),
    switchSidebar,
    switchHeaderFixed,
    switchDark,
  }
}
