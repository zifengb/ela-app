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
.toolbar {
	i {
		font-size: 0.6rem;
	}
	span {
		font-size: 0.3rem;
	}
}
.content {
    height: 3rem;
    padding: 0.6rem 0.4rem;
    background-color: #ffffff;
    margin-bottom: 0.5rem;
}
.label-active {
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #2295FF;
    font-size: 0.3rem;
}
.label {
	padding: 5px 10px;
    border-radius: 5px;
	background-color: #EBF5FF;
	color:#9ea7b4;
	font-size: 0.3rem;
}
.order {
    padding: 0 0.4rem;
    height: 1.5rem;
    background-color: #ffffff;
    border-bottom: 1px dotted #eee;
}
.user-pic{
    width: 1.2rem;
    height: 1.2rem;
    background-color: #b7b8b7;
    border-radius: 1.2rem;
}
.pinglun{
	background-color: #ffffff;
	padding-bottom: 2rem
}
.row-padding {
	padding: 0.1rem 0rem;
}
.smile {
	color: #ffd21f;
    font-size: 0.5rem;
}
</style>


<template>
	<f7-page>
		<f7-navbar title="历史评价" back-link="Back" sliding></f7-navbar>
        <div class="flex-row content">
            <div class="span4 flex-column">
                <h1 class="span1 center" style="color:#E51C23;font-size: 1rem;">4.3</h1>
                <p class="span1 center content-text">综合评分</p>
                <p class="span1 center subtitle-text">高于周边55%的商家</p>
            </div>
            <div class="span5 flex-column">
                <p class="span1 center flex-row">
                    <span class="span1 content-text">服务态度</span>
                    <span class="span2">
						<span class="star"><i class="la la-star"></i></span>
						<span class="star"><i class="la la-star"></i></span>
						<span class="star"><i class="la la-star"></i></span>
						<span class="star"><i class="la la-star"></i></span>
						<span class="star-o"><i class="la la-star-o"></i></span>
					</span>
                </p>
                <p class="span1 center flex-row">
                    <span class="span1 content-text">服务态度</span>
                	<span class="span2">
						<span class="star"><i class="la la-star"></i></span>
						<span class="star"><i class="la la-star"></i></span>
						<span class="star"><i class="la la-star"></i></span>
						<span class="star"><i class="la la-star"></i></span>
						<span class="star-o"><i class="la la-star-o"></i></span>
					</span>
                </p>
                <p class="span1 center flex-row">
                    <span class="span1 content-text">服务态度</span>
                    <span class="span2">
						<span class="star"><i class="la la-star"></i></span>
						<span class="star"><i class="la la-star"></i></span>
						<span class="star"><i class="la la-star"></i></span>
						<span class="star"><i class="la la-star"></i></span>
						<span class="star-o"><i class="la la-star-o"></i></span>
					</span>
                </p>
            </div>
        </div>
        <div class="flex-row order">
            <div class="span1 center">
                <span class="label-active">全部(99)</span>
            </div>
            <div class="span1 center">
                <span class="label">满意(99)</span>
            </div>
            <div class="span1 center">
                <span class="label">不满意(99)</span>
            </div>
            <div class="span1 center">
                <span class="label">有图(99)</span>
            </div>
        </div>
		<div class="pinglun">
			<div class="flex-row padding-left-right padding-top-bottom">
				<div class="span1 column-center-left">
					<div class="user-pic">

					</div>
				</div>
				<div class="span4">
					<div class="flex-row row-padding">
						<span class="span1 content-text row-left-bottom">匿名用户</span>
						<span class="span2 subtitle-text row-left-bottom">2017-10-16</span>
					</div>
					<div class="flex-row row-padding">
						<span class="span1 subtitle-text column-center-top">服务:<span class="smile"><i class="la la-smile-o"></i></span>满意</span>
						<span class="span1 subtitle-text column-center-top">商品:<span class="smile"><i class="la la-smile-o"></i></span>满意</span>
						<span class="span1 subtitle-text column-center-top">40分钟内送达</span>
					</div>
					<div class="flex-row row-padding">
						<span class="content-text">一个办小时才送来，无语</span>
					</div>
					<div class="flex-row row-padding">
						<span class="span1 subtitle-text row-left-bottom">烧肉+烤鸭</span>
						<span class="span2 subtitle-text row-left-bottom">分量一般</span>
					</div>
				</div>
			</div>
			<div class="flex-row padding-left-right padding-top-bottom">
				<div class="span1 column-center-left">
					<div class="user-pic">

					</div>
				</div>
				<div class="span4">
					<div class="flex-row row-padding">
						<span class="span1 content-text row-left-bottom">匿名用户</span>
						<span class="span2 subtitle-text row-left-bottom">2017-10-16</span>
					</div>
					<div class="flex-row row-padding">
						<span class="span1 subtitle-text column-center-top">服务:<span class="smile"><i class="la la-smile-o"></i></span>满意</span>
						<span class="span1 subtitle-text column-center-top">商品:<span class="smile"><i class="la la-smile-o"></i></span>满意</span>
						<span class="span1 subtitle-text column-center-top">40分钟内送达</span>
					</div>
					<div class="flex-row row-padding">
						<span class="content-text">一个办小时才送来，无语</span>
					</div>
					<div class="flex-row row-padding">
						<span class="span1 subtitle-text row-left-bottom">烧肉+烤鸭</span>
						<span class="span2 subtitle-text row-left-bottom">分量一般</span>
					</div>
				</div>
			</div>
			<div class="flex-row padding-left-right padding-top-bottom">
				<div class="span1 column-center-left">
					<div class="user-pic">

					</div>
				</div>
				<div class="span4">
					<div class="flex-row row-padding">
						<span class="span1 content-text row-left-bottom">匿名用户</span>
						<span class="span2 subtitle-text row-left-bottom">2017-10-16</span>
					</div>
					<div class="flex-row row-padding">
						<span class="span1 subtitle-text column-center-top">服务:<span class="smile"><i class="la la-smile-o"></i></span>满意</span>
						<span class="span1 subtitle-text column-center-top">商品:<span class="smile"><i class="la la-smile-o"></i></span>满意</span>
						<span class="span1 subtitle-text column-center-top">40分钟内送达</span>
					</div>
					<div class="flex-row row-padding">
						<span class="content-text">一个办小时才送来，无语</span>
					</div>
					<div class="flex-row row-padding">
						<span class="span1 subtitle-text row-left-bottom">烧肉+烤鸭</span>
						<span class="span2 subtitle-text row-left-bottom">分量一般</span>
					</div>
				</div>
			</div>
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
	</f7-page>
</template>


<script>
export default {
	
}
</script>
