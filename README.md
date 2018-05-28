# vue-mall

> 微信公众号测试项目

## 测试功能

#### 1、微信网页授权


授权方案采用
![image](https://segmentfault.com/img/remote/1460000010753253)


图片引用地址[SegmentFault](https://segmentfault.com/a/1190000010753247)

这种授权在第4步请求服务器返回token后,vue客服端直接重定向到最开始进入的页面

```code
    let params = { ...to.query }
    // api接口登录
    wxmp.login(params).then(res => {
      setToken(res.data.token)
      window.location.href = window.location.origin + getToUrl()
    })
```

#### 2、微信自定义分享

微信分享使用的是history模式实现自定义分享

经过测试实现步骤如下：
- 授权后进入router.beforeEach时判断系统类型,是IOS系统就记录当前URL到vuex中

注意：如果进入路由有重定向,需要加入重定向后的路由名称,比如'/'重定向到'/home'

```code
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
```

- 进入router.afterEach时判断系统类型,获取不同的jssdk签名地址

```code
router.afterEach(to => {
  // store.commit(types.UPDATE_LOADING_STATUS, {isLoading: false})
  let _url = window.location.origin + to.fullPath
  if (!Vue.device.isAndroid) {
    _url = store.state.app.iosJsUrl.split('#')[0]
  }
  wechat.getJSSDK(_url)
})
```

- vue全局公用函数实现分享

```code
  Vue.prototype.wxShare = wechat.setWxShare

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
```

- 页面中调用wxShare实现自定义分享

```code
  activated () {
    this.share()
  },
  methods: {
    share () {
      let link = window.location.href.split('#')[0]
      this.wxShare('首页', '首页内容', link, 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg')
    }
  }
```
#### 最后最重要的一点是：
## 调试分享的时候使用域名地址,不要使用ip+端口
## 调试分享的时候使用域名地址,不要使用ip+端口
## 调试分享的时候使用域名地址,不要使用ip+端口

## 重要的事情得说三遍,被这个坑惨了


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
