import { reactive, readonly } from 'vue'

const state = reactive({
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

/* 这里直接使用reactive实现全局配置，避免与其他状态管理库耦合 */
export const useLayout = () => {
  return {
    state: readonly(state),
    switchSidebar,
    switchHeaderFixed,
  }
}
