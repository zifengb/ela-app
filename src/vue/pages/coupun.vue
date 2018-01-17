<style lang="scss" scoped>
.tabs-links {
	position: relative;
	display: flex;
	align-items: center;
	height: 6%;
	background-color: #fff;
	text-align: center;
	a {
		color: #333;
		width: 100%;
		font-size: 0.4rem;
	}
	.active-line {
		position: absolute;
		left: 25%;
		bottom: 0;
		width: 20%;
		border-top: 0.10003rem solid #F5E000;
		transform: translateX(-50%);
		transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	.right {
		left: 75%;
	}
}
.coupun-list {
	margin: 4% auto;
	width: 94%;
	> .item {
		margin-bottom: 4%;
		padding: 3%;
		background-color: #fff;
		box-shadow: 2px 2px 4px #c5c5c5;
		border-radius: 2%;
		div[class*="col"] {
			margin: auto;
		}
		.row > div:first-child {
			text-align: center;
		}
		h3 {
			color: #E51C23;
			font-size: 0.6rem;
		}
		.pay-use {
			font-size: 0.25555555rem;
			color: #000;
			background-color: #F5E000;
		}
	}
	.no-more {
		text-align: center;
	}
}
// 重新设置tab-link样式
.tab-link.active:not(.offline), .tab-link.active:not(.online) {
  background-color: transparent;
}
//# 重新设置tab-link样式
</style>



<template>
	<f7-page>

		<f7-navbar title="我的优惠" back-link="Back" sliding></f7-navbar>

		<div class="tabs-links">
			<f7-link tab-link="#c-tab-1" class="tab-link1" @click="tabActive(1)">红包</f7-link>
			<f7-link tab-link="#c-tab-2" class="tab-link2" @click="tabActive(2)">代金券</f7-link>
			<div ref="line" class="active-line"></div>
		</div>

		<f7-tabs>
			<f7-tab id="c-tab-1" active>
				<ul class="coupun-list">
					<li class="item">
						<f7-grid>
							<f7-col width="25">
								<h3>￥5</h3>
								<p>满x元可用</p>
							</f7-col>
							<f7-col width="50">
								<h3>拼手气红包</h3>
								<p>2017-01-04到期</p>
								<p>限12314***896手机使用</p>
							</f7-col>
							<f7-col width="25">
								<f7-button fill class="pay-use">立即使用</f7-button>
							</f7-col>
						</f7-grid>
					</li>
					<li class="item">
						<f7-grid>
							<f7-col width="25">
								<h3>￥5</h3>
								<p>满x元可用</p>
							</f7-col>
							<f7-col width="50">
								<h3>拼手气红包</h3>
								<p>2017-01-04到期</p>
								<p>限12314***896手机使用</p>
							</f7-col>
							<f7-col width="25">
								<f7-button fill class="pay-use">立即使用</f7-button>
							</f7-col>
						</f7-grid>
					</li>
					<li class="item">
						<f7-grid>
							<f7-col width="25">
								<h3>￥5</h3>
								<p>满x元可用</p>
							</f7-col>
							<f7-col width="50">
								<h3>拼手气红包</h3>
								<p>2017-01-04到期</p>
								<p>限12314***896手机使用</p>
							</f7-col>
							<f7-col width="25">
								<f7-button fill class="pay-use">立即使用</f7-button>
							</f7-col>
						</f7-grid>
					</li>
					<li class="item">
						<f7-grid>
							<f7-col width="25">
								<h3>￥5</h3>
								<p>满x元可用</p>
							</f7-col>
							<f7-col width="50">
								<h3>拼手气红包</h3>
								<p>2017-01-04到期</p>
								<p>限12314***896手机使用</p>
							</f7-col>
							<f7-col width="25">
								<f7-button fill class="pay-use">立即使用</f7-button>
							</f7-col>
						</f7-grid>
					</li>
					<li class="no-more">没有更多了~</li>
				</ul>
			</f7-tab>
			<f7-tab id="c-tab-2">
				Tab2
			</f7-tab>
		</f7-tabs>

	</f7-page>
</template>


<script>
export default {
	created() {
		// 初始化一下
		// this.$$('.active-line').removeClass('right')
	},
	methods: {
		tabActive(index) {
			index === 1 
			? this.$$('.active-line').removeClass('right')
			: this.$$('.active-line').addClass('right')
		}
	}
}
</script>
