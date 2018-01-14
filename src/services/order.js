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
			if (state.orderObj.address) {
				state.orderObj.address.forEach(el => el.isDefault = false);
				state.orderObj.address[i].isDefault = true;
			}
			
		},
		clear(state) {
			state.orderObj = {}
		}
	},
	actions: {
		
	}
}