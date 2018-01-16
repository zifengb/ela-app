export default {
	namespaced: true,
	state: {
			flag: true,
			// host: 'http://localhost:3000'
			host: 'http://39.108.190.87:3389'
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