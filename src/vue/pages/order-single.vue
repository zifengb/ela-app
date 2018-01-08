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
#tab-2 .block-title {
	margin: 0;
	padding: 3% 0 3% 4%;
	background-color: #F0F0F2;
	& + .list-block {
		margin: 0;
	}
}
// 自定义picker-modal
.modal-popup {
	background-color: rgba(0, 0, 0, 0.4);
	height: 100vh;
}
.popup-content {
	width: 100%;
	position: absolute;
	bottom: 0;
	background-color: #fff;
}
// #自定义picker-modal

// 重新设置tab-link样式
.tab-link.active:not(.offline), .tab-link.active:not(.online) {
  background-color: transparent;
}
//# 重新设置tab-link样式
</style>


<template>
	<f7-page class="main">

		<f7-navbar title="墨刀餐厅xxx" back-link="Back" sliding></f7-navbar>

		<div class="tabs-links">
			<f7-link tab-link="#tab-1" class="tab-link1" @click="tabActive(1)">订单状态</f7-link>
			<f7-link tab-link="#tab-2" class="tab-link2" @click="tabActive(2)">订单详情</f7-link>
			<f7-link href="#" class="phone-call" @click="popup"><i class="la la-phone"></i></f7-link>
			<div ref="line" class="active-line"></div>
		</div>

		<f7-tabs>
			<f7-tab id="tab-1">
				<f7-timeline class="timeline-list">
					<f7-timeline-item class="timeline-list-item">
						<f7-grid class="tl-item-content">
							<f7-col width="80">
								<h4>订单已提交</h4>
								<p>耐心等待商家确认</p>
							</f7-col>
							<f7-col width="20">112313</f7-col>
						</f7-grid>
					</f7-timeline-item>
					<f7-timeline-item class="timeline-list-item">
						<f7-grid class="tl-item-content">
							<f7-col width="80">
								<h4>支付成功</h4>
								<p>耐心等待商家确认</p>
							</f7-col>
							<f7-col width="20">112313</f7-col>
						</f7-grid>
					</f7-timeline-item>
					<f7-timeline-item class="timeline-list-item">
						<f7-grid class="tl-item-content">
							<f7-col width="80">
								<h4>商家已接单</h4>
								<p>耐心等待商家确认</p>
							</f7-col>
							<f7-col width="20">112313</f7-col>
						</f7-grid>
					</f7-timeline-item>
					<f7-timeline-item class="timeline-list-item">
						<f7-grid class="tl-item-content">
							<f7-col width="80">
								<h4>商家配送中</h4>
								<p>耐心等待商家确认</p>
							</f7-col>
							<f7-col width="20">112313</f7-col>
						</f7-grid>
					</f7-timeline-item>
					<f7-timeline-item class="timeline-list-item">
						<f7-grid class="tl-item-content">
							<f7-col width="80">
								<h4>订单已完成</h4>
								<p>耐心等待商家确认</p>
							</f7-col>
							<f7-col width="20">112313</f7-col>
						</f7-grid>
					</f7-timeline-item>
				</f7-timeline>
			</f7-tab>
			<f7-tab id="tab-2" active>

				<!-- 订单详情 start -->
				<f7-block-title class="block-title">订单详情</f7-block-title>
				<f7-list class="order-detail">
					<f7-list-item class="restaurant">hkhk</f7-list-item>
					<f7-list-item class="food-list">hkhk</f7-list-item>
					<f7-list-item class="fee-list">hkhk</f7-list-item>
					<f7-list-item class="coupun-list">hkhk</f7-list-item>
					<f7-list-item class="sum">hkhk</f7-list-item>
				</f7-list>
				<!-- 订单详情 end -->

				<!-- 配送 start -->
				<f7-block-title class="block-title">配送信息</f7-block-title>
				<f7-list class="delivery-info">
					<f7-list-item class="delivery-tip">hkhk</f7-list-item>
					<f7-list-item class="address">hkhk</f7-list-item>
					<f7-list-item class="service">hkhk</f7-list-item>
				</f7-list>
				<!-- 配送 end -->

				<!-- 订单信息 start -->
				<f7-block-title class="block-title">订单信息</f7-block-title>
				<f7-list class="order-info">
					<f7-list-item class="phone">hkhk</f7-list-item>
					<f7-list-item class="time">hkhk</f7-list-item>
					<f7-list-item class="method">hkhk</f7-list-item>
				</f7-list>
				<!-- 订单信息 end -->

			</f7-tab>
		</f7-tabs>

		<!-- <f7-actions :opened="flag" class="action-modal" @actions:closed="actionModal(false)">
			<f7-actions-group>
				<f7-actions-button>商家电话12312132</f7-actions-button>
				<f7-actions-button>客服电话12312132</f7-actions-button>
			</f7-actions-group>
			<f7-actions-group>
				<f7-actions-button>取消</f7-actions-button>
			</f7-actions-group>
		</f7-actions> -->

		<f7-picker-modal class="modal-popup" :opened="flag">
			<div class="popup-content">
				<p>fsdfd</p>
				<p>fsdfd</p>
				<p>fsdfd</p>
				<p>fsdfd</p>
				<p>fsdfd</p>
				<p>fsdfd</p>
				<p>fsdfd</p>
				<f7-button @click="popup">关闭按钮</f7-button>
			</div>
		</f7-picker-modal>

	</f7-page>
</template>


<script>
export default {
	data() {
		return {
			flag: false
		}
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
		}
	}
}
</script>
