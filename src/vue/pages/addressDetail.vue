<style lang="scss" scoped>
.form {
	margin: 5% 0;
	.list-label {
		width: 25%;
	}
}
.submit-btn {
	width: 95%;
	color: #000;
	margin: 0 auto;
	background-color: #FFD21F;
}
.radio-box {
	width: 100%;
	display: flex;
	span {
		display: inline-block;
	}
	> label {
		flex: 1;
		i, span {
			vertical-align: bottom;
			vertical-align: -webkit-baseline-middle;
		}
	}
}
.contact {
	width: 50%;
}
</style>


<template>
	<f7-page>

		<f7-navbar :title="navbarInfo" back-link="Back" sliding></f7-navbar>

		<f7-list form class="form">
			<f7-list-item>
				<f7-label class="list-label">联系人</f7-label>
				<f7-input type="text" placeholder="名字" v-model="addressText.consignee"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label class="list-label">性别</f7-label>
				<div class="radio-box">
					<label for="male" @click="selectedSex(0)">
						<input type="radio" name="sex" id="male" hidden checked>
						<i class="icon-radio"></i>
						<span>男</span>
					</label>
					<label for="female" @click="selectedSex(1)">
						<input type="radio" name="sex" id="female" hidden>
						<i class="icon-radio"></i>
						<span>女</span>
					</label>
				</div>
			</f7-list-item>
			<f7-list-item>
				<f7-label class="list-label">电话</f7-label>
				<f7-input type="text" placeholder="手机号" v-model="addressText.phone"></f7-input>
				<f7-link href="#" class="contact"><i class="la la-plus-circle"></i> 通讯录</f7-link>
			</f7-list-item>
			<f7-list-item>
				<f7-label class="list-label">地址</f7-label>
				<f7-input type="text" placeholder="请输入有效地址" v-model="addressText.address"></f7-input>
			</f7-list-item>
		</f7-list>

		<f7-button big fill class="submit-btn" @click="addAddress">确定</f7-button>

	</f7-page>
</template>


<script>
import axios from 'axios'
export default {
	data() {
		return {
			navbarInfo: '添加地址',
			addressText: {
				consignee : '',
				sex: 0, // 男为0，女为1
				address: '',
				phone: ''
			}
		}
	},
	methods: {
		addAddress() {
			let postData = {
				userId : this.$store.state.userAuth.userInfo.userId,
				addressText : this.addressText
			}
			axios.post(this.$store.state.global.host + '/user/updateAddressText', postData).then(res => {
				let result = res.data
				console.log(result.result)
				this.$store.commit('userAuth/setAddress', result.result)
				alert(result.msg)
				this.$f7router.navigate('/address')
			}).catch(err => {
				console.log(err)
			})
		},
		selectedSex(index) {
			this.addressText.sex = index
		}
	}
}
</script>
