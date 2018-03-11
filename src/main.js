// Import Vue
import Vue from 'vue'

// Import Framework7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import Framework7 Vue
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import vue-amap
import VueAMap from 'vue-amap'

// Import vue-websocket plugin
import VueWebSocket from 'vue-websocket'

// Import vuex store
import store from './services/index'

// Import F7 Styles
import Framework7CSS from 'framework7/dist/css/framework7.css'

// Import App Custom Styles
import AppStyles from './assets/sass/main.scss'

// Import Line-FontAwesome Fonts Styles
import './assets/css/line-awesome.min.css'
import './assets/css/line-awesome-font-awesome.min.css'

// Taobao REM layout
import './utils/flexible'

// Import Routes
import Routes from './router/routes.js'

// Import App Component
import App from './main.vue'

import mixins from './mixins'

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)

// Init VueAMap
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '1d9099d5148a82cc01f7f9930f4833ab',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation', 'AMap.CitySearch']
});

// Init websocket
// Vue.use(VueWebSocket, 'ws://localhost:3000', {
Vue.use(VueWebSocket, 'ws://39.108.190.87:3389', {
  reconnection: true  // 开发阶段使用false， 上线使用true?
})

//注入混合器
Vue.mixin(mixins)

let theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// 测试路由导航守卫（该框架没集成！！！）
// Routes.beforeEach((to, from, next) => {
//   console.log('router handler')
//   next();
// })

// Init App
new Vue({
  el: '#app',
  render: c => c('app'),
  store,
  // Init Framework7 by passing parameters here
  framework7: {
    id: 'com.ela.app',
    theme
  },
  // Register App Component
  components: {
    app: App
  },
  routes: Routes
})
