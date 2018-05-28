import axios from 'axios'
import { getToken, setToken } from '@/libs/util'

const ajaxUrl = process.env.NODE_ENV === 'development'
  // 测试环境api接口
  ? 'http://api.appyl.net/api/v1'
  // 线上环境api接口
  : 'http://api.appyl.net/api/v1'

const axiosInstance = axios.create({
  baseURL: ajaxUrl,
  timeout: 30000
})

axiosInstance.interceptors.request.use(config => {
  /**
   * 在这里做loading ...
   * @type {string}
   */

  // 获取token
  const token = getToken()
  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

axiosInstance.interceptors.response.use(response => {
  /**
   * 在这里做loading 关闭
   */

  // 如果后端有新的token则重新缓存
  let newToken = response.headers['new-token']

  if (newToken) {
    setToken(newToken)
  }
  return response.data
}, error => {
  let response = error.response
  if (response.status === 401) {
    // 处理401错误
  } else if (response.status === 302) {
    // 处理302错误
  }
  return Promise.reject(response)
})

export default {
  post (url, data) {
    return axiosInstance({
      method: 'post',
      url: url,
      data: data
    })
  },

  get (url, params) {
    return axiosInstance({
      method: 'get',
      url: url,
      params
    })
  },

  delete (url, params) {
    return axiosInstance({
      method: 'delete',
      url: url,
      params
    })
  },

  put (url, data) {
    return axiosInstance({
      method: 'put',
      url: url,
      data: data
    })
  }
}
