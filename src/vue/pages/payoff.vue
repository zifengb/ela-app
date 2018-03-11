<style lang="scss">
.pay-toolbar{
	.toolbar-grid {
		width: 100%;
		align-items: center;
		div[class*='col'] {
			margin: 0;
			padding: 2% 0;
		}
	}
	.toolbar-inner {
		padding: 0 0 0 8px;
	}
	.pay-btn {
		height: 44px;
		background-color: #FFEA00;
		text-align: center;
	}
}
</style>


<style lang="scss" scoped>
.address-list {
	margin-top: 0;
	margin-bottom: 4%;
	.list-content{
		width: 100%;
		margin: 4% 0;
	}
	.delivery-time {
		font-size: 0.25555rem;
	}
}
.pay-list, .order-list {
	margin: 4% 0;
}
.inner-grid {
	width: 100%;
	div[class*='col'] {
		margin: 2% 0;
	}
	.badge {
		margin-right: 2%;
		background-color: #A938A9;
		border-radius: 0;
		vertical-align: text-bottom;
	}
}
.icon {
	color: #FAE823;
}
// 自定义picker-modal
.modal-popup {
	background-color: rgba(0, 0, 0, 0.4);
	height: 100vh;
}
.popup-content {
	position: absolute;
	bottom: 0;
	width: 100%;
	background-color: #fff;
	.list-block {
		margin: 0;
	}
	.address-info {
		width: 90%;
		font-size: 0.4rem;
	}
}
// #自定义picker-modal
</style>


<template>
	<f7-page>

		<f7-navbar title="提交订单" back-link="Back" sliding></f7-navbar>

		<f7-list class="address-list">
			<f7-list-item link="#" @click="popup">
				<f7-row class="list-content">
					<f7-col width="20" class="username">{{ defaultAddress.consignee }}</f7-col>
					<f7-col width="20" class="sex">{{ defaultAddress.sex === 0 ? '先生' : '女士'}}</f7-col>
					<f7-col width="60" class="mobile">{{ defaultAddress.phone }}</f7-col>
					<f7-col width="100" class="address">{{ defaultAddress.address }}</f7-col>
				</f7-row>
			</f7-list-item>
			<f7-list-item link="#">
				<f7-label>送达时间</f7-label>
				<f7-link href="#" class="delivery-time">立即送出(大概30分钟后送达)</f7-link>
			</f7-list-item>
		</f7-list>

		<f7-list class="pay-list">
			<f7-list-item link="#">
				<f7-label>支付方式</f7-label>
				<f7-link>在线支付</f7-link>
			</f7-list-item>
		</f7-list>


		<f7-list class="order-list">
			<f7-list-item class="restaurent-info">
				<f7-row class="inner-grid">
					<f7-col width="50">{{ order.restaurantName }}</f7-col>
					<f7-col width="50">由 商家 提供配送服务</f7-col>
				</f7-row>
			</f7-list-item>
			<f7-list-item class="food-list">
				<f7-row class="inner-grid">
					<template v-for="food in order.detail.cartItems">
						<f7-col width="55">
							<f7-badge>折</f7-badge>
							{{food.food_name}}
						</f7-col>
						<f7-col width="15">{{'* ' + food.amount}}</f7-col>
						<f7-col width="15">{{'￥'+food.price}}</f7-col>
						<f7-col width="15">{{'￥'+food.amount * food.price}}</f7-col>
					</template>
				</f7-row>
			</f7-list-item>
			<!-- 活动优惠 -->
			<!-- <f7-list-item class="coupun-list">
				<f7-row class="inner-grid">
					<f7-col width="85">
						<f7-badge>折</f7-badge>
						门店新客
					</f7-col>
					<f7-col width="15">
						-￥5
					</f7-col>
					<f7-col width="85">
						<f7-badge>返</f7-badge>
						满返商家代金券优惠
					</f7-col>
					<f7-col width="15">
						-￥5
					</f7-col>
				</f7-row>
			</f7-list-item> -->
			<!-- 活动优惠 -->
			<f7-list-item class="fee-list">
				<f7-row class="inner-grid">
					<!-- <f7-col width="85">餐盒费</f7-col>
					<f7-col width="15">￥10</f7-col> -->
					<f7-col width="85">配送费</f7-col>
					<f7-col width="15">{{'￥'+order.deliverFee}}</f7-col>
				</f7-row>
			</f7-list-item>
			<f7-list-item class="final-sum">
				<f7-row class="inner-grid">
					<f7-col width="70">
						<span>{{'总计 ￥'+originalPrice}}</span>
						<span>{{'优惠 ￥'+(originalPrice-totalPrice)}}</span>
					</f7-col>
					<f7-col width="30">{{'实付 ￥'+totalPrice}}</f7-col>
				</f7-row>
			</f7-list-item>
		</f7-list>

		<f7-toolbar class="pay-toolbar">
			<f7-row class="toolbar-grid">
				<f7-col width="4">{{'已优惠 ￥' +(originalPrice-totalPrice)}}</f7-col>
				<f7-col width="30">{{'待支付 ￥' +totalPrice}}</f7-col>
				<f7-col width="30" class="pay-btn">
					<a href="#" @click="submit">提交订单</a>
				</f7-col>
			</f7-row>
		</f7-toolbar>


		<f7-picker-modal class="modal-popup" :opened="flag">
			<div class="popup-content">
				<f7-list>
					<f7-list-item>
						<f7-row class="inner-grid">
							<f7-col width="30"><f7-link @click="popup">确定</f7-link></f7-col>
							<f7-col width="70">我的收货地址</f7-col>
						</f7-row>
					</f7-list-item>

					<f7-list-item v-for="(item, index) in order.addressText" 
					:key="index"
					radio
					name="my-radio"
					value="1"
					@change="radioChange(index)"
					:checked="item.isDefault">
						<f7-link href="/addressDetail/"><i class="icon la la-edit"></i></f7-link>
						<div class="address-info">
							<p>{{item.consignee+ ' ' +item.phone}}</p>
							<p>{{item.address}}</p>
						</div>
					</f7-list-item>


					<f7-list-item link="#" @click="jumpTo">
						<span><i class="icon la la-plus-circle"></i> 新增收货地址</span>
					</f7-list-item>
				</f7-list>
			</div>
		</f7-picker-modal>

	</f7-page>
