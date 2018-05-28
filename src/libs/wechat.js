import Vue from 'vue'
import wxmp from '../api/wxmp'
const jsApiList = ['onMenuShareAppMessage', 'onMenuShareTimeline']

export default {
  // 获取JSSDK
  getJSSDK (url) {
    wxmp.jssdk({url: url}).then(res => {
      const wxconfig = {
        debug: false,
        appId: res.data.app_id,
        timestamp: res.data.timestamp,
        nonceStr: res.data.nonce_str,
        signature: res.data.signature,
        jsApiList: jsApiList
      }
      Vue.wechat.config(wxconfig)
    })
  },
  getJSSDKAsync (url) {
    return new Promise((resolve) => {
      wxmp.jssdk({url: url}).then(res => {
        const wxconfig = {
          debug: false,
          appId: res.data.app_id,
          timestamp: res.data.timestamp,
          nonceStr: res.data.nonce_str,
          signature: res.data.signature,
          jsApiList: jsApiList
        }
        Vue.wechat.config(wxconfig)
        resolve()
      })
    })
  },
  setWxShare (title, desc, link, imgUrl) {
    Vue.wechat.ready(() => {
      // 分享给朋友
      Vue.wechat.onMenuShareAppMessage({
        title: title, // 分享标题
        desc: desc,   // 分享描述
        link: link,   // 分享链接 默认以当前链接
        imgUrl: imgUrl, // 分享图标
        success () {
        },
        cancel () {
        }
      })
      // 分享到朋友圈
      Vue.wechat.onMenuShareTimeline({
        title: title, // 分享标题
        desc: desc,   // 分享描述
        link: link,   // 分享链接 默认以当前链接
        imgUrl: imgUrl, // 分享图标
        success () {
        },
        cancel () {
        }
      })
    })
  }
}
