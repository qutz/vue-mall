import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import wxmp from '../api/wxmp'
import store from '../store'
import * as types from '../store/mutation-types'
import { getToken, setToken, setToUrl, getToUrl } from '@/libs/util'
import wechat from '@/libs/wechat'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: routes
})

const OAUTH2 = 'oauth2'
const HOME = 'home'

router.beforeEach((to, from, next) => {
  // store.commit(types.UPDATE_LOADING_STATUS, {isLoading: true})
  document.title = to.meta.title
  const token = getToken()
  if (!token && to.name !== OAUTH2) {
    setToUrl(to.fullPath)
    // api接口请求微信授权地址
    // ?code=商户code&userid=用户id
    // code区分商户,userid用于分享
    let code = ''
    let userId = ''
    let params = {
      state: `${to.fullPath}-${code}-${userId}`
    }
    wxmp.oauth2(params).then(res => {
      window.location.href = res.data
    })
  } else if (!token && to.name === OAUTH2) {
    // ?code=CODE&state=STATE
    let params = { ...to.query }
    // api接口登录
    wxmp.login(params).then(res => {
      setToken(res.data.token)
      window.location.href = window.location.origin + getToUrl()
    })
  } else {
    if (!Vue.device.isAndroid) {
      if (!store.state.app.iosJsUrl) {
        let landingPage = document.URL
        // 如果进入路由有跳转需要加入跳转后的路由名称,比如/跳转到/home
        if (to.name === HOME && landingPage.indexOf(HOME) === -1) {
          landingPage = landingPage + HOME
        }
        store.commit(types.SET_WX_JS_URL, {iosJsUrl: landingPage})
      }
    }
    next()
  }
})

router.afterEach(to => {
  // store.commit(types.UPDATE_LOADING_STATUS, {isLoading: false})
  let _url = window.location.origin + to.fullPath
  if (!Vue.device.isAndroid) {
    _url = store.state.app.iosJsUrl.split('#')[0]
  }
  wechat.getJSSDK(_url)
})

export default router
