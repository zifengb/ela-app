import Vue from 'vue'
import Vuex from 'vuex'

// Import vuex modules
import global from './global';
import userAuth from './userAuth';
import cart from './cart';
import order from './order';

Vue.use(Vuex)

// vuex模块总入口文件
export default new Vuex.Store({
    modules: {
        global: global,
        userAuth: userAuth,
        cart: cart,
        order: order
    }
})