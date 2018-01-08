<style lang="scss" scoped>
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
</style>


<template>
	<f7-page>
		<f7-navbar title="Pick-Modal" back-link="Back" sliding></f7-navbar>

		<f7-button @click="popup">打开picker-modal</f7-button>

		<f7-picker-modal class="modal-popup" :opened="flag">
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
		</f7-picker-modal>
	</f7-page>
</template>

<script>
export default {
	data() {
		return {
			flag: false
		}
	},
	methods: {
		popup() {
			this.flag = !this.flag;
		}
	}
}
</script>
