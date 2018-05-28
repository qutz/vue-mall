import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import order from './modules/order'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    app,
    order
  }
})
