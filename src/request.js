import axios from 'axios'
import router from '@/router'
import store from '@/store'

const service = axios.create({
  baseURL: '',
  timeout: 10000
})

service.interceptors.request.use(config => {
  config.headers = {
    
  }
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default service