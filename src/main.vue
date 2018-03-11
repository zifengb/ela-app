<template>
	<!-- App -->
	<div id="app">
		
		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>
		
		<!-- Main Views -->
		<f7-views>
			<f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
				<!-- Navbar -->
				<!-- <f7-navbar title="饿了吧" back-link="Back" sliding></f7-navbar> -->
				<!-- Pages -->
				<home />
				<!-- toolbar -->
				<f7-toolbar tabbar labels bottom-md class="toolbar" v-show="$store.state.global.flag">
					<f7-link href="/">
						<i class="la la-home"></i> <span>首页</span>
					</f7-link>
					<f7-link href="/order/">
						<i class="la la-navicon"></i> <span>订单</span>
					</f7-link>
					<f7-link href="/user/">
						<i class="la la-user"></i> <span>我的</span>
					</f7-link>
				</f7-toolbar>
			</f7-view>
		</f7-views>
	</div>
</template>

<script>
import axios from 'axios'
import { back } from './utils/index'
import home from './vue/pages/home.vue'
export default {
	created() {
		back(this.routerBack)	// 重写手机返回键退出App事件
	},
	components: {
		home: home
	},
	methods: {
		routerBack() {
			// alert(this.$f7.mainView.history)
			if (this.$f7.mainView.history.length === 1) {
				navigator.app.exitApp(); // exit App
			} else {
				this.$f7router.back();
			}
		}
	},
	socket: {	// 放置在顶层mainView监听服务端socket
		events: {
			hello(data) {
				console.log(data)
				// alert(data.info)
			}
		}
	}
}
</script>
