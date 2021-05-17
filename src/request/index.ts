import axios from 'axios'
import { ElMessage } from 'element-plus'

const instance = axios.create()

instance.interceptors.request.use((config) => {
  return config
}, function(error) {
  ElMessage.error(error)
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  return response.data
}, function(error) {
  ElMessage.error(error)
  return Promise.reject(error)
})

export default instance