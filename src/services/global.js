export default {
	namespaced: true,
	state: {
			flag: true,
			host: 'http://localhost:3000'
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