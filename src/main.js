// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import vue-amap
import VueAMap from 'vue-amap'

// Import vue-websocket plugin
import VueWebSocket from 'vue-websocket'

// Import vuex store
import store from './services/index'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
 import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
 import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
 */

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
Vue.use(Framework7Vue)

// Init VueAMap
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '1d9099d5148a82cc01f7f9930f4833ab',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation', 'AMap.CitySearch']
});

// Init websocket
Vue.use(VueWebSocket, 'ws://localhost:3000', {
  reconnection: true  // 开发阶段使用false， 上线使用true?
})

//注入混合器
Vue.mixin(mixins)


// 测试路由导航守卫（该框架没集成！！！）
// Routes.beforeEach((to, from, next) => {
//   console.log('router handler')
//   next();
// })

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  store,
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes
  },
  // Register App Component
  components: {
    app: App
  }
})
