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
#tab-2 .block-title {
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
		<f7-navbar title="墨刀餐厅xxx" back-link="Back" sliding @back-click="showToolbar"></f7-navbar>
		<div class="tabs-links">
			<f7-link tab-link="#tab-1" class="tab-link1" @click="tabActive(1)">点菜</f7-link>
			<f7-link tab-link="#tab-2" class="tab-link2" @click="tabActive(2)">商家</f7-link>
			<div ref="line" class="active-line"></div>
		</div>
		<f7-tabs class="tabs-content">
			<f7-tab id="tab-1" active>
                <f7-grid no-gutter>
                    <f7-col class="types flex-column" width="25">
                        <div class="item center" :class="{ 'active': value.isActived }" v-for="(value, key) in types" :key="key"  @click="changeType(key)">
                            <span>{{ value.title }}</span>
                        </div>
                    </f7-col>
                    <f7-col class="products" width="75" style="margin-left:25%;">
                        <f7-grid no-gutter class="item">
                            <f7-col width="25" class="pic">
                                <img src="../../assets/images/pic-dl.png" />
                            </f7-col>
                            <f7-col width="75" class="content">
                                <p class="title">红烧排骨套餐</p>
                                <p class="description">一个主菜加两个配菜</p>
                                <p><span class="sales">月售429</span><span class="zan">赞19</span></p>
                                <div class="flex-row">
                                    <p class="money row-center-left span1">￥15</p>
                                    <p class="plus row-center-right span1" @click="add"><i class="la la-plus-circle"></i></p>
                                </div>
                            </f7-col>
                        </f7-grid>
                        <f7-grid no-gutter class="item">
                            <f7-col width="25" class="pic">
                                <img src="../../assets/images/pic-dl.png" />
                            </f7-col>
                            <f7-col width="75" class="content">
                                <p class="title">红烧排骨套餐</p>
                                <p class="description">一个主菜加两个配菜</p>
                                <p><span class="sales">月售429</span><span class="zan">赞19</span></p>
                                <div class="flex-row">
                                    <p class="money row-center-left span1">￥15</p>
                                    <p class="plus row-center-right span1" @click="add"><i class="la la-plus-circle"></i></p>
                                </div>
                            </f7-col>
                        </f7-grid>
                        <f7-grid no-gutter class="item">
                            <f7-col width="25" class="pic">
                                <img src="../../assets/images/pic-dl.png" />
                            </f7-col>
                            <f7-col width="75" class="content">
                                <p class="title">红烧排骨套餐</p>
                                <p class="description">一个主菜加两个配菜</p>
                                <p><span class="sales">月售429</span><span class="zan">赞19</span></p>
                                <div class="flex-row">
                                    <p class="money row-center-left span1">￥15</p>
                                    <p class="plus row-center-right span1" @click="add"><i class="la la-plus-circle"></i></p>
                                </div>
                            </f7-col>
                        </f7-grid>
						<f7-grid no-gutter class="item">
                            <f7-col width="25" class="pic">
                                <img src="../../assets/images/pic-dl.png" />
                            </f7-col>
                            <f7-col width="75" class="content">
                                <p class="title">红烧排骨套餐</p>
                                <p class="description">一个主菜加两个配菜</p>
                                <p><span class="sales">月售429</span><span class="zan">赞19</span></p>
                                <div class="flex-row">
                                    <p class="money row-center-left span1">￥15</p>
                                    <p class="plus row-center-right span1" @click="add"><i class="la la-plus-circle"></i></p>
                                </div>
                            </f7-col>
                        </f7-grid>
						<f7-grid no-gutter class="item">
                            <f7-col width="25" class="pic">
                                <img src="../../assets/images/pic-dl.png" />
                            </f7-col>
                            <f7-col width="75" class="content">
                                <p class="title">红烧排骨套餐</p>
                                <p class="description">一个主菜加两个配菜</p>
                                <p><span class="sales">月售429</span><span class="zan">赞19</span></p>
                                <div class="flex-row">
                                    <p class="money row-center-left span1">￥15</p>
                                    <p class="plus row-center-right span1" @click="add"><i class="la la-plus-circle"></i></p>
                                </div>
                            </f7-col>
                        </f7-grid>
                        <f7-grid no-gutter class="item">
                            <f7-col width="25" class="pic">
                                <img src="../../assets/images/pic-dl.png" />
                            </f7-col>
                            <f7-col width="75" class="content">
                                <p class="title">红烧排骨套餐</p>
                                <p class="description">一个主菜加两个配菜</p>
                                <p><span class="sales">月售429</span><span class="zan">赞19</span></p>
                                <div class="flex-row">
                                    <p class="money row-center-left span1">￥15</p>
                                    <p class="plus row-center-right span1" @click="add"><i class="la la-plus-circle"></i></p>
                                </div>
                            </f7-col>
                        </f7-grid>
                    </f7-col>
                </f7-grid>
			</f7-tab>
			<f7-tab id="tab-2">
				<!-- 订单信息 start -->
				<f7-list>
					<f7-list-item class="phone">
						<f7-label>订单号码</f7-label>
						<span>12312312</span>
					</f7-list-item>
					<f7-list-item class="location">
						<f7-label>地址</f7-label>
						<span>广东工业大学</span>
					</f7-list-item>
				</f7-list>
				<f7-list>
					<f7-list-item class="time">
						<f7-label>配送时间</f7-label>
						<span>08:30-22:00</span>
					</f7-list-item>
					<f7-list-item class="service">
						<f7-label>配送服务</f7-label>
						<span>又商家提供配送服务</span>
					</f7-list-item>
				</f7-list>
				<f7-list>
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
				</f7-list>
				<!-- 订单信息 end -->

			</f7-tab>
		</f7-tabs>
		<div class="bottom-tab" v-show="isProduct">
			<f7-grid no-gutter>
				<f7-col class="cart" width="20">
					<div class="button-num flex-row"><span class="num center">1</span></div>
					<div class="button-cart flex-row" @click="open">
						<i class="icon la la-shopping-cart center"></i>
					</div>
				</f7-col>
				<f7-col class="flex-row" width="50">
					<div class="content row-center-left">
						<div class="flex-column">
							<p class="price column-center-top">￥15</p>
							<p class="tip column-center-top">另需配送费￥3</p>
						</div>
					</div>
				</f7-col>
				<f7-col class="flex-row" width="30">
					<span class="button-sum center">
						去结算
					</span>
				</f7-col>
			</f7-grid>
		</div>
		<f7-toolbar tabbar labels class="toolbar" v-show="!isProduct">
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
		<div class="cart-detail" v-show="isOpen">
			<div class="flex-row title">
				<div class="row-center-left span1 product-list">已选商品</div>
				<div class="row-center-right span1 clear-cart">清空购物车</div>
			</div>
			<div class="flex-row item">
				<div class="flex-column span2">
					<div class="column-center-top span1 product-item">招牌磨刀牛腩</div>
					<div class="column-center-top span1 product-item-description">含1份原件商品</div>
				</div>
				<div class="row-center-left span1 price">￥15</div>
				<div class="flex-row span1" style="padding-right: 0.4rem">
					<span class="span1 center plus"><i class="la la-plus-circle"></i></span>
					<span class="span1 center num">1</span>
					<span class="span1 center minus"><i class="la la-minus-circle"></i></span>
				</div>
			</div>
			<div class="flex-row item">
				<div class="flex-column span2">
					<div class="column-center-top span1 product-item">招牌磨刀牛腩</div>
					<div class="column-center-top span1 product-item-description">含1份原件商品</div>
				</div>
				<div class="row-center-left span1 price">￥15</div>
				<div class="flex-row span1" style="padding-right: 0.4rem">
					<span class="span1 center plus"><i class="la la-plus-circle"></i></span>
					<span class="span1 center num">1</span>
					<span class="span1 center minus"><i class="la la-minus-circle"></i></span>
				</div>
			</div>
			<div class="flex-row item">
				<div class="flex-column span2">
					<div class="column-center-top span1 product-item">招牌磨刀牛腩</div>
					<div class="column-center-top span1 product-item-description">含1份原件商品</div>
				</div>
				<div class="row-center-left span1 price">￥15</div>
				<div class="flex-row span1" style="padding-right: 0.4rem">
					<span class="span1 center plus"><i class="la la-plus-circle"></i></span>
					<span class="span1 center num">1</span>
					<span class="span1 center minus"><i class="la la-minus-circle"></i></span>
				</div>
			</div>
			<div class="flex-row item">
				<div class="flex-column span2">
					<div class="column-center-top span1 product-item">招牌磨刀牛腩</div>
					<div class="column-center-top span1 product-item-description">含1份原件商品</div>
				</div>
				<div class="row-center-left span1 price">￥15</div>
				<div class="flex-row span1" style="padding-right: 0.4rem">
					<span class="span1 center plus"><i class="la la-plus-circle"></i></span>
					<span class="span1 center num">1</span>
					<span class="span1 center minus"><i class="la la-minus-circle"></i></span>
				</div>
			</div>
		</div>
		<div class="mask" v-if="isOpen" @click="close">
		</div>
	</f7-page>
</template>


<script>
export default {
	data() {
		return {
            flag: false,
            types: [
                {
                    title: '美食1',
                    isActived: true
                },
                {
                    title: '美食2',
                    isActived: false
                },
                {
                    title: '美食3',
                    isActived: false
                },
                {
                    title: '美食4',
                    isActived: false
                },
                {
                    title: '美食5',
                    isActived: false
                }
            ],
			number: 10,
			isProduct: true,
			isOpen: false
		}
	},
	created() {
		this.$store.commit('global/hideToolbar')
	},
	methods: {
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
		actionModal(f) {
			if (f === false) {
				this.flag = f;
			} else {
				this.flag = !this.flag
			}
		},
		popup() {
			this.flag = !this.flag;
        },
        changeType(key) {
            for (let i = 0; i < this.types.length; i++) {
                 this.types[i].isActived = false;
            }
            this.types[key].isActived = true;
            // var element = document.getElementById('box');
            // element.scrollIntoView({block: "center", behavior: "smooth"});
		},
		add() {
			console.log('add')
		},
		showToolbar() {
			this.$store.commit('global/showToolbar')
		}
	}
}
</script>