</template>


<script>
import axios from 'axios'
export default {
	data() {
		return {
			flag: false,
			order: {}
		}
	},
	computed: {
		defaultAddress() {
			return this.order.addressText.filter(el => el.isDefault)[0]
		},
		originalPrice() {
			return this.order.detail.total + this.order.deliverFee
		},
		totalPrice() {
			let t = this.order.detail.total + this.order.deliverFee,
					cp = 3;
			 return t > 15 ? t - cp : t;
		}
	},
	created() {
		this.HOST = this.$store.state.global.host
		this.order = this.$store.state.order.orderObj
	},
	methods: {
		popup() {
			this.flag = !this.flag;
		},
		jumpTo() {
			this.popup();
			this.$f7router.navigate('/addressDetail/')
		},
		radioChange(i) {
			this.$store.commit('order/adChange', i)
		},
		updateOrder(id) {
			let json = {
				orderId: id,
				statusCode: 2
			}
			return axios.post(this.HOST + '/order/update', json)
		},
		clearCart() {
			let userId = this.$store.state.userAuth.userInfo.userId;
			return axios.get(this.HOST + '/cart/clear?user_id=' + userId).then(res => {}).catch(err => console.log(err))
		},
		submit() {
			let json = {
				addressText: JSON.stringify(this.defaultAddress),
				deliverFee: this.order.deliverFee,
				detail: JSON.stringify(this.order.detail.cartItems),
				userId: this.order.userId,
				userName: this.order.userName,
				restaurantId: this.order.restaurantId,
				restaurantName: this.order.restaurantName,
				phoneList: JSON.stringify(this.defaultAddress.phone),
				consignee: this.order.consignee,
				deliveryGeo: this.order.deliveryGeo,
				totalPrice: this.totalPrice,
				originalPrice: this.originalPrice,
				restaurantImagePath: this.order.restaurantImagePath
			}
			axios.post(this.HOST + '/order/update', json).then(res => {
				if (res.status === 200) {
					let id = res.data.orderId;
					// 清空购物车
					this.clearCart()
					this.updateOrder(id).then(res => {
						// 更新路由
						if (res.status === 200) {
							alert('商家已接单~')
							this.$store.commit('order/clear')
							this.$store.commit('cart/emptyItem')
							this.$f7router.navigate('/order-single/?id='+id)
						}
					}).catch(err => console.log(err))
				}
			}).catch(err => console.log(err))
		}
	}
}
</script>
