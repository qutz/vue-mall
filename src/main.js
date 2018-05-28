// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import store from './store'
import App from './App'
import * as types from './store/mutation-types'
import wechat from '@/libs/wechat'
import { AlertPlugin, ToastPlugin, AjaxPlugin, WechatPlugin, DevicePlugin } from 'vux'
require('es6-promise').polyfill()

Vue.use(DevicePlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

FastClick.attach(document.body)
Vue.config.productionTip = false

Vue.prototype.wxShare = wechat.setWxShare
/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  router,
  store,
  render: h => h(App),
  mounted () {
    this.$store.commit(types.UPDATE_DEVICE, {isAndroid: Vue.device.isAndroid})
  }
})
