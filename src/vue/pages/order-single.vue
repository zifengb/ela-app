<style lang="scss">
.timeline-list-item {
	padding-left: 0;
	.timeline-item-date {
		width: 0;
	}
	.timeline-item-divider {
		background-color: #F5E000;
	}
	.timeline-item-content {
		width: 100%;
	}
	.tl-item-content {
		color: #B0B0B0;
		font-size: 0.4rem;
		h4 {
			color: #000;
			font-size: 0.5rem;
		}
	}
	&:not(:last-of-type) .tl-item-content {
		border-bottom: 1px solid #DEDEDE;
	}
}
</style>


<style lang="scss" scoped>
.main {
	background-color: #fff;
}
.tabs-links {
	position: relative;
	display: flex;
	align-items: center;
	height: 6%;
	background-color: #fff;
	text-align: center;
	border-bottom: 1px solid #DEDEDE;
	a {
		color: #333;
		width: 100%;
		font-size: 0.4rem;
		flex: 1;
	}
	.active-line {
		position: absolute;
		left: 12%;
		bottom: 0;
		width: 20%;
		border-top: 0.10003rem solid #F5E000;
		transform: translateX(-50%);
		transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	.right {
		left: 38%;
	}
	.phone-call {
		flex: 2;
		text-align: right;
		transform: translateX(-10%);
	}
}
#o-tab-2 .block-title {
	margin: 0;
	padding: 3% 0 3% 4%;
	background-color: #F0F0F2;
	& + .list-block {
		margin: 0;
	}
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
.cancel-btn {
	color: #000;
	background-color: #ffd21f;
}
.order-info {
	margin-bottom: 50px;
}
// 重新设置tab-link样式
.tab-link.active:not(.offline), .tab-link.active:not(.online) {
  background-color: transparent;
}
//# 重新设置tab-link样式
</style>


<template>
	<f7-page class="main">

		<f7-navbar :title="order.restaurantName" back-link="Back" sliding></f7-navbar>

		<div class="tabs-links">
			<f7-link tab-link="#o-tab-1" class="tab-link1" @click="tabActive(1)">订单状态</f7-link>
			<f7-link tab-link="#o-tab-2" class="tab-link2" @click="tabActive(2)">订单详情</f7-link>
			<f7-link href="#" class="phone-call" @click="popup"><i class="la la-phone"></i></f7-link>
			<div ref="line" class="active-line"></div>
		</div>

		<f7-tabs>
			<f7-tab id="o-tab-1" active>
				<f7-timeline class="timeline-list">
					<f7-timeline-item class="timeline-list-item">
						<f7-grid class="tl-item-content">
							<f7-col width="80">
								<h4>订单已提交</h4>
								<p>耐心等待商家确认</p>
							</f7-col>
							<f7-col width="20"></f7-col>
						</f7-grid>
					</f7-timeline-item>
					<f7-timeline-item class="timeline-list-item">
						<f7-grid class="tl-item-content">
							<f7-col width="80">
								<h4>支付成功</h4>
								<p>耐心等待商家确认</p><f7-badge class="cancel-btn" v-if="order.deliverStatus == 0" @click="updateOrder">取消订单</f7-badge>
							</f7-col>
							<f7-col width="20"></f7-col>
						</f7-grid>
					</f7-timeline-item>
					<f7-timeline-item class="timeline-list-item" v-if="order.deliverStatus == 1">
						<f7-grid class="tl-item-content">
							<f7-col width="80">
								<h4>商家已接单</h4>
								<p>商家准备中，由商家配送，配送进度请咨询商家</p>
							</f7-col>
							<f7-col width="20"></f7-col>
						</f7-grid>
					</f7-timeline-item>
					<f7-timeline-item class="timeline-list-item" v-if="order.deliverStatus == 1">
						<f7-grid class="tl-item-content">
							<f7-col width="80">
								<h4>商家配送中</h4>
								<p>请等待配送</p>
							</f7-col>
							<f7-col width="20"></f7-col>
						</f7-grid>
					</f7-timeline-item>
					<f7-timeline-item class="timeline-list-item" v-if="order.deliverStatus == 2">
						<f7-grid class="tl-item-content">
							<f7-col width="80">
								<h4>订单已完成</h4>
								<p>已完成订单，可以评价订单哟</p>
							</f7-col>
							<f7-col width="20"></f7-col>
						</f7-grid>
					</f7-timeline-item>
				</f7-timeline>
			</f7-tab>
			<f7-tab id="o-tab-2">

				<!-- 订单详情 start -->
				<f7-block-title class="block-title">订单详情</f7-block-title>
				<f7-list class="order-detail">
					<f7-list-item class="restaurant">
						<f7-grid class="inner-grid">
							<f7-col width="70">{{ order.restaurantName }}</f7-col>
							<f7-col width="30">非美团转送</f7-col>
						</f7-grid>
					</f7-list-item>
					<f7-list-item class="food-list">
						<f7-grid class="inner-grid">
							<!-- item -->
							<template v-for="food in order.detail">
								<f7-col width="55">
									<f7-badge>折</f7-badge>
									{{ food.food_name }}
								</f7-col>
								<f7-col width="15">{{'*' +food.amount}}</f7-col>
								<f7-col width="15">{{'￥'+ food.price}}</f7-col>
								<f7-col width="15">{{'￥'+ food.price}}</f7-col>
							</template>
							<!-- item -->
						</f7-grid>
					</f7-list-item>
					<f7-list-item class="fee-list">
						<f7-grid class="inner-grid">
							<!-- <f7-col width="85">餐盒费</f7-col>
							<f7-col width="15">￥10</f7-col> -->
							<f7-col width="85">配送费</f7-col>
							<f7-col width="15">{{'￥' + order.deliverFee }}</f7-col>
						</f7-grid>
					</f7-list-item>
					<!-- 活动 -->
					<!-- <f7-list-item class="coupun-list">
						<f7-grid class="inner-grid">
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
						</f7-grid>
					</f7-list-item> -->
					<!-- 活动 -->
					<f7-list-item class="final-fee">
						<f7-grid class="inner-grid">
							<f7-col width="70">
								<span>{{'总计 ￥'+ order.originalPrice}}</span>
								<span>{{'优惠 ￥'+ (order.originalPrice - order.totalPrice)}}</span>
							</f7-col>
							<f7-col width="30">{{'实付 ￥'+ order.totalPrice}}</f7-col>
						</f7-grid>
					</f7-list-item>
				</f7-list>
				<!-- 订单详情 end -->

				<!-- 配送 start -->
				<f7-block-title class="block-title">配送信息</f7-block-title>
				<f7-list class="delivery-info">
					<f7-list-item class="delivery-tip">
						<f7-label>期望信息</f7-label>
						<span>立即配送</span>
					</f7-list-item>
					<f7-list-item class="address">
						<f7-label>配送地址</f7-label>
						<div>
							<p>{{ order.addressText && (order.addressText.consignee+ ' ' + order.addressText.phone)}}</p>
							<p>{{ order.addressText && order.addressText.address }}</p>
						</div>
					</f7-list-item>
					<f7-list-item class="service">
						<f7-label>配送服务</f7-label>
						<span>由 商家 提供配送服务</span>
					</f7-list-item>
				</f7-list>
				<!-- 配送 end -->

				<!-- 订单信息 start -->
				<f7-block-title class="block-title">订单信息</f7-block-title>
				<f7-list class="order-info">
					<f7-list-item class="phone">
						<f7-label>订单号码</f7-label>
						<span>{{ order.orderId }}</span>
					</f7-list-item>
					<f7-list-item class="time">
						<f7-label>订单时间</f7-label>
						<span>{{ order.createdAt }}</span>
					</f7-list-item>
					<f7-list-item class="method">
						<f7-label>支付方式</f7-label>
						<span>线上支付</span>
					</f7-list-item>
				</f7-list>
				<!-- 订单信息 end -->

			</f7-tab>
		</f7-tabs>

		<f7-actions :opened="flag" class="action-modal" @actions:closed="actionModal(false)">
			<f7-actions-group>
				<f7-actions-button @click="phonecall(order.phoneList)">商家电话</f7-actions-button>
				<f7-actions-button @click="phonecall(13432389260)">客服电话</f7-actions-button>
			</f7-actions-group>
			<f7-actions-group>
				<f7-actions-button>取消</f7-actions-button>
			</f7-actions-group>
		</f7-actions>
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
	created() {
		// alert(this.$store.state.count);
		// alert(window.localStorage.getItem('count'));
		this.HOST = this.$store.state.global.host;
		this.listener();
		this.loadOrder();
	},
	methods: {
		tabActive(index) {
			index === 1 
			? this.$$('.active-line').removeClass('right')
			: this.$$('.active-line').addClass('right')
		},
		actionModal(f) {
			if (f === false) {
				this.flag = f;
			} else {
				this.flag = !this.flag
			}
		},
		popup() {
			this.flag = !this.flag;
		},
		phonecall(number) {
			window.plugins.CallNumber.callNumber(this.onSuccess, this.onError, number, true);
		},
		callSuccess(result) {
			console.log("Success:"+result);
			// alert("Success:"+result);
		},
		callError(result) {
			console.log("Success:"+result);
			// alert("Success:"+result);
		},
		listener() {
			this.$socket.emit('listener', { info: 'message from vue template' })
		},
		loadOrder() {
			axios.get(this.HOST + '/order/query?orderId=' + this.$route.query.id).then(res => {
				this.order = res.data;
				this.order.detail = JSON.parse(res.data.detail)
				this.order.addressText = JSON.parse(res.data.addressText)
			}).catch(err => console.log(err))
		},
		updateOrder(id) {	// 更新订单状态
			let json = {
				orderId: id || this.$route.query.id,
				statusCode: 3
			}
			axios.post(this.HOST + '/order/update', json).then(res => {
				this.order = res.data;
			}).catch(err => console.log(err))
		}
	}
}
</script>
