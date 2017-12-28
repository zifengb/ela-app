<template>
	<f7-page>
		<f7-list>
			<f7-list-group v-for="item in data" :key="item._id">
				<f7-list-item :title="item.type"></f7-list-item>
				<f7-list-item :title="item.who"></f7-list-item>
				<f7-list-item :title="item.publishedAt"></f7-list-item>
				<f7-list-item v-if="item.url"><a :href="item.url">{{ item.desc }}</a></f7-list-item>
			</f7-list-group>
		</f7-list>
	</f7-page>
</template>


<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				data: []
			}
		},
		created() {
			axios.get('http://gank.io/api/data/Android/10/1').then(res => {
				// console.log(res)
				const ret = res.data;
				if (!ret.error) {
					this.data = ret.results
					// alert(JSON.stringify(this.data))
				}
			}).catch(err => {
				alert(err)
			})
		}
	}
</script>