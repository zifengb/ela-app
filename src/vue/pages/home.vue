<style lang="scss">
.ad-searchbar input[type=search] {
	background-color: #F0F0F0;
	font-size: 0.4rem;
}
</style>

<style lang="scss" scoped>
.searchbar {
	background-color: #fff;
}
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
		<!-- 头部搜索 start -->
		<f7-searchbar
			class="ad-searchbar"
			cancel-link="搜索"
			search-list="#search-list"
			placeholder="搜索商家、商品名称"
			:clear-button="active"
			@click:cancel="onClear"
			@input="onInput"
		></f7-searchbar>
		<!-- 头部搜索 end -->

		<!-- 商品分类grid start -->
		<div class="category">
			<f7-grid>
				<f7-col class="gallery" width="33">
					<div class="gallery-grid" @click="jumpTo('/restaurants/?category=1')">
						<img src="../../assets/images/1.jpeg" alt="早餐">
					</div>
					<span>早餐</span>
				</f7-col>
				<f7-col class="gallery" width="33">
					<div class="gallery-grid" @click="jumpTo('/restaurants/?category=2')">
						<img src="../../assets/images/2.jpeg" alt="快餐">
					</div>
					<span>快餐</span>
				</f7-col>
				<f7-col class="gallery" width="33">
					<div class="gallery-grid" @click="jumpTo('/restaurants/?category=3')">
						<img src="../../assets/images/3.jpeg" alt="甜品饮品">
					</div>
					<span>甜品饮品</span>
				</f7-col>
				<f7-col class="gallery" width="33">
					<div class="gallery-grid" @click="jumpTo('/restaurants/?category=4')">
						<img src="../../assets/images/4.jpeg" alt="特色菜系">
					</div>
					<span>特色菜系</span>
				</f7-col>
				<f7-col class="gallery" width="33">
					<div class="gallery-grid" @click="jumpTo('/restaurants/?category=5')">
						<img src="../../assets/images/5.jpeg" alt="果蔬生鲜">
					</div>
					<span>果蔬生鲜</span>
				</f7-col>
				<f7-col class="gallery" width="33">
					<div class="gallery-grid" @click="jumpTo('/restaurants/?category=6')">
						<img src="../../assets/images/6.jpeg" alt="新店优惠">
					</div>
					<span>新店优惠</span>
				</f7-col>
			</f7-grid>
		</div>
		<!-- 商品分类grid end -->

		<!-- swiper start -->
		<f7-swiper pagination :params="{speed:500, slidesPerView: 1, spaceBetween: 0}">
			<f7-swiper-slide>
				<img style="width: 100%; height: 160px" src="../../assets/images/pic-dl.png" alt="" @click="jumpTo('/infoList/')" />
			</f7-swiper-slide>
			<f7-swiper-slide>
				<img style="width: 100%; height: 160px" src="../../assets/images/pic-dl.png" alt="" @click="jumpTo('/infoList/')" />
			</f7-swiper-slide>
			<f7-swiper-slide>
				<img style="width: 100%; height: 160px" src="../../assets/images/pic-dl.png" alt="" @click="jumpTo('/infoList/')" />
			</f7-swiper-slide>
		</f7-swiper>
		<!-- swiper end -->

		<!-- 特惠活动grid start -->
		<f7-block-title>特惠活动</f7-block-title>
		<f7-grid no-gutter>
			<f7-col width="50">
				<img src="../../assets/images/raw_1509897607.jpeg" alt="" @click="jumpTo('/restaurants/?class=1')" />
			</f7-col>
			<f7-col width="50">
				<img src="../../assets/images/raw_1509897626.gif" alt="" @click="jumpTo('/restaurants/?class=2')" />
			</f7-col>
			<f7-col width="33">
				<img src="../../assets/images/raw_1.gif" alt="" @click="jumpTo('/restaurants/?class=3')" />
			</f7-col>
			<f7-col width="33">
				<img src="../../assets/images/raw_2.gif" alt="" @click="jumpTo('/restaurants/?class=4')" />
			</f7-col>
			<f7-col width="33">
				<img src="../../assets/images/raw_3.gif" alt="" @click="jumpTo('/restaurants/?class=5')" />
			</f7-col>
		</f7-grid>
		<!-- 特惠活动grid end -->

		<!-- 商家列表 start -->
		<f7-block-title>附近商家</f7-block-title>
		<ul class="rt-list">
			<li v-for="item in restaurants" :key="item.restaurant_id" @click="jumpTo('/shoppingCart/?id='+ item.restaurant_id)">
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
		<!-- 商家列表 end -->

		<f7-list id="search-list"></f7-list>
	</f7-page>
</template>


<script>
import axios from 'axios'
// import { categories, sliders } from 'assets/js/home.js'
export default {
	data() {
		return {
			active: true,
			categories: [],
			sliders: [],
			restaurants: [],
			keyword: ''
		}
	},
	created() {
		// this.categories = categories;
		// this.sliders = sliders;
		this.loadRestaurants();
	},
	methods: {
		calcRate(rate) {
			return "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
		},
		jumpTo(url) {
			let router = this.$router || this.$f7.mainView.router;
			router.loadPage(url);
		},
		loadRestaurants() {
			axios.get(this.$store.state.global.host + '/restaurant/range').then(res => {
				this.restaurants = res.data;
			}).catch(err => console.log(err))
		},
		onClear: function (event) {
			let router = this.$router || this.$f7.mainView.router;
			router.loadPage('/restaurants/?keyword=' + this.keyword);
		},
		onInput(e) {
			this.keyword = e;
		}
	}
}
</script>
