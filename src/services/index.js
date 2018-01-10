import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// vuex模块总入口文件
export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {

    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    },
    actions: {
        
    }
})