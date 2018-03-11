<style lang="scss" scoped>
.getCode {
	padding: 2%;
	width: 30%;
	background-color: #FFD21F;
	color: #000;
	font-size: 0.3rem;
	text-align: center;
	border-radius: 4%;
}
.disabled {
	color: #fff;
	background-color: #bcbcc1;
}
.login-btn {
	color: #000;
	margin: 0 2%;
	background-color: #ffd21f;
}
.register-btn {
	color: #000;
	margin: 0 2%;
	margin-top: 15px;
	background-color: #ffd21f;
	&.hide{
		display: none;
	}
}
.third-part--login {
	position: relative;
	margin: 30% auto 0;
	width: 80%;
	text-align: center;
	> p {
		position: relative;
		width: 25%;
		margin: 0 auto 4%;
		background-color: #EFEFF4;
	}
	&::before {
		content: "";
    position: absolute;
    display: block;
    width: 40%;
    border-bottom: 1px solid #333;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
	}
	.icon {
		font-size: 1.4rem;
	}
}
</style>


<template>
	<f7-page>

		<f7-navbar title="登录" back-link="Back" sliding @back-click="showToolbar"></f7-navbar>

		<f7-list form class="login-form" ref="login-form">
			<f7-list-item>
				<f7-input type="text" placeholder="用户名或手机号" v-model="userInfo.userName" />
			</f7-list-item>
			<f7-list-item>
				<f7-input type="password" placeholder="密码或验证码" v-model="userInfo.loginPassword" />
			</f7-list-item>
		</f7-list>

		<f7-block>
			<p>温馨提示：未注册的账号的手机，登录时将自动注册，且代表您已同意《<font color="#3f51b5">用户协议</font>》；忘记密码请先使用验证码登录，然后修改密码。</p>
		</f7-block>

		<f7-button big fill raised class="login-btn" @click="login">登录</f7-button>
		<f7-button big fill raised :class="['register-btn',{'hide': regBtn}]" @click="register">注册</f7-button>

		<div class="third-part--login">
			<p>第三方登录</p>
			<f7-row>
				<f7-col width="33">
					<f7-label class="icon"><i class="la la-wechat"></i></f7-label>
					<p class="icon-text">微信</p>
				</f7-col>
				<f7-col width="33">
					<f7-label class="icon"><i class="la la-qq"></i></f7-label>
					<p class="icon-text">QQ</p>
				</f7-col>
				<f7-col width="33">
					<f7-label class="icon"><i class="la la-weibo"></i></f7-label>
					<p class="icon-text">微博</p>
				</f7-col>
			</f7-row>
		</div>

	</f7-page>
</template>


<script>
import axios from 'axios'
export default {
	data() {
		return {
			userInfo: {
				userName: '',
				loginPassword: ''
			},
			regBtn: false
		}
	},
	created() {
		this.$store.commit('global/hideToolbar')
	},
	methods: {
		login() {
			axios.post(this.$store.state.global.host + '/user/login', this.userInfo).then(res => {
				let result = res.data
				if (result.result) {
					this.$store.commit('userAuth/setUserInfo', result.result.list[0])
					this.$router.loadPage('/')
				} else {
					alert(result.msg)
				}
			}).catch(err => {
				console.log(err)
			})
		},
		register() {
			axios.post(this.$store.state.global.host + '/user/register', this.userInfo).then(res => {
				let result = res.data
				this.regBtn = true
				alert(result.msg)
			}).catch(err => {
				console.log(err)
			})
		},
		showToolbar() {
			this.$store.commit('global/showToolbar')
		}
	}
}
</script>
