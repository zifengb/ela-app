export default {
	namespaced: true,
	state: {
		userInfo: {
			address: [
				{
						"consignee": "zero1",
						"sex": 0,
						"address": "gdut",
						"phone": "123456789",
						isDefault: true
				},
				{
						"consignee": "zero2",
						"sex": 0,
						"address": "gdut",
						"phone": "123456789",
						isDefault: false
				},
				{
						"consignee": "zero3",
						"sex": 0,
						"address": "gdut",
						"phone": "123456789",
						isDefault: false
				}
			],
			userId: 1,
			userName: 'zzz',
			consignee: '李先生',
			phoneList: '1231231323',
			deliveryGeo: '150,100.100.10'
		}
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