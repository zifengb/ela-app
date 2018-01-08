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

		<f7-list class="order-list">
			<f7-list-item class="list-header">
				<f7-grid no-gutter>
					<f7-col width="55">
						<f7-link href="#" class="ret-name">墨刀餐厅(太阳宫店)<i class="arrow"></i></f7-link>
					</f7-col>
					<f7-col width="45" class="tips">
						<f7-link href="#">等待送达</f7-link>
						<f7-link href="#">待评价</f7-link>
					</f7-col>
				</f7-grid>
			</f7-list-item>
			<f7-list-item link="#" class="list-content">
				<div class="ret-img">
					<img src="../../assets/images/pic-dl.png" alt="">
				</div>
				<div class="order-info">
					<p><strong class="order-fee">￥12</strong></p>
					<p>2018-01-3 15:00</p>
					<p>由 商家 提供配送服务</p>
				</div>
			</f7-list-item>
		</f7-list>

	</f7-page>
</template>


<script>
export default {
	
}
</script>
