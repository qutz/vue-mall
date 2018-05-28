import order from '../../api/order'
import * as types from '../mutation-types'

const state = {
  // 订单列表
  doctorList: [],
  // 订单详情信息
  doctorDetail: null
}

const mutations = {
  // 设置订单列表
  [types.SET_ORDER_LIST] (state, data) {
    state.doctorList = data
  },
  // 设置订单详情信息
  [types.SET_ORDER_DETAIL] (state, data) {
    state.doctorDetail = data
  }
}

const actions = {

  /**
   * 获取订单列表
   * @param state
   * @param commit
   * @param params
   * @returns {Promise<void>}
   */
  async getOrderList ({state, commit}, params) {
    let ret = await order.list(params)
    commit(types.SET_ORDER_LIST, ret.data.data)
  },

  /**
   * 获取订单详情信息
   * @param state
   * @param commit
   * @param id 订单ID
   * @returns {Promise<void>}
   */
  async getOrderDetail ({state, commit}, id) {
    let ret = await order.detail(id)
    commit(types.SET_ORDER_DETAIL, ret.data.data)
  }
}

export default {
  state,
  actions,
  mutations
}
