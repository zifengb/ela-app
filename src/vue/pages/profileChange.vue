<style lang="scss" scoped>
.form {
	margin: 5% 0;
}
.submit-btn {
	width: 95%;
	color: #000;
	margin: 0 auto;
	background-color: #FFD21F;
}
</style>


<template>
	<f7-page>

		<f7-navbar :title="navbarInfo" back-link="Back" sliding></f7-navbar>

		<f7-list form class="form">
			<template v-if="routeHash">
				<f7-list-item>
					<f7-input type="password" placeholder="新密码"></f7-input>
				</f7-list-item>
				<f7-list-item>
					<f7-input type="password" placeholder="再次确认密码"></f7-input>
				</f7-list-item>
			</template>
			<f7-list-item v-else>
				<f7-input type="text" placeholder="用户名"></f7-input>
			</f7-list-item>
		</f7-list>

		<f7-block>
			<p v-if="routeHash">温馨提示：需要输入两次密码以确认修改</p>
			<p v-else>用户名只能输入数字或文字（2-40个）</p>
		</f7-block>

		<f7-button big fill class="submit-btn">确定</f7-button>

	</f7-page>
</template>


<script>
export default {
	data() {
		return {
			navbarInfo: '修改',
			routeHash: null
		}
	},
	created() {
		this.routeHash = this.$route.hash;
		this.navbarInfo += this.routeHash ? '密码' : '用户名';
	},
	methods: {

	}
}
</script>
