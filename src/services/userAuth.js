export default {
	namespaced: true,
	state: {
		userInfo: null
	},
	mutations: {
		removeUserInfo(state) {
			state.userInfo = null
		},
		setUserInfo(state, payload) {
			state.userInfo = payload
		}
	},
}