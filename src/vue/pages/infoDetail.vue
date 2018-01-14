<style lang="scss" scoped>
.main {
	background-color: #fff;
}
</style>


<template>
	<f7-page class="main">
		<f7-navbar title="营养咨讯文章" back-link="Back" sliding></f7-navbar>
		<div v-html="content"></div>
	</f7-page>
</template>


<script>
export default {
	created() {
		this.content = this.$route.query.content || '营养咨询文章内容~'
	}
}
</script>
