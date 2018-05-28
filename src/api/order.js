import fetch from './fetch'

export default {
  // 获取订单列表
  list (params) {
    return fetch.get('/order/list', params)
  },

  // 获取订单详情信息
  detail (id) {
    return fetch.post('/order/detail/' + id)
  }

}
