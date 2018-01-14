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
			<template v-if="routeHash === 'loginPassword'">
				<f7-list-item>
					<f7-input type="password" placeholder="新密码" v-model="loginPassword"></f7-input>
				</f7-list-item>
				<f7-list-item>
					<f7-input type="password" placeholder="再次确认密码" v-model="loginPassword2"></f7-input>
				</f7-list-item>
			</template>
			<template v-else-if="routeHash === 'addPayPassword'">
				<f7-list-item>
					<f7-input type="password" placeholder="添加支付密码" v-model="payPassword"></f7-input>
				</f7-list-item>
			</template>
			<template v-else-if="routeHash === 'resetPayPassword'">
				<f7-list-item>
					<f7-input type="password" placeholder="新支付密码" v-model="payPassword"></f7-input>
				</f7-list-item>
				<f7-list-item>
					<f7-input type="password" placeholder="再次确认支付密码" v-model="payPassword2"></f7-input>
				</f7-list-item>
			</template>
			<f7-list-item v-else>
				<f7-input type="text" placeholder="用户名"  v-model="userName"></f7-input>
			</f7-list-item>
		</f7-list>

		<f7-block>
			<p v-if="routeHash === 'loginPassword'">温馨提示：需要输入两次密码以确认修改</p>
			<p v-else-if="routeHash === 'addPayPassword'">添加支付密码</p>
			<p v-else-if="routeHash === 'resetPayPassword'">重置支付密码</p>
			<p v-else>用户名只能输入数字或文字（2-40个）</p>
		</f7-block>

		<f7-button v-if="routeHash === 'loginPassword'" big fill class="submit-btn" @click="changeLoginPassword">确定</f7-button>
		<f7-button v-else-if="routeHash === 'addPayPassword'" big fill class="submit-btn" @click="changeAddPayPassword">确定</f7-button>
		<f7-button v-else-if="routeHash === 'resetPayPassword'" big fill class="submit-btn" @click="changeResetPayPassword">确定</f7-button>
		<f7-button v-else big fill class="submit-btn" @click="changeUsername">确定</f7-button>

	</f7-page>
</template>


<script>
import axios from 'axios'
export default {
	data() {
		return {
			userName: '',
			loginPassword: '',
			loginPassword2: '',
			payPassword: '',
			payPassword2: ''
		}
	},
	computed: {
		routeHash: function () {
			if (this.$route.hash == 'loginPassword') {
				return 'loginPassword'
			} else if (this.$route.hash == 'addPayPassword') {
				return 'addPayPassword'
			}  else if (this.$route.hash == 'resetPayPassword') {
				return 'resetPayPassword'
			} else {
				return ''
			}
			return this.message.split('').reverse().join('')
		},
		navbarInfo: function () {
			if (this.$route.hash == 'loginPassword') {
				return '修改密码'
			} else if (this.$route.hash == 'addPayPassword') {
				return '添加支付密码'
			}  else if (this.$route.hash == 'resetPayPassword') {
				return '重置支付密码'
			} else {
				return '用户名'
			}
		}
	},
	methods: {
		changeAddPayPassword() {
			let postData = {
				userId : this.$store.state.userAuth.userInfo.userId,
				payPassword : this.payPassword
			}
			if (this.payPassword !== '') {
				axios.post(this.$store.state.global.host + '/user/updatePayPassword', postData).then(res => {
					let result = res.data
					this.$store.commit('userAuth/setUserInfo', result.result)
					alert(result.msg)
					this.$router.loadPage('/')
				}).catch(err => {
					console.log(err)
				})
			} else {
				return
			}
		},
		changeResetPayPassword() {
			let postData = {
				userId : this.$store.state.userAuth.userInfo.userId,
				payPassword : this.payPassword
			}
			if (this.payPassword !== '' && this.payPassword2 !== '' && this.payPassword == this.payPassword2) {
				axios.post(this.$store.state.global.host + '/user/updatePayPassword', postData).then(res => {
					let result = res.data
					this.$store.commit('userAuth/setUserInfo', result.result)
					alert(result.msg)
					this.$router.loadPage('/')
				}).catch(err => {
					console.log(err)
				})
			} else {
				return
			}
		},
		changeLoginPassword() {
			let postData = {
				userId : this.$store.state.userAuth.userInfo.userId,
				loginPassword : this.loginPassword
			}
			if (this.loginPassword !== '' && this.loginPassword2 !== '' && this.loginPassword == this.loginPassword2) {
				axios.post(this.$store.state.global.host + '/user/updateLoginPassword', postData).then(res => {
					let result = res.data
					this.$store.commit('userAuth/setUserInfo', result.result)
					alert(result.msg)
					this.$router.loadPage('/')
				}).catch(err => {
					console.log(err)
				})
			} else {
				return
			}
		},
		changeUsername() {
			let postData = {
				userId: this.$store.state.userAuth.userInfo.userId,
				userName: this.userName
			}
			axios.post(this.$store.state.global.host + '/user/updateUsername', postData).then(res => {
				let result = res.data
				this.$store.commit('userAuth/setUserInfo', result.result)
				alert(result.msg)
				this.$router.loadPage('/')
			}).catch(err => {
				console.log(err)
			})
		}
	}
}
</script>
