import { defineComponent, renderSlot } from 'vue'
import { useLoadingBar } from 'naive-ui'

import type { LoadingBarApiInjection } from 'naive-ui/es/loading-bar/src/LoadingBarProvider'

declare global {
  interface Window {
    $appLoadingBar: LoadingBarApiInjection
  }
}

export default defineComponent({
  name: 'AppProvider',
  setup() {
    window.$appLoadingBar = useLoadingBar()
  },
  render() {
    return renderSlot(this.$slots, 'default')
  },
})
