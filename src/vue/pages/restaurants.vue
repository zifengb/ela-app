<style lang="scss" scoped>
.main {
	background-color: #fff;
}
.accordion-bar {
	position: fixed;
	top: 44px;
	width: 100%;
	background-color: #fff;
	border-bottom: 1px solid #d6d6d6;
	z-index: 9999;
	.accordion-item {
		float: left;
		width: 50%;
		height: 40px;
		line-height: 40px;
		font-size: 1rem;
		text-align: center;
		color: #878787;
	}
	.filter {
		.accordion-item-content {
			margin-left: -100%;
		}
		.filter-form {
			background-color: #F0F0F2;
			text-align: left;
			.sline {
				margin-right: 10%;
			}
		}
	}
}
.radio-box {
		padding: 0;
		width: 100%;
}
.btn-group {
	width: 100%;
	> a {
		float: left;
		width: 50%;
		text-align: center;
	}
	.cancel {
		color: #A6A6A6;
	}
}
.rt-list {
	color: #878787;
	border-top: 1px solid #DEDEDE;
	> li {
		margin: 4% 2%;
		border-bottom: 1px solid #DEDEDE;
	}
	.rt-list-grid {
		font-size: 1rem;
		.content {
			margin-bottom: 4%;
			> h3 {
				color: #000;
				font-size: 1.4rem;
				font-weight: lighter;
				line-height: 1.5;
			}
			> p {
				line-height: 1.8;
			}
			.rating {
				color: #FFD21F;
			}
			.agent-fee::before {
				content: "|";
				margin: 0 4px;
			}
		}
		.badge {
			margin-right: 2%;
			background-color: #A938A9;
			border-radius: 0;
			vertical-align: text-bottom;
		}
		.tip {
			color: #ADADAD;
			transform: translateY(34%);
		}
	}
}
// 重新修饰f7默认组件样式
.list-block {
	margin: 0;
}
.accordion-item-content {
	width: 200%;
}
//# 重新修饰f7默认组件样式
</style>


