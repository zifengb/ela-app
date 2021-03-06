export default [
  {
    path: '/',  // 首页
    component: require('../vue/pages/home.vue')
  },
  {
    path: '/login/',  // 首页
    component: require('../vue/pages/login.vue')
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
    path: '/order/',  // 订单列表
    component: require('../vue/pages/order.vue')
  },
  {
    path: '/order-single/',  // 单个订单
    component: require('../vue/pages/order-single.vue')
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
    path: '/addressDetail/',  // 收货增加/修改
    component: require('../vue/pages/addressDetail.vue')
  },
  {
    path: '/profileChange/',  // 用户名、密码增加/修改
    component: require('../vue/pages/profileChange.vue')
  },
  {
    path: '/payoff/',  // 用户名、密码增加/修改
    component: require('../vue/pages/payoff.vue')
  },
  {
    path: '/shoppingCart/',
    component: require('../vue/pages/shoppingCart.vue')
  },
  {
    path: '/AmapTest/',  // 测试高德地图
    component: require('../vue/pages/AmapTest.vue')
  },
  {
    path: '/order-history/',  // 商家评价
    component: require('../vue/pages/orderHistory.vue')
  },
  {
    path: '/send-order/', // 对订单评价
    component: require('../vue/pages/send-order.vue')
  },
  {
    path: '/infoList/', // 营养资讯
    component: require('../vue/pages/infoList.vue')
  },
  {
    path: '/infoDetail/', // 营养资讯详情
    component: require('../vue/pages/infoDetail.vue')
  },
]
