<style lang="scss" scoped>
.main {
	background-color: #fff;
}
.header {
	width: 94%;
	margin: 2% auto 4%;
	> p {
		font-size: 0.4rem;
		margin-bottom: 2%;
	}
}
.search-bar {
	text-align: center;
	border: 1px solid #BBB;
	> input {
		border: none;
		width: 40%;
		height: 100%;
		min-height: 30px;
		text-align: center;
	}
}
.category {
	margin: 4% 0;
}
.gallery {
	display: block;
	text-align: center;
	.gallery-grid {
		margin: 0 auto;
		width: 50%;
		height: 50%;
		> img {
			border-radius: 50%;
		}
	}
}
.rt-list {
	color: #878787;
	border-top: 1px solid #DEDEDE;
	margin-bottom: 50px;
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
.toolbar {
	i {
		font-size: 0.6rem;
	}
	span {
		font-size: 0.3rem;
	}
}
</style>


<template>
	<f7-page class="main">

		<f7-navbar title="饿了吧" back-link="Back" sliding></f7-navbar>

		<!-- 头部搜索 start -->
		<div class="header">
			<p><i class="la la-map-marker"></i>广州某地</p>
			<form class="search-bar">
				<i class="la la-search la-rotate-270"></i><input type="text" placeholder="搜索商家、商品名称">
			</form>
		</div>
		<!-- 头部搜索 end -->

		<!-- 商品分类grid start -->
		<div class="category">
			<f7-grid>
				<f7-col class="gallery" width="33" v-for="(item, index) in categories" :key="index">
					<div class="gallery-grid" @click="jumpTo">
						<img :src="item.url" :alt="item.text">
					</div>
					<span>{{ item.text }}</span>
				</f7-col>
			</f7-grid>
		</div>
		<!-- 商品分类grid end -->

		<!-- swiper start -->
		<f7-swiper pagination :params="{speed:500, slidesPerView: 1, spaceBetween: 0}">
			<f7-swiper-slide v-for="(item, index) in sliders" :key="index">
				<img style="width: 100%; height: 160px" :src="item" alt="" />
			</f7-swiper-slide>
		</f7-swiper>
		<!-- swiper end -->

		<!-- 特惠活动grid start -->
		<f7-block-title>特惠活动</f7-block-title>
		<f7-grid no-gutter>
			<f7-col width="50">
				<img src="../../assets/images/pic-dl.png" alt="" />
			</f7-col>
			<f7-col width="50">
				<img src="../../assets/images/pic-dl.png" alt="" />
			</f7-col>
			<f7-col width="33">
				<img src="../../assets/images/pic-dl.png" alt="" />
			</f7-col>
			<f7-col width="33">
				<img src="../../assets/images/pic-dl.png" alt="" />
			</f7-col>
			<f7-col width="33">
				<img src="../../assets/images/pic-dl.png" alt="" />
			</f7-col>
		</f7-grid>
		<!-- 特惠活动grid end -->

		<!-- 商家列表 start -->
		<f7-block-title>附近商家</f7-block-title>
		<ul class="rt-list">
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
		<!-- 商家列表 end -->

		<f7-toolbar tabbar labels class="toolbar">
			<f7-link href="#">
				<i class="la la-home"></i> <span>首页</span>
			</f7-link>
			<f7-link href="/order/">
				<i class="la la-navicon"></i> <span>订单</span>
			</f7-link>
			<f7-link href="/user/">
				<i class="la la-user"></i> <span>我的</span>
			</f7-link>
		</f7-toolbar>
	</f7-page>
</template>


<script>
import { categories, sliders } from 'assets/js/home.js'
export default {
	data() {
		return {
			categories: [],
			sliders: []
		}
	},
	created() {
		this.categories = categories;
		this.sliders = sliders;
	},
	methods: {
		calcRate(rate) {
			return "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
		},
		jumpTo() {
			this.$router.loadPage('/restaurants/');
		}
	}
}
</script>
