export default {
	namespaced: true,
	state: {
		orderObj: {}
	},
	getters: {
		
	},
	mutations: {
		assign(state, source) {
			state.orderObj = source
		},
		adChange(state, i){
			if (state.orderObj.addressText) {
				state.orderObj.addressText.forEach(el => el.isDefault = false);
				state.orderObj.addressText[i].isDefault = true;
			}
		},
		clear(state) {
			state.orderObj = {}
		},
		appendId(state, id) {
			state.orderObj.orderId = id;
		}
	},
	actions: {
		
	}
}