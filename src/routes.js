export default [
  {
    path: '/about/',
    component: require('./assets/vue/pages/about.vue')
  },
  {
    path: '/form/',
    component: require('./assets/vue/pages/form.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./assets/vue/pages/dynamic-route.vue')
  },
  {
    path: '/my-route/',
    component: require('./assets/vue/pages/my-route.vue')
  },
  {
    path: '/accordion/',
    component: require('./assets/vue/pages/accordion.vue')
  },
  {
    path: '/tabs/',
    component: require('./assets/vue/pages/tabs.vue')
  },
  {
    path: '/view/',
    component: require('./assets/vue/pages/view.vue')
  },
  {
    path: '/axios-list/',
    component: require('./assets/vue/pages/axios-list.vue')
  },
]
