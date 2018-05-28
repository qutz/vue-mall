import fetch from './fetch'

export default {
  // 获取微信授权地址
  oauth2 (params) {
    return fetch.get('/apps/oauth2', params)
  },

  // 用户登录
  login (params) {
    return fetch.get('/apps/login', params)
  },

  // 获取JSSDK
  jssdk (params) {
    return fetch.get('/apps/jssdk', params)
  }
}
