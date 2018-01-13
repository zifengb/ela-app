export default {
	namespaced: true,
	state: {
			cartObj: {
				user_id: 1,
				total: 0,
				cartItems: []
			}
	},
	getters: {
		cartLen(state) {
			return state.cartObj.cartItems.length;
		}
	},
	mutations: {
		saveItem(state, item) {
			let cartItems = state.cartObj.cartItems;
			for (var i = 0; i < cartItems.length; i++) {
				let temp = cartItems[i];
				if (temp.food_id === item.food_id) {
					temp.amount += item.amount
					break;
				}
			}
			i === cartItems.length && cartItems.push(item)
			cartItems[i].amount === 0 && cartItems.splice(i, 1)
			state.cartObj.total = cartItems.length > 0 
															? cartItems.reduce((pre, cur) => pre.price * pre.amount + cur.price * cur.amount, {price: 0, amount: 0})
															: 0
		},
		emptyItem(state) {
			state.cartObj.cartItems = []
			state.cartObj.total = 0
		}
	},
	actions: {
			
	}
}