<template>
	<f7-page class="main">
		<f7-navbar title="商家列表" back-link="Back" sliding></f7-navbar>
		
		<f7-accordion class="accordion-bar clearfix">
			<!-- Item 1 -->
			<f7-accordion-item class="accordion-item sort" @accordion:open="toggleAccordion" @accordion:close="toggleAccordion">
				<f7-accordion-toggle>
					综合排序 <i class="la" :class="classList"></i>
				</f7-accordion-toggle>
				<f7-accordion-content>
					<f7-list form>
						<f7-list-item radio name="my-radio" value="1" title="Radio 1" @click="closeAccordion('.sort')" checked></f7-list-item>
						<f7-list-item radio name="my-radio" value="2" title="Radio 2" @click="closeAccordion('.sort')"></f7-list-item>
						<f7-list-item radio name="my-radio" value="3" title="Radio 3" @click="closeAccordion('.sort')"></f7-list-item>
					</f7-list>
				</f7-accordion-content>
			</f7-accordion-item>
			<!-- Item 2 -->
			<f7-accordion-item class="accordion-item filter">
				<f7-accordion-toggle class="filter-toggle">
					筛选 <i class="la la-filter"></i>
				</f7-accordion-toggle>
				<f7-accordion-content>
					<f7-list form class="filter-form">
						<f7-list-item>
							<f7-label>价格区间(元)</f7-label>
							<f7-input type="text" placeholder="上限"/>
							<span class="sline">——</span>
							<f7-input type="text" placeholder="下限"/>
						</f7-list-item>
						<f7-list-item>
							<f7-label>商家类别</f7-label>
							<ul class="radio-box">
								<f7-list-item radio name="my-radio" value="1" title="Radio 1" checked></f7-list-item>
								<f7-list-item radio name="my-radio" value="2" title="Radio 2"></f7-list-item>
								<f7-list-item radio name="my-radio" value="3" title="Radio 3"></f7-list-item>
							</ul>
						</f7-list-item>
						<f7-list-item>
							<div class="btn-group">
								<a href="#" class="cancel" @click="closeAccordion('.filter')">取消</a>
								<a href="#" class="sure" @click="closeAccordion('.filter')">确认</a>
							</div>
						</f7-list-item>
					</f7-list>
				</f7-accordion-content>
			</f7-accordion-item>
		</f7-accordion>

		<ul class="rt-list" style="margin-top: 40px;">
			<li>
				<f7-grid class="rt-list-grid">
					<f7-col width="30" class="aside">
						<img src="../../assets/images/pic-dl.png" />
					</f7-col>
					<f7-col width="70">
						<f7-grid>
							<f7-col width="70" class="content">
								<h3>墨刀餐厅</h3>
								<p><span class="rating">{{ calcRate(2) }}</span>月售13131单</p>
								<p><span>起送￥111</span><span class="agent-fee">配送￥122</span></p>
								<p><f7-badge>折</f7-badge>折扣商品6.22折起</p>
							</f7-col>
							<f7-col width="30" class="tip">
								<p>1.0km</p>
								<p>48分钟</p>
							</f7-col>
						</f7-grid>
					</f7-col>
				</f7-grid>
			</li>
			<li>
				<f7-grid class="rt-list-grid">
					<f7-col width="30" class="aside">
						<img src="../../assets/images/pic-dl.png" />
					</f7-col>
					<f7-col width="70">
						<f7-grid>
							<f7-col width="70" class="content">
								<h3>墨刀餐厅</h3>
								<p><span class="rating">{{ calcRate(2) }}</span>月售13131单</p>
								<p><span>起送￥111</span><span class="agent-fee">配送￥122</span></p>
								<p><f7-badge>折</f7-badge>折扣商品6.22折起</p>
							</f7-col>
							<f7-col width="30" class="tip">
								<p>1.0km</p>
								<p>48分钟</p>
							</f7-col>
						</f7-grid>
					</f7-col>
				</f7-grid>
			</li>
			<li>
				<f7-grid class="rt-list-grid">
					<f7-col width="30" class="aside">
						<img src="../../assets/images/pic-dl.png" />
					</f7-col>
					<f7-col width="70">
						<f7-grid>
							<f7-col width="70" class="content">
								<h3>墨刀餐厅</h3>
								<p><span class="rating">{{ calcRate(2) }}</span>月售13131单</p>
								<p><span>起送￥111</span><span class="agent-fee">配送￥122</span></p>
								<p><f7-badge>折</f7-badge>折扣商品6.22折起</p>
							</f7-col>
							<f7-col width="30" class="tip">
								<p>1.0km</p>
								<p>48分钟</p>
							</f7-col>
						</f7-grid>
					</f7-col>
				</f7-grid>
			</li>
			<li>
				<f7-grid class="rt-list-grid">
					<f7-col width="30" class="aside">
						<img src="../../assets/images/pic-dl.png" />
					</f7-col>
					<f7-col width="70">
						<f7-grid>
							<f7-col width="70" class="content">
								<h3>墨刀餐厅</h3>
								<p><span class="rating">{{ calcRate(2) }}</span>月售13131单</p>
								<p><span>起送￥111</span><span class="agent-fee">配送￥122</span></p>
								<p><f7-badge>折</f7-badge>折扣商品6.22折起</p>
							</f7-col>
							<f7-col width="30" class="tip">
								<p>1.0km</p>
								<p>48分钟</p>
							</f7-col>
						</f7-grid>
					</f7-col>
				</f7-grid>
			</li>
			<li>
				<f7-grid class="rt-list-grid">
					<f7-col width="30" class="aside">
						<img src="../../assets/images/pic-dl.png" />
					</f7-col>
					<f7-col width="70">
						<f7-grid>
							<f7-col width="70" class="content">
								<h3>墨刀餐厅</h3>
								<p><span class="rating">{{ calcRate(2) }}</span>月售13131单</p>
								<p><span>起送￥111</span><span class="agent-fee">配送￥122</span></p>
								<p><f7-badge>折</f7-badge>折扣商品6.22折起</p>
							</f7-col>
							<f7-col width="30" class="tip">
								<p>1.0km</p>
								<p>48分钟</p>
							</f7-col>
						</f7-grid>
					</f7-col>
				</f7-grid>
			</li>
			<li>
				<f7-grid class="rt-list-grid">
					<f7-col width="30" class="aside">
						<img src="../../assets/images/pic-dl.png" />
					</f7-col>
					<f7-col width="70">
						<f7-grid>
							<f7-col width="70" class="content">
								<h3>墨刀餐厅</h3>
								<p><span class="rating">{{ calcRate(2) }}</span>月售13131单</p>
								<p><span>起送￥111</span><span class="agent-fee">配送￥122</span></p>
								<p><f7-badge>折</f7-badge>折扣商品6.22折起</p>
							</f7-col>
							<f7-col width="30" class="tip">
								<p>1.0km</p>
								<p>48分钟</p>
							</f7-col>
						</f7-grid>
					</f7-col>
				</f7-grid>
			</li>
			<li>
				<f7-grid class="rt-list-grid">
					<f7-col width="30" class="aside">
						<img src="../../assets/images/pic-dl.png" />
					</f7-col>
					<f7-col width="70">
						<f7-grid>
							<f7-col width="70" class="content">
								<h3>墨刀餐厅</h3>
								<p><span class="rating">{{ calcRate(2) }}</span>月售13131单</p>
								<p><span>起送￥111</span><span class="agent-fee">配送￥122</span></p>
								<p><f7-badge>折</f7-badge>折扣商品6.22折起</p>
							</f7-col>
							<f7-col width="30" class="tip">
								<p>1.0km</p>
								<p>48分钟</p>
							</f7-col>
						</f7-grid>
					</f7-col>
				</f7-grid>
			</li>
			<li>
				<f7-grid class="rt-list-grid">
					<f7-col width="30" class="aside">
						<img src="../../assets/images/pic-dl.png" />
					</f7-col>
					<f7-col width="70">
						<f7-grid>
							<f7-col width="70" class="content">
								<h3>墨刀餐厅</h3>
								<p><span class="rating">{{ calcRate(2) }}</span>月售13131单</p>
								<p><span>起送￥111</span><span class="agent-fee">配送￥122</span></p>
								<p><f7-badge>折</f7-badge>折扣商品6.22折起</p>
							</f7-col>
							<f7-col width="30" class="tip">
								<p>1.0km</p>
								<p>48分钟</p>
							</f7-col>
						</f7-grid>
					</f7-col>
				</f7-grid>
			</li>
			<li>
				<f7-grid class="rt-list-grid">
					<f7-col width="30" class="aside">
						<img src="../../assets/images/pic-dl.png" />
					</f7-col>
					<f7-col width="70">
						<f7-grid>
							<f7-col width="70" class="content">
								<h3>墨刀餐厅</h3>
								<p><span class="rating">{{ calcRate(2) }}</span>月售13131单</p>
								<p><span>起送￥111</span><span class="agent-fee">配送￥122</span></p>
								<p><f7-badge>折</f7-badge>折扣商品6.22折起</p>
							</f7-col>
							<f7-col width="30" class="tip">
								<p>1.0km</p>
								<p>48分钟</p>
							</f7-col>
						</f7-grid>
					</f7-col>
				</f7-grid>
			</li>
			<li>
				<f7-grid class="rt-list-grid">
					<f7-col width="30" class="aside">
						<img src="../../assets/images/pic-dl.png" />
					</f7-col>
					<f7-col width="70">
						<f7-grid>
							<f7-col width="70" class="content">
								<h3>墨刀餐厅</h3>
								<p><span class="rating">{{ calcRate(2) }}</span>月售13131单</p>
								<p><span>起送￥111</span><span class="agent-fee">配送￥122</span></p>
								<p><f7-badge>折</f7-badge>折扣商品6.22折起</p>
							</f7-col>
							<f7-col width="30" class="tip">
								<p>1.0km</p>
								<p>48分钟</p>
							</f7-col>
						</f7-grid>
					</f7-col>
				</f7-grid>
			</li>
			<li>
				<f7-grid class="rt-list-grid">
					<f7-col width="30" class="aside">
						<img src="../../assets/images/pic-dl.png" />
					</f7-col>
					<f7-col width="70">
						<f7-grid>
							<f7-col width="70" class="content">
								<h3>墨刀餐厅</h3>
								<p><span class="rating">{{ calcRate(2) }}</span>月售13131单</p>
								<p><span>起送￥111</span><span class="agent-fee">配送￥122</span></p>
								<p><f7-badge>折</f7-badge>折扣商品6.22折起</p>
							</f7-col>
							<f7-col width="30" class="tip">
								<p>1.0km</p>
								<p>48分钟</p>
							</f7-col>
						</f7-grid>
					</f7-col>
				</f7-grid>
			</li>
		</ul>
	</f7-page>
</template>


<script>
export default {
	data() {
		return {
			isOpened: false
		}
	},
	created() {
		// 查看this实例可以发现，DOM7($$)、framework7($f7)实例已经注册在原型上
		console.dir(this)
	},
	computed: {
		classList() {
			return this.isOpened ? ['la-angle-up'] : ['la-angle-down'];
		}
	},
	methods: {
		calcRate(rate) {
			return "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
		},
		closeAccordion(selector) {
			this.$f7.accordionClose(selector)
		},
		toggleAccordion() {
			this.isOpened = !this.isOpened;
		}
	}
}
</script>
