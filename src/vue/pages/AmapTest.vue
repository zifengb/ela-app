<style lang="scss" scoped>
.amap-box {

}
</style>


<template>
	<f7-page>
		<f7-navbar title="高德地图测试" back-link="Back" sliding></f7-navbar>
		<el-amap class="amapContainer" :vid="'amapContainer'" :center="center" :plugin="plugin"></el-amap>
	</f7-page>
</template>


<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap';
export default {
	data() {
		return {
			myMap: null,
			geolocation: null,
			longitude: 0,
			latitude: 0,
			address: '',
			loaded: false,
			center: [113.260526, 23.110616],
			plugin: []
		}
	},
	created() {
		const self = this;
		lazyAMapApiLoaderInstance.load().then(() => {
			// console.log(AMap);
			self.myMap = new AMap.Map('amapContainer', {
				center: self.center
			});


			self.myMap.plugin('AMap.Geolocation', () => {

				self.geolocation = new AMap.Geolocation({
						noIpLocate: 1,
						enableHighAccuracy: true,//是否使用高精度定位，默认:true
						timeout: 10000,          //超过10秒后停止定位，默认：无穷大
						maximumAge: 0,           //定位结果缓存0毫秒，默认：0
						convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
						showButton: true,        //显示定位按钮，默认：true
						buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
						buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
						showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
						showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
						panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
						zoomToAccuracy:true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
						useNative: true
				});

				self.myMap.addControl(self.geolocation);
				self.geolocation.getCurrentPosition();
				AMap.event.addListener(self.geolocation, 'complete', self.onComplete);//返回定位信息
				AMap.event.addListener(self.geolocation, 'error', self.onError);      //返回定位出错信息
			});

		})
		// cordova 插件定位
		this.Geolocation();
	},
	methods: {
		initGeo(o) {
			const self = this;
			o.getCurrentPosition((status, result) => {
				if (result && result.position) {
					alert(JSON.stringify(result.position))
					console.dir(result)
					self.longitude = result.position.lng;
					self.latitude = result.position.lat;
					self.center = [self.longitude, self.latitude];
					self.loaded = true;
					self.$nextTick();
				}
			});
		},
		initCity(o) {
			const self = this;
			o.getLocalCity((status, result) => {
				console.dir(status)
				console.dir(result)
			})
		},
		onComplete(res) {
			console.dir('success', res)
			if (res && res.position) {
				this.longitude = res.position.lng;
				this.latitude = res.position.lat;
				this.center = [this.longitude, this.latitude];
				alert(JSON.stringify(this.center))
				this.$nextTick();
			}
		},
		onError (err) {
			console.dir(err)
		},
		Geolocation() {
			window.LocationPlugin.getLocation(this.GeolocationSuccess, this.GeolocationError)
		},
		GeolocationSuccess(position) {
			alert('Latitude: '          + position.latitude          + '\n' +
              'Longitude: '         + position.longitude         + '\n' +
              'Latitude: '          + position.latitude          + '\n' +
              'Accuracy: '          + position.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.address  + '\n' +
              'Heading: '           + position.province           + '\n' +
              'Speed: '             + position.road             + '\n' +
              'Timestamp: '         + position.speed                + '\n');
		},
		GeolocationError(error) {
			alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
		}
	}
}
</script>
