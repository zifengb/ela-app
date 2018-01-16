<style lang="scss" scoped>
.list-header {
	.row {
		width: 100%;
	}
	.ret-name {
		color: #000;
		font-weight: bold;
	}
	.tips {
		font-size: 0.4rem;
		text-align: right;
		> a {
			color: #F5E000;
			& + a {
				margin-left: 3%;
			}
		}
	}
}
.list-content {
	padding: 3% 0;
	.ret-img {
		width: 4rem;
		height: 3rem;
	}
	.order-info {
		width: 80%;
		margin-left: 2%;
		font-size: 0.4rem;
		.order-fee {
			color: #E51C23;
			font-size: 0.75555rem;
		}
	}
}
</style>


<template>
	<f7-page>

		<f7-navbar title="我的订单" back-link="Back" sliding></f7-navbar>

		<template v-if="page.list && page.list.length > 0 ">
			<f7-list class="order-list" v-for="item in page.list" :key="item.orderId">
				<f7-list-item class="list-header">
					<f7-grid no-gutter>
						<f7-col width="55">
							<f7-link :href="'/shoppingCart/?id='+item.restaurantId" class="ret-name">{{item.restaurantName}}<i class="arrow"></i></f7-link>
						</f7-col>
						<f7-col width="45" class="tips">
							<template v-if="item.deliverStatus === 2">
								<f7-link :href="'/order-single/?id='+item.orderId">再来一单</f7-link>
								<f7-link :href="'/order-single/?id='+item.orderId">待评价</f7-link>
							</template>
							<f7-link v-else-if="item.deliverStatus === 1" :href="'/order-single/?id='+item.orderId">等待送达</f7-link>
							<f7-link v-else-if="item.deliverStatus === 0" :href="'/order-single/?id='+item.orderId">等待接单</f7-link>
						</f7-col>
					</f7-grid>
				</f7-list-item>
				<f7-list-item :link="'/order-single/?id='+item.orderId" class="list-content">
					<div class="ret-img">
						<img :src="item.restaurantImagePath" alt="">
					</div>
					<div class="order-info">
						<p><strong class="order-fee">{{ '￥' + item.totalPrice }}</strong></p>
						<p>{{ item.createdAt }}</p>
						<p>由 商家 提供配送服务</p>
					</div>
				</f7-list-item>
			</f7-list>
		</template>
		<p v-else-if="!userInfo" style="margin-top: 20px; text-align: center">您还没有登录账户~请跳转<f7-link href="/login/">登录页</f7-link></p>
		<p v-else style="margin-top: 20px; text-align: center">您暂时没有订单记录~快去下单吧</p>
	</f7-page>
</template>


<script>
import axios from 'axios'
export default {
	data() {
		return {
			page: {},
			userInfo: {}
		}
	},
	created() {
		this.HOST = this.$store.state.global.host
		this.userInfo = this.$store.state.userAuth.userInfo
		!!this.userInfo ? this.init() : this.login()
	},
	methods: {
		init() {
			axios.get(this.HOST + '/order/query?userId=' + this.userInfo.userId).then(res => {
				this.page = res.data;
			}).catch(err => console.log(err))
		},
		login() {
			this.$router.loadPage('/login/')
		}
	}
}
</script>
