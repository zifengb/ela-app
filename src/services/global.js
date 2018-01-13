export default {
	namespaced: true,
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
}