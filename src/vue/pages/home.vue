<style lang="scss" scoped>
	.main {
		background-color: #fff;
		.swiper-container {
			height: 30%;
		}
	}
</style>


<template>
	<f7-page class="main">

		<f7-navbar title="饿了吧" back-link="Back" sliding></f7-navbar>

		<!-- 商品分类grid start -->
		<f7-grid>
			<f7-col width="33">Col 1</f7-col>
			<f7-col width="33">Col 2</f7-col>
			<f7-col width="33">Col 3</f7-col>
			<f7-col width="33">Col 1</f7-col>
			<f7-col width="33">Col 2</f7-col>
			<f7-col width="33">Col 3</f7-col>
		</f7-grid>
		<!-- 商品分类grid end -->

		<!-- swiper start -->
		<f7-swiper pagination>
			<f7-swiper-slide>Slide 1</f7-swiper-slide>
			<f7-swiper-slide>Slide 2</f7-swiper-slide>
			<f7-swiper-slide>Slide 3</f7-swiper-slide>
		</f7-swiper>
		<!-- swiper end -->

		<!-- 特惠活动grid start -->

		<!-- 特惠活动grid end -->

		<!-- 商家列表 start -->
		<f7-block-title>附近商家</f7-block-title>
		<f7-block>
			<f7-list>
				<f7-list-item title="Item 1"></f7-list-item>
				<f7-list-item title="Item 2"></f7-list-item>
			</f7-list>
		</f7-block>
		<!-- 商家列表 end -->
	</f7-page>
</template>


<script>
export default {
	data() {
		return {}
	},
	created() {
		// this.init()
	},
	methods: {
		
	}
}
</script>
