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
			state.userInfo = Object.assign(payload)
		},
		setAddress(state, payload) {
			state.userInfo.address = payload
		}
	},
}