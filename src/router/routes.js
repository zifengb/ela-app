export default [
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
