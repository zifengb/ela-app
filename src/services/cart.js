export default {
	namespaced: true,
	state: {
			cartObj: {
				// user_id: 0,
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
		initCart(state, cart) {
			state.cartObj = cart;
		},
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
			let sum = 0;
			if (cartItems.length > 0) {
				for (let i = 0; i < cartItems.length; i++) {
					let cur = cartItems[i];
					sum += cur.amount * cur.price;
				}
				
			} else {
				sum = 0
			}
			state.cartObj.total = sum;
		},
		emptyItem(state) {
			state.cartObj.cartItems = []
			state.cartObj.total = 0
		}
	},
	actions: {
			
	}
}