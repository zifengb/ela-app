<style lang="scss" scoped>
.main {
	background-color: #fff;
}
.rt-list {
	color: #878787;
	border-top: 1px solid #DEDEDE;
	> li {
		// margin: 4% 2%;
		padding: 4% 2%;
		border-bottom: 1px solid #DEDEDE;
	}
	.rt-list-grid {
		font-size: 0.35555rem;
		.content {
			margin-bottom: 4%;
			> h3 {
				color: #000;
				font-size: 0.55555rem;
				font-weight: lighter;
				line-height: 1.5;
			}
			> p {
				line-height: 1.8;
			}
			.rating {
				color: #FFD21F;
			}
			.agent-fee::before {
				content: "|";
				margin: 0 4px;
			}
		}
		.badge {
			margin-right: 2%;
			background-color: #A938A9;
			border-radius: 0;
			vertical-align: text-bottom;
		}
		.tip {
			color: #ADADAD;
			transform: translateY(34%);
		}
	}
}
// 重新修饰f7默认组件样式
.list-block {
	margin: 0;
}
// #重新修饰f7默认组件样式
</style>


<template>
	<f7-page class="main">
		<f7-navbar title="营养咨讯" back-link="Back" sliding></f7-navbar>

		<ul v-if="pageData.list && pageData.list.length > 0" class="rt-list">
			<li v-for="item in pageData.list" :key="item.articleId" @click="jumpTo('/infoDetail/?content=' + item.content)">
				<f7-row class="rt-list-grid">
					<f7-col width="30" class="aside">
						<img :src="item.thumbnail" />
					</f7-col>
					<f7-col width="70">
						<h3>{{ item.title }}</h3>
						<p>{{ textEllipsis(item.content) }}</p>
					</f7-col>
				</f7-row>
			</li>
		</ul>
	</f7-page>
</template>


<script>
import axios from 'axios'
export default {
	data() {
		return {
			pageData: {},
		}
	},
	created() {
		this.HOST = this.$store.state.global.host
		this.init()
	},
	methods: {
		init() {
			axios.get(this.HOST + '/article').then(res => {
				this.pageData = res.data;
			}).catch(err => console.log(err))
		},
		jumpTo(url) {
			this.$f7router.navigate(url)
		},
		textEllipsis(t) {
			let text = t.toString();
			return text.length > 50 ? text.substring(0, 100) + '...' : text;
		}
	}
}
</script>
