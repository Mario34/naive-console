import { createApp, h } from 'vue'
import { router } from '@/router'
import App from './App.vue'

// import {
//   NMessageProvider, NConfigProvider, NDialogProvider,
//   NNotificationProvider, NLoadingBarProvider,
// } from 'naive-ui'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

import '@/styles/index.scss'

const app = createApp({
  render: () => h(App),
})

app.use(router)

app.mount('#app')
