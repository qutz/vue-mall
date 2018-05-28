import * as types from '../mutation-types'

export default {
  state: {
    iosJsUrl: '',
    isLoading: false,
    isAndroid: false,
    direction: 'forward'
  },
  getters: {
  },
  mutations: {
    [types.SET_WX_JS_URL] (state, payload) {
      state.iosJsUrl = payload.iosJsUrl
    },
    [types.UPDATE_LOADING_STATUS] (state, payload) {
      state.isLoading = payload.isLoading
    },
    [types.UPDATE_DEVICE] (state, payload) {
      state.isAndroid = payload.isAndroid
    },
    [types.UPDATE_DIRECTION] (state, payload) {
      state.direction = payload.direction
    }
  },
  actions: {
  }
}
