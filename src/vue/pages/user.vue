<style lang="scss" scoped>
.user-block {
	margin-top: 0;
	.avatar {
		width: 2rem;
		height: 2rem;
		img {
			border-radius: 50%;
			vertical-align: middle;
		}
	}
	.info {
		width: 74%;
	}
	li {
		padding: 4% 0;
	}
}
.user-profile {
	text-align: center;
	> div {
		padding: 4% 0;
		background-color: #fff;
		width: calc((100% - 2px*2)/ 3);
	}
	a {
		color: #000;
	}
	strong {
		font: {
			size: 0.8rem;
			weight: bolder;
		}
		color: #E51C23;
		> sub {
			font-size: 0.5rem;
		}
	}
}
</style>

<template>
	<f7-page class="main">

		<f7-navbar title="我的" back-link="Back" sliding></f7-navbar>

		<!-- 个人信息 start -->
		<f7-list class="user-block">
			<f7-list-item link="/account/" v-if="this.$store.state.userAuth.userInfo">
				<div class="avatar">
					<img src="../../assets/images/pic-dl.png" alt="">
				</div>
				<div class="info">
					<p>{{ this.$store.state.userAuth.userInfo.userName }}</p>
				</div>
			</f7-list-item>
			<f7-list-item link="/login/" v-else>
				<div class="avatar">
					<img src="../../assets/images/pic-dl.png" alt="">
				</div>
				<div class="info">
					<p>还未登录，请先前往登录</p>
				</div>
			</f7-list-item>
		</f7-list>
		<!-- 个人信息 end -->

		<!-- 个人优惠信息 start -->
		<f7-row class="user-profile">
			<f7-col width="33">
				<Strong v-if="this.$store.state.userAuth.userInfo">{{ this.$store.state.userAuth.userInfo.balance }}<sub class="unit">元</sub></Strong>
				<Strong v-else >0<sub class="unit">元</sub></Strong>
				<p>钱包</p>
			</f7-col>
			<f7-col width="33">
				<f7-link href="/coupun/">
					<Strong>0<sub class="unit">个</sub></Strong>
					<p>优惠</p>
				</f7-link>
			</f7-col>
			<f7-col width="33">
				<Strong>0<sub class="unit">分</sub></Strong>
				<p>积分</p>
			</f7-col>
		</f7-row>
		<!-- 个人优惠信息 end -->

		<f7-list>
			<f7-list-item link="/address/">收货地址</f7-list-item>
			<f7-list-item link="/accordion/">我的收藏</f7-list-item>
		</f7-list>
		<f7-list>
			<f7-list-item link="/accordion/">每日精选</f7-list-item>
			<f7-list-item link="/accordion/">积分商城</f7-list-item>
		</f7-list>
		<f7-list>
			<f7-list-item link="/accordion/">服务中心</f7-list-item>
		</f7-list>

	</f7-page>
</template>


<script>
export default {
	data() {
		return {
            
		}
	},
	created() {
	},
	methods: {
 	}
}
</script>
