<style lang="scss" scoped>
.user-block {
	margin-top: 0;
}
.list-header {
	color: #C5C5C5;
}
.avatar {
	width: 3.5rem;
	height: 3.5rem;
	img {
		border-radius: 50%;
		vertical-align: middle;
	}
}
</style>


<template>
	<f7-page class="main">

		<f7-navbar title="账户安全" back-link="Back" sliding></f7-navbar>

		<f7-list class="user-block">
			<f7-list-item @click="actionModal">
				<span>头像</span>
				<div class="avatar">
					<img src="../../assets/images/pic-dl.png" alt="">
				</div>
			</f7-list-item>
			<f7-list-item>
				<span>用户名</span>
				<span>zifengb</span>
			</f7-list-item>
		</f7-list>

		<f7-list class="user-block">
			<f7-list-item class="list-header">账号绑定</f7-list-item>
			<f7-list-item>
				<span><i class="la la-mobile-phone"></i> 手机</span>
				<a href="#">未绑定</a>
			</f7-list-item>
			<f7-list-item>
				<span><i class="la la-wechat"></i> 微信</span>
				<a href="#">未绑定</a>
			</f7-list-item>
			<f7-list-item>
				<span><i class="la la-qq"></i> QQ</span>
				<a href="#">未绑定</a>
			</f7-list-item>
			<f7-list-item>
				<span><i class="la la-weibo"></i> 微博</span>
				<a href="#">未绑定</a>
			</f7-list-item>
		</f7-list>

		<f7-list class="user-block">
			<f7-list-item class="list-header">安全设置</f7-list-item>
			<f7-list-item>
				<span>登陆密码</span>
				<a href="#">修改</a>
			</f7-list-item>
			<f7-list-item>
				<span>支付密码</span>
				<a href="#">未设置</a>
			</f7-list-item>
		</f7-list>

		<!-- actions sheet modal -->
		<f7-actions :opened="flag" class="action-modal" @actions:closed="actionModal(false)">
			<f7-actions-group>
				<f7-actions-label bold>上传头像</f7-actions-label>
				<f7-actions-button>拍照</f7-actions-button>
				<f7-actions-button>
					<label for="file">从手机相册选择</label>
					<input id="file" type="file" hidden @change="upload">
				</f7-actions-button>
			</f7-actions-group>
		</f7-actions>

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
		actionModal(f) {
			if (f === false) {
				this.flag = f;
			} else {
				this.flag = !this.flag
			}
		},
		upload() {
			console.log('upload prepare');
		}
	}
}
</script>
