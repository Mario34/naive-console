import { createApp } from 'vue'
import App from './App.vue'
import router from '/@/router/index'
import ElementPlus from 'element-plus'
import 'normalize.css'
import '/@/styles/index.scss'

const app = createApp(App)

app.use(router)
app.use(ElementPlus, { size: 'small' })
app.mount('#app')
