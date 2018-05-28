const OAuth2 = () => import('@/views/oauth2').then(m => m.default)
const Tab = () => import('@/components/tab').then(m => m.default)
const Home = () => import('@/views/home/home').then(m => m.default)
const Classify = () => import('@/views/classify/classify').then(m => m.default)
const Shopcar = () => import('@/views/shopcar/shopcar').then(m => m.default)
const My = () => import('@/views/my/my').then(m => m.default)
const MyCollection = () => import('@/views/my/myCollection').then(m => m.default)
const MyOrderList = () => import('@/views/my/order/list').then(m => m.default)
const MyOrderDetail = () => import('@/views/my/order/detail').then(m => m.default)

export default [
  {
    path: '/',
    name: 'tab',
    redirect: '/home',
    component: Tab,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          keepAlive: true
        },
        component: Home
      },
      {
        path: '/classify',
        name: 'classify',
        meta: {
          title: '分类',
          keepAlive: true
        },
        component: Classify
      },
      {
        path: '/shopcar',
        name: 'shopcar',
        meta: {
          title: '购物车',
          keepAlive: false
        },
        component: Shopcar
      },
      {
        path: '/my',
        name: 'my',
        meta: {
          title: '我的',
          keepAlive: true
        },
        component: My
      }
    ]
  },
  {
    path: '/oauth2',
    name: 'oauth2',
    meta: {
      title: '',
      keepAlive: false
    },
    component: OAuth2
  },
  {
    path: '/mycollection',
    name: 'mycollection',
    meta: {
      title: '我的收藏',
      keepAlive: true
    },
    component: MyCollection
  },
  {
    path: '/myorderlist',
    name: 'myorderlist',
    meta: {
      title: '订单列表',
      keepAlive: true
    },
    component: MyOrderList
  },
  {
    path: '/myorderdetail',
    name: 'myorderdetail',
    meta: {
      title: '订单详情',
      keepAlive: true
    },
    component: MyOrderDetail
  }
]
