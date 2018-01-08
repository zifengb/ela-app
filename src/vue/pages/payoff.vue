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
				<f7-grid class="list-content">
					<f7-col width="20" class="username">濛子</f7-col>
					<f7-col width="20" class="sex">女士</f7-col>
					<f7-col width="60" class="mobile">18010097302</f7-col>
					<f7-col width="100" class="address">北京市朝阳区朝外大街外交部4号 890室</f7-col>
				</f7-grid>
			</f7-list-item>
			<f7-list-item link="#">
				<f7-label>送达时间</f7-label>
				<f7-link href="#" class="delivery-time">今天(周二)立即送出(大概19:40送达)</f7-link>
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
				<f7-grid class="inner-grid">
					<f7-col width="50">墨刀餐厅</f7-col>
					<f7-col width="50">由 商家 提供配送服务</f7-col>
				</f7-grid>
			</f7-list-item>
			<f7-list-item class="food-list">
				<f7-grid class="inner-grid">
					<f7-col width="55">
						<f7-badge>折</f7-badge>
						菜式1
					</f7-col>
					<f7-col width="15">* 3</f7-col>
					<f7-col width="15">￥10</f7-col>
					<f7-col width="15">￥30</f7-col>
				</f7-grid>
			</f7-list-item>
			<f7-list-item class="coupun-list">
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
			</f7-list-item>
			<f7-list-item class="fee-list">
				<f7-grid class="inner-grid">
					<f7-col width="85">餐盒费</f7-col>
					<f7-col width="15">￥10</f7-col>
					<f7-col width="85">配送费</f7-col>
					<f7-col width="15">￥10</f7-col>
				</f7-grid>
			</f7-list-item>
			<f7-list-item class="final-sum">
				<f7-grid class="inner-grid">
					<f7-col width="70">
						<span>总计 ￥10</span>
						<span>优惠 ￥10</span>
					</f7-col>
					<f7-col width="30">实付 ￥10</f7-col>
				</f7-grid>
			</f7-list-item>
		</f7-list>

		<f7-toolbar class="pay-toolbar">
			<f7-grid class="toolbar-grid">
				<f7-col width="4">已优惠 ￥10</f7-col>
				<f7-col width="30">待支付 ￥30</f7-col>
				<f7-col width="30" class="pay-btn">
					<a href="#" @click="submit">提交订单</a>
				</f7-col>
			</f7-grid>
		</f7-toolbar>


		<f7-picker-modal class="modal-popup" :opened="flag">
			<div class="popup-content">
				<f7-list>
					<f7-list-item>
						<f7-grid class="inner-grid">
							<f7-col width="30"><f7-link @click="popup">确定</f7-link></f7-col>
							<f7-col width="70">我的收货地址</f7-col>
						</f7-grid>
					</f7-list-item>

					<f7-list-item radio name="my-radio" value="1" checked>
						<f7-link href="/addressDetail/"><i class="icon la la-edit"></i></f7-link>
						<div class="address-info">
							<p>濛子女神 132464153415</p>
							<p>北京市朝阳区朝外大街外交部4号 890室</p>
						</div>
					</f7-list-item>
					<f7-list-item radio name="my-radio" value="2" checked>
						<f7-link href="/addressDetail/"><i class="icon la la-edit"></i></f7-link>
						<div class="address-info">
							<p>濛子女神 132464153415</p>
							<p>北京市朝阳区朝外大街外交部4号 890室</p>
						</div>
					</f7-list-item>
					<f7-list-item radio name="my-radio" value="3" checked>
						<f7-link href="/addressDetail/"><i class="icon la la-edit"></i></f7-link>
						<div class="address-info">
							<p>濛子女神 132464153415</p>
							<p>北京市朝阳区朝外大街外交部4号 890室</p>
						</div>
					</f7-list-item>


					<f7-list-item link="/addressDetail/">
						<span><i class="icon la la-plus-circle"></i> 新增收货地址</span>
					</f7-list-item>
				</f7-list>
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
		popup() {
			this.flag = !this.flag;
		},
		submit() {
			
		}
	}
}
</script>
