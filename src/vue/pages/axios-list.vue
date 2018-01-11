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
			this.gankAPI()
			this.nodeAPI()
			this.restaurantTest()
		},
		methods: {
			gankAPI() {
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
			},
			nodeAPI() {
				axios.post('http://localhost:3000/test', {name: 'zifengb', age: 12}).then(res => {
					const ret = res.data;
					console.log(ret)
					alert(JSON.stringify(ret))
				}).catch(err => console.log(err))
			},
			restaurantTest() {
				axios.get('http://localhost:3000/restaurant/4').then(res => {
					const ret = res.data;
					console.log(ret.data)
				}).catch(err => console.lgo(err))
			}
		}
	}
</script>