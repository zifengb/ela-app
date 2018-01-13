import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// vuex模块总入口文件
export default new Vuex.Store({
    state: {
        flag: true
    },
    getters: {

    },
    mutations: {
        showToolbar(state) {
            state.flag = true
        },
        hideToolbar(state) {
            state.flag = false
        },
    },
    actions: {
        
    }
})