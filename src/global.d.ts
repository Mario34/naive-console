import type { LoadingBarApiInjection } from 'naive-ui/es/loading-bar/src/LoadingBarProvider'

declare global {
  interface Window {
    $appLoadingBar: LoadingBarApiInjection
  }
}
