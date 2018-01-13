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
		font-size: 0.4rem;
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
	width: 100%;
	display: flex;
	span {
		display: inline-block;
	}
	> label {
		flex: 1;
		i, span {
			vertical-align: bottom;
			vertical-align: -webkit-baseline-middle;
		}
	}
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
		font-size: 0.35555rem;
		.content {
			margin-bottom: 4%;
			> h3 {
				color: #000;
				font-size: 0.55555rem;
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
						<f7-list-item radio name="my-radio" value="1" title="综合排序" @click="closeAccordion('.sort', 1)" checked></f7-list-item>
						<f7-list-item radio name="my-radio" value="2" title="距离最近" @click="closeAccordion('.sort', 2)"></f7-list-item>
						<f7-list-item radio name="my-radio" value="3" title="评价最好" @click="closeAccordion('.sort', 3)"></f7-list-item>
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
							<f7-label>商家类别</f7-label>
							<div class="radio-box">
								<label for="breakfast">
									<input type="radio" name="category" id="breakfast" hidden checked>
									<i class="icon-radio"></i>
									<span>早餐</span>
								</label>
								<label for="fastfood">
									<input type="radio" name="category" id="fastfood" hidden>
									<i class="icon-radio"></i>
									<span>快餐</span>
								</label>
								<label for="drinks">
									<input type="radio" name="category" id="drinks" hidden>
									<i class="icon-radio"></i>
									<span>饮品</span>
								</label>
							</div>
						</f7-list-item>
						<f7-list-item>
							<f7-label>价格区间(元)</f7-label>
							<f7-input type="text" placeholder="上限"/>
							<span class="sline">——</span>
							<f7-input type="text" placeholder="下限"/>
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

		<!-- 商家列表 -->
		<ul v-if="list.length > 0" class="rt-list" style="margin-top: 40px;">
			<li v-for="item in list" :key="item.restaurant_id" @click="jumpTo('/shoppingCart/')">
				<f7-grid class="rt-list-grid">
					<f7-col width="30" class="aside">
						<img :src="item.image" />
					</f7-col>
					<f7-col width="70">
						<f7-grid>
							<f7-col width="70" class="content">
								<h3>{{ item.restaurant_name }}</h3>
								<p><span class="rating">{{ calcRate(item.numRatings || 2) }}</span>月售{{ item.recent_order_num }}单</p>
								<p><span>起送￥{{ item.deliver_amount }}</span><span class="agent-fee">配送￥{{ item.agent_fee }}</span></p>
								<p><f7-badge>折</f7-badge>满30元减5</p>
							</f7-col>
							<f7-col width="30" class="tip">
								<p>{{ item.distance + 'km' }}</p>
								<p>{{ item.deliver_spent }}分钟</p>
							</f7-col>
						</f7-grid>
					</f7-col>
				</f7-grid>
			</li>
		</ul>

		<p v-else style="margin-top: 50px; text-align: center">暂时没有该类别商家~</p>
	</f7-page>
</template>


<script>
import axios from 'axios'
export default {
	data() {
		return {
			isOpened: false,
			list: [],
			category: ''
		}
	},
	created() {
		// 查看this实例可以发现，DOM7($$)、framework7($f7)实例已经注册在原型上
		let param = this.$route.query;
		param.class ? this.loadClass() : param.keyword ? this.loadMixQuery() : this.loadList();
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
		closeAccordion(selector, order_by) {
			this.$f7.accordionClose(selector)
			this.loadList(order_by)
		},
		toggleAccordion() {
			this.isOpened = !this.isOpened;
		},
		loadMixQuery() {
			axios.get(this.$store.state.global.host + '/restaurant/query/restaurant_foods',
				{
					params: { keyword: this.$route.query.keyword }
				}
			).then(res => {
				this.list = res.data;
			}).catch(err => console.log(err))
		},
		loadList(order_by) {
			axios.get(this.$store.state.global.host + '/restaurant',
				{
					params: {
						category: [this.$route.query.category],
						order_by: order_by || 1
					}
				}
			).then(res => {
				this.list = res.data;
			}).catch(err => console.log(err))
		},
		loadClass() {
			axios.get(this.$store.state.global.host + '/restaurant/class', {
				params: { classification: this.$route.query.class }
			}).then(res => {
				this.list = res.data;
			}).catch(err => console.log(err))
		}
		// filterList() {
		// 	axios.get('/', {
		// 		params: {

		// 		}
		// 	}).then(res => {
				
		// 	}).catch(err => console.log(err))
		// }
	}
}
</script>
