<style lang="scss" scoped>
.main {
	background-color: #fff;
}
.tabs-links {
	position: fixed;
    top:6%;
	display: flex;
	align-items: center;
    width: 100%;
	height: 6%;
	background-color: #fff;
	text-align: center;
	border-bottom: 1px solid #DEDEDE;
    z-index:99;
	a {
		color: #333;
		width: 100%;
		font-size: 0.4rem;
		flex: 1;
	}
	.active-line {
		position: absolute;
		left: 10%;
		bottom: 0;
		width: 30%;
		border-top: 0.10003rem solid #F5E000;
		transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	.right {
		left: 60%;
	}
	.phone-call {
		flex: 2;
		text-align: right;
		transform: translateX(-10%);
	}
}
#s-tab-2 .block-title {
	margin: 0;
	padding: 3% 0 3% 4%;
	background-color: #F0F0F2;
	& + .list-block {
		margin: 0;
	}
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
.tabs-content {
    padding-top: 10%;
}

// 种类
.types {
    position: fixed;
    .item {
        flex: 1;
        display: flex;
        box-sizing: border-box;
        font-size: 0.4rem;
        padding: 0.4rem;
        border-bottom: 1px solid #DEDEDE;
        background: #EDEFF0;
	}
    .active {
        background: #FFFFFF;
    }
}
// 商品
.products {
    .item {
        box-sizing: border-box;
        font-size: 0.4rem;
        margin: 0.3rem;
        margin-right:0;
        padding-bottom: 0.3rem;
        background: #FFFFFF;
        border-bottom: 1px solid #DEDEDE;
        .pic {
            padding-right: 0.3rem;
        }
        .content {
            .title{
                padding-bottom: 0.1rem;
            }
            .description{
                padding-bottom: 0.1rem;
                font-size: 0.1rem;
                color: #C0C0C0;
            }
            .sales{
                padding-bottom: 0.1rem;
                font-size: 0.1rem;
                color: #878787;
            }
            .zan{
                padding-bottom: 0.1rem;
                font-size: 0.1rem;
                color: #878787;
            }
            .money{
                font-size: 0.45rem;
                color: #E72D34;
            }
            .plus{
                color: #FFEB12;
                font-size: 0.8rem;
                padding-right: 0.5rem;
            }
        }
    }
		&:last-of-type {
			margin-bottom: 46px;
		}
}

// 底部按钮条
.bottom-tab {
	border: 1px solid #dedede;
	box-sizing: border-box;
	position: fixed;
	bottom: 0px;
	z-index: 101;
	width: 100%;
	background-color: #ffffff;
	.cart {
		position: relative;
		.button-num {
			position: absolute;
			width: .5rem;
			height: .5rem;
			border-radius: .5rem;
			background-color: red;
			top: -0.9rem;
			right: 0.2rem;
			z-index: 1;
			.num {
				display:flex;
				flex:1;
			}
		}
		.button-cart {
			position: absolute;
			top: -0.8rem;
			width: 1.5rem;
			height: 1.5rem;
			border-radius: 1.5rem;
			background-color: #ffec21;
			left: 50%;
			transform: translateX(-50%);
			.icon {
				display:flex;
				flex:1;
				font-size: 1rem;
			}
		}
	}
	.content {
		display: flex;
		flex: 1;
		height: 1.5rem;
		.price {
			color: #E73339;
			font-size: 0.6rem;
		}
		.tip {
			font-size: 0.1rem;
			color: #878787;
		}
	}
	.button-sum {
		display: flex;
		flex: 1;
		height: 1.5rem;
		background-color: #ACE22E;
		font-size: 0.4rem;
		color: #526f0e;
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
.cart-detail {
	position:fixed;
	bottom:0px;
	width:100%;
	background-color:#F9F9F9;
	z-index:100;
	padding-bottom: 100px;
	.title {
		height: 1.5rem;
		background-color: #F5F5F5;
		.product-list {
			font-size: 0.4rem;
			padding-left: 0.4rem
		}
		.clear-cart {
			font-size: 0.4rem;
			padding-right: 0.4rem
		}
	}
	.item {
		height: 1.5rem;
		background-color:#F9F9F9;
		border-bottom: 1px solid #eee;
		.product-item {
			font-size: 0.4rem;
			padding-left: 0.4rem
		}
		.product-item-description {
			font-size: 0.1rem;
    		color: #C0C0C0;
			padding-left: 0.4rem
		}
		.price {
			font-size: 0.4rem;
		}
		.plus {
			font-size: 0.8rem;
			color: #ffec21;
		}
		.num {
			font-size: 0.4rem;
		}
		.minus {
			font-size: 0.8rem;
			color: #ffec21;
		}
	}
}
.cart-detail-active {
	bottom: 0px;
}
.mask {
	position: fixed;
    bottom: 0px;
    top: 0px;
    left: 0px;
    right: 0px;
    background-color: #131313;
    z-index: 99;
    opacity: 0.4;
}
</style>

<template>
	<f7-page class="main">
		<f7-navbar :title="resInfo.restaurant_name" back-link="Back" sliding></f7-navbar>

		<!-- tab links -->
		<div class="tabs-links">
			<f7-link tab-link="#s-tab-1" class="tab-link1" @click="tabActive(1)">点菜</f7-link>
			<f7-link tab-link="#s-tab-2" class="tab-link2" @click="tabActive(2)">商家</f7-link>
			<div ref="line" class="active-line"></div>
		</div>
		<!-- tab content -->
		<f7-tabs class="tabs-content">
			<f7-tab id="s-tab-1" active>
                <f7-row no-gap>
                    <f7-col class="types flex-column" width="25">
                        <div class="item center" :class="{ 'active': value.isActived }" v-for="(value, key) in types" :key="key"  @click="changeType(key)">
                            <span>{{ value.name }}</span>
                        </div>
                    </f7-col>
                    <f7-col class="products" width="75" style="margin-left:25%;" v-for="item in foods" :key="item.id">
                        <f7-row no-gap class="item">
                            <f7-col width="25" class="pic">
                                <img :src="item.image" />
                            </f7-col>
                            <f7-col width="75" class="content">
                                <p class="title">{{ item.food_name }}</p>
                                <p class="description">{{ item.description }}</p>
                                <p><span class="sales">{{ '月售' + item.recent_popularity }}</span><span class="zan">{{ '赞' + item.recent_rating }}</span></p>
                                <div class="flex-row">
                                    <p class="money row-center-left span1">{{ '￥' + item.price }}</p>
                                    <p class="plus row-center-right span1" @click="addItem(item)"><i class="la la-plus-circle"></i></p>
                                </div>
                            </f7-col>
                        </f7-row>
                    </f7-col>
                </f7-row>
			</f7-tab>
			<f7-tab id="s-tab-2">
				<!-- 订单信息 start -->
				<f7-list>
					<f7-list-item class="phone">
						<f7-label><i class="la la-phone"></i> 商家电话</f7-label>
						<span>{{ resInfo.mobile }}</span>
					</f7-list-item>
					<f7-list-item class="location">
						<p><i class="la la-map-marker"></i>{{ resInfo.address_text }}</p>
					</f7-list-item>
				</f7-list>
				<f7-list>
					<f7-list-item class="time">
						<f7-label><i class="la la-clock-o"></i> 配送时间</f7-label>
						<span>{{ resInfo.deliver_times }}</span>
					</f7-list-item>
					<f7-list-item class="service">
						<f7-label><i class="la la-send-o"></i> 配送服务</f7-label>
						<span>由商家提供配送服务</span>
					</f7-list-item>
				</f7-list>
				<!-- <f7-list>
					<f7-list-item link="/order-history/">
						<f7-label>商家评价</f7-label>
						<f7-link></f7-link>
					</f7-list-item>
				</f7-list>
				<f7-list>
					<f7-list-item link="/send-order/">
						<f7-label>发布评价</f7-label>
						<f7-link></f7-link>
					</f7-list-item>
				</f7-list> -->
				<!-- 订单信息 end -->

			</f7-tab>
		</f7-tabs>

		<!-- toolbar / bottom-tab -->
		<div class="bottom-tab" v-show="isProduct">
			<f7-row no-gap>
				<f7-col class="cart" width="20">
					<div class="button-num flex-row"><span class="num center">{{ cartLen }}</span></div>
					<div class="button-cart flex-row" @click="open">
						<i class="icon la la-shopping-cart center"></i>
					</div>
				</f7-col>
				<f7-col class="flex-row" width="50">
					<div class="content row-center-left">
						<div class="flex-column">
							<p class="price column-center-top">{{ '￥' + cart.total }}</p>
							<p class="tip column-center-top">{{ '另需配送费 ￥' + agent_fee }}</p>
						</div>
					</div>
				</f7-col>
				<f7-col class="flex-row" width="30">
					<span class="button-sum center" @click="addCart">
						去结算
					</span>
				</f7-col>
			</f7-row>
		</div>
		<f7-toolbar tabbar labels class="toolbar" v-show="!isProduct">
			<f7-link href="/">
				<i class="la la-home"></i> <span>首页</span>
			</f7-link>
			<f7-link href="/order/">
				<i class="la la-navicon"></i> <span>订单</span>
			</f7-link>
			<f7-link href="/user/">
				<i class="la la-user"></i> <span>我的</span>
			</f7-link>
		</f7-toolbar>

		<!-- cart detail -->
		<div class="cart-detail" v-show="isOpen">
			<div class="flex-row title">
				<div class="row-center-left span1 product-list">已选商品</div>
				<div class="row-center-right span1 clear-cart" @click="clearCart">清空购物车</div>
			</div>
			<div class="flex-row item" v-for="item in cart.cartItems" :key="item.id">
				<div class="flex-column span2">
					<div class="column-center-top span1 product-item">{{ item.food_name }}</div>
					<div class="column-center-top span1 product-item-description">含{{ item.amount }}份原件商品</div>
				</div>
				<div class="row-center-left span1 price">{{ '￥' + item.price }}</div>
				<div class="flex-row span1" style="padding-right: 0.4rem">
					<span class="span1 center minus" @click="addItem(item, -1)"><i class="la la-minus-circle"></i></span>
					<span class="span1 center num">{{ item.amount }}</span>
					<span class="span1 center plus" @click="addItem(item)"><i class="la la-plus-circle"></i></span>
				</div>
			</div>
		</div>
		<div class="mask" v-if="isOpen" @click="close">
		</div>
	</f7-page>
</template>


<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
            flag: false,
            types: [
                {
					id: 1,
                    name: '美食1',
                    isActived: true
                },
                {
					id: 2,
                    name: '美食2',
                    isActived: false
                },
                {
					id: 3,
                    name: '美食3',
                    isActived: false
                },
                {
					id: 4,
                    name: '美食4',
                    isActived: false
                },
                {
					id: 5,
                    name: '美食5',
                    isActived: false
                }
			],
			foods: [
				{
					id: 1,
					food_name: '红烧排骨套餐',
					image: '../../assets/images/pic-dl.png',
					description: '一个主菜加两个配菜',
					recent_popularity: 123,
					recent_rating: 12,
					price: 15,
					packing_fee: 5,
					stock: 200
				},
				{
					id: 2,
					food_name: '红烧排骨套餐',
					image: '../../assets/images/pic-dl.png',
					description: '一个主菜加两个配菜',
					recent_popularity: 123,
					recent_rating: 12,
					price: 15,
					packing_fee: 5,
					stock: 200
				},
				{
					id: 3,
					food_name: '红烧排骨套餐',
					image: '../../assets/images/pic-dl.png',
					description: '一个主菜加两个配菜',
					recent_popularity: 123,
					recent_rating: 12,
					price: 15,
					packing_fee: 5,
					stock: 200
				},
				{
					id: 5,
					food_name: '红烧排骨套餐',
					image: '../../assets/images/pic-dl.png',
					description: '一个主菜加两个配菜',
					recent_popularity: 123,
					recent_rating: 12,
					price: 15,
					packing_fee: 5,
					stock: 200
				},
				{
					id: 6,
					food_name: '红烧排骨套餐',
					image: '../../assets/images/pic-dl.png',
					description: '一个主菜加两个配菜',
					recent_popularity: 123,
					recent_rating: 12,
					price: 15,
					packing_fee: 5,
					stock: 200
				},
				{
					id: 7,
					food_name: '红烧排骨套餐',
					image: '../../assets/images/pic-dl.png',
					description: '一个主菜加两个配菜',
					recent_popularity: 123,
					recent_rating: 12,
					price: 15,
					packing_fee: 5,
					stock: 200
				},
				{
					id: 8,
					food_name: '红烧排骨套餐',
					image: '../../assets/images/pic-dl.png',
					description: '一个主菜加两个配菜',
					recent_popularity: 123,
					recent_rating: 12,
					price: 15,
					packing_fee: 5,
					stock: 200
				}
			],
			agent_fee: 3,
			cart: {},
			resInfo: {},
			isProduct: true,
			isOpen: false
		}
	},
	created() {
		this.HOST = this.$store.state.global.host;
		this.userInfo = this.$store.state.userAuth.userInfo;
		this.$store.commit('global/hideToolbar')
		this.init()
	},
	computed: {
		cartLen() {
			let sum = 0,
				cartItems = this.cart.cartItems;
			if (cartItems && cartItems.length > 0) {
				for (let i = 0; i < cartItems.length; i++) {
					let cur = cartItems[i];
					sum += cur.amount;
				}
				
			} else {
				sum = 0
			}
			return sum;
		}
	},
	methods: {
		init() {
			this.loadResInfo()
			this.loadMenu()
			this.loadCart()
		},
		loadMenu() {
			// this.$f7route.query.id
			axios.get(this.HOST + '/restaurant/' + this.$f7route.query.id + '/menu').then(res => {
				this.types = res.data.map((el, i) => 
					({
						id: el.id,
						name: el.name,
						isActived: i === 0
					})
				);

				this.loadFood()
			}).catch(err => console.log(err))
		},
		loadFood(id) {
			// this.$f7route.query.id
			axios.get(this.HOST + '/food/category/' + (id || this.types[0].id) + '/foods').then(res => {
				this.foods = res.data;
			}).catch(err => console.log(err))
		},
		loadCart() {
			this.$store.commit('cart/emptyItem')
			if (!this.userInfo) {
				this.cart = this.$store.state.cart.cartObj;
				return ;
			}
			axios.get(this.HOST + '/cart', {
				params: { user_id: this.userInfo.userId }
			}).then(res => {
				this.cart = res.data || this.$store.state.cart.cartObj;
				this.$store.commit('cart/initCart', this.cart)
			}).catch(err => console.log(err))
		},
		loadResInfo() {
			// this.$f7route.query.id
			axios.get(this.HOST + '/restaurant/' + this.$f7route.query.id).then(res => {
				this.resInfo = res.data;
			}).catch(err => console.log(err))
		},
		open() {
			this.isOpen = true
		},
		close() {
			this.isOpen = false
		},
		tabActive(index) {
			if (index === 1) {
				this.$$('.active-line').removeClass('right')
				this.isProduct = true
			} else {
				this.$$('.active-line').addClass('right')
				this.isProduct = false
			}
		},
        changeType(key) {
            for (let i = 0; i < this.types.length; i++) {
                 this.types[i].isActived = false;
            }
            this.types[key].isActived = true;
            this.loadFood(this.types[key].id)
		},
		addItem(item, n = 1) {	// 添加购物车项
			let cartItem = {
				food_id: item.food_id,
				food_name: item.food_name,
				amount: n,
				price: item.price
			}
			this.$store.commit('cart/saveItem', cartItem)
		},
		addCart() {	// 添加购物车
			let userInfo = this.$store.state.userAuth.userInfo
			if (!userInfo) {
				alert('先登录才能下单~')
				return;
			}
			if (this.cart.cartItems.length ===0 ) {
				alert('购物车为空~，请先添加商品')
				return;
			}
			this.$store.state.cart.cartObj.user_id = userInfo.userId
			axios.post(this.HOST + '/cart/save', this.cart).then(res => {
				this.orderInstance()
				res.status === 200 && this.$f7router.navigate('/payoff/')
			}).catch(err => console.log(err))
		},
		clearCart() {
			this.$store.commit('cart/emptyItem')
		},
		showToolbar() {
			this.$store.commit('global/showToolbar')
		},
		orderInstance() {
			let obj = Object.assign({
				deliverFee: 3,
				detail: this.$store.state.cart.cartObj,
				restaurantId: this.resInfo.restaurant_id,
				restaurantName: this.resInfo.restaurant_name,
				deliveryGeo: "150,200,300,60",
				restaurantImagePath: this.resInfo.image
			}, this.$store.state.userAuth.userInfo)
			this.$store.commit('order/assign', obj)
		}
	}
}
</script>
