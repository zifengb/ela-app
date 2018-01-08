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
</style>


<template>
	<f7-page class="main">
		<f7-navbar title="墨刀餐厅xxx" back-link="Back" sliding></f7-navbar>
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
                                    <p class="plus row-center-right span1"><i class="la la-plus-circle"></i></p>
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
                                    <p class="plus row-center-right span1"><i class="la la-plus-circle"></i></p>
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
                                    <p class="plus row-center-right span1"><i class="la la-plus-circle"></i></p>
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
                                    <p class="plus row-center-right span1"><i class="la la-plus-circle"></i></p>
                                </div>
                            </f7-col>
                        </f7-grid>
                    </f7-col>
                </f7-grid>
			</f7-tab>
			<f7-tab id="tab-2">
				<!-- 订单详情 start -->
				<f7-block-title class="block-title">订单详情</f7-block-title>
				<f7-list class="order-detail">
					<f7-list-item class="restaurant">
						<f7-grid class="inner-grid">
							<f7-col width="70">墨刀餐厅</f7-col>
							<f7-col width="30">非美团转送</f7-col>
						</f7-grid>
					</f7-list-item>
					<f7-list-item class="food-list">
						<f7-grid class="inner-grid">
							<!-- item -->
							<f7-col width="55">
								<f7-badge>折</f7-badge>
								菜式1
							</f7-col>
							<f7-col width="15">* 1</f7-col>
							<f7-col width="15">￥10</f7-col>
							<f7-col width="15">￥10</f7-col>
							<!-- item -->
							<!-- item -->
							<f7-col width="55">
								<f7-badge>折</f7-badge>
								菜式1
							</f7-col>
							<f7-col width="15">* 1</f7-col>
							<f7-col width="15">￥10</f7-col>
							<f7-col width="15">￥10</f7-col>
							<!-- item -->
							<!-- item -->
							<f7-col width="55">
								<f7-badge>折</f7-badge>
								菜式1
							</f7-col>
							<f7-col width="15">* 1</f7-col>
							<f7-col width="15">￥10</f7-col>
							<f7-col width="15">￥10</f7-col>
							<!-- item -->
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
					<f7-list-item class="final-fee">
						<f7-grid class="inner-grid">
							<f7-col width="70">
								<span>总计 ￥10</span>
								<span>优惠 ￥10</span>
							</f7-col>
							<f7-col width="30">实付 ￥10</f7-col>
						</f7-grid>
					</f7-list-item>
				</f7-list>
				<!-- 订单详情 end -->

				<!-- 配送 start -->
				<f7-block-title class="block-title">配送信息</f7-block-title>
				<f7-list class="delivery-info">
					<f7-list-item class="delivery-tip">
						<f7-label>期望xxx</f7-label>
						<span>立即配送</span>
					</f7-list-item>
					<f7-list-item class="address">
						<f7-label>配送地址</f7-label>
						<div>
							<p>濛子（女士） 213131534</p>
							<p>这是地址这是地址这是地址这是地址</p>
						</div>
					</f7-list-item>
					<f7-list-item class="service">
						<f7-label>配送服务</f7-label>
						<span>由 商家 提供配送服务</span>
					</f7-list-item>
				</f7-list>
				<!-- 配送 end -->

				<!-- 订单信息 start -->
				<f7-block-title class="block-title">订单信息</f7-block-title>
				<f7-list class="order-info">
					<f7-list-item class="phone">
						<f7-label>订单号码</f7-label>
						<span>12312312</span>
					</f7-list-item>
					<f7-list-item class="time">
						<f7-label>订单时间</f7-label>
						<span>1231233</span>
					</f7-list-item>
					<f7-list-item class="method">
						<f7-label>支付方式</f7-label>
						<span>线上支付</span>
					</f7-list-item>
				</f7-list>
				<!-- 订单信息 end -->

			</f7-tab>
		</f7-tabs>

		<f7-actions :opened="flag" class="action-modal" @actions:closed="actionModal(false)">
			<f7-actions-group>
				<f7-actions-button>商家电话12312132</f7-actions-button>
				<f7-actions-button>客服电话12312132</f7-actions-button>
			</f7-actions-group>
			<f7-actions-group>
				<f7-actions-button>取消</f7-actions-button>
			</f7-actions-group>
		</f7-actions>

		<!-- <f7-picker-modal class="modal-popup" :opened="flag">
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
		</f7-picker-modal> -->

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
        },
        changeType(key) {
            for (let i = 0; i < this.types.length; i++) {
                 this.types[i].isActived = false;
            }
            this.types[key].isActived = true;
            // var element = document.getElementById('box');
            // element.scrollIntoView({block: "center", behavior: "smooth"});
        },
	}
}
</script>
