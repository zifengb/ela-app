export default [
  {
    path: '/login/',  // 首页
    component: require('../vue/pages/login.vue')
  },
  {
    path: '/home/',  // 首页
    component: require('../vue/pages/home.vue')
  },
  {
    path: '/restaurants/',  // 商家列表
    component: require('../vue/pages/restaurants.vue')
  },
  {
    path: '/user/',  // 我的
    component: require('../vue/pages/user.vue')
  },
  {
    path: '/order/',  // 订单
    component: require('../vue/pages/order.vue')
  },
  {
    path: '/account/',  // 账号与安全
    component: require('../vue/pages/account.vue')
  },
  {
    path: '/coupun/',  // 我的优惠券
    component: require('../vue/pages/coupun.vue')
  },
  {
    path: '/address/',  // 收货地址
    component: require('../vue/pages/address.vue')
  },
  {
    path: '/about/',
    component: require('../vue/pages/about.vue')
  },
  {
    path: '/form/',
    component: require('../vue/pages/form.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('../vue/pages/dynamic-route.vue')
  },
  {
    path: '/my-route/',
    component: require('../vue/pages/my-route.vue')
  },
  {
    path: '/accordion/',
    component: require('../vue/pages/accordion.vue')
  },
  {
    path: '/tabs/',
    component: require('../vue/pages/tabs.vue')
  },
  {
    path: '/view/',
    component: require('../vue/pages/view.vue')
  },
  {
    path: '/axios-list/',
    component: require('../vue/pages/axios-list.vue')
  },
]
