<style lang="scss" scoped>
.pic {
    width: 1rem;
    height: 1rem;
    margin-right: 0.4rem;
    background-color: #f7f7f8;
}
.shop {
    background-color:#fff;
    margin-bottom:0.4rem;
}
.comment {
    background-color:#fff;
    margin-bottom:0.4rem;
}
// 重新设置tab-link样式
.tab-link.active:not(.offline), .tab-link.active:not(.online) {
  background-color: transparent;
}
.tabs-content {
    padding-top: 10%;
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
.submit{
    background-color:#fff;
    .btn{
        background-color: #ffd21f;
        height: 1.3rem;
        color:#fff;
    }
}
</style>

<template>
	<f7-page>
		<f7-navbar title="发布评价" back-link="Back" sliding></f7-navbar>
        <div class="flex-row padding-left-right padding-top-bottom shop">
            <div class="row-center-left pic"></div>
            <div class="row-center-left content-text">餐餐乐</div>
        </div>
        <div class="padding-left-right padding-top-bottom comment">
            <div class="flex-row row-padding">
                <span class="span1 content-text">商品评价</span>
            </div>
            <div class="flex-row row-padding">
                <span class="span1 row-center-left content-text">滑蛋牛肉饭</span>
                <span class="span1 row-center-right">
                    <span class="star"><i class="la la-star"></i></span>
                    <span class="star"><i class="la la-star"></i></span>
                    <span class="star"><i class="la la-star"></i></span>
                    <span class="star"><i class="la la-star"></i></span>
                    <span class="star-o"><i class="la la-star-o"></i></span>
                </span>
            </div>
            <div class="flex-row row-padding">
                <div class="span1 center">
                    <span class="label-active">干净卫生</span>
                </div>
                <div class="span1 center">
                    <span class="label">食材新鲜</span>
                </div>
                <div class="span1 center">
                    <span class="label">分量足</span>
                </div>
                <div class="span1 center">
                    <span class="label">包装精美</span>
                </div>
            </div>
            <div class="flex-row row-padding">
                <textarea rows="20" cols="20" class="span1"></textarea>
            </div>
        </div>
        <div class="flex-row padding-left-right padding-top-bottom shop">
            <span class="span1 row-center-left content-text">送达时间</span>
            <span class="span1 row-center-right content-text">1小时10分钟（13:58）</span>
        </div>
        <div class="flex-row submit">
            <span class="span3 row-center-left content-text"></span>
            <span class="span1 center content-text btn">提交评价</span>
        </div>
	</f7-page>
</template>

<script>
	export default {}
</script>