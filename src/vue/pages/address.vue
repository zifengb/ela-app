<style lang="scss">
.ad-searchbar input[type=search] {
	background-color: #F0F0F0;
	font-size: 1rem;
}
</style>

<style lang="scss" scoped>
.searchbar {
	background-color: #fff;
}
.list-content {
	width: 100%;
	margin: 4% 0;
	> div:not(:first-child) {
		color: #878787;
		font-size: 0.8rem;
		margin-top: 2%;
	}
}
.gps, .more {
	text-align: center;
	a {
		width: 100%;
		color: #000;
	}
}
i.la {
	color: #FFD21F;
}
</style>


<template>
	<f7-page>

		<f7-navbar title="选择收货地址" back-link="Back" sliding></f7-navbar>

	<!-- Search bar -->
  <f7-searchbar
		class="ad-searchbar"
    cancel-link="取消"
    search-list="#search-list"
    placeholder="请输入收货地址"
    :clear-button="active"
    @searchbar:search="onSearch"
    @searchbar:enable="onEnable"
    @searchbar:disable="onDisable"
    @searchbar:clear="onClear"
		@blur="onBlur"
  ></f7-searchbar>

	<f7-list>
		<f7-list-item class="gps">
			<a href="#"><i class="la la-map-marker"></i> 点击定位当前位置</a>
		</f7-list-item>
	</f7-list>

	<f7-list>
		<f7-list-item>
			新增收货地址 
			<f7-link href="#"><i class="la la-plus-circle"></i></f7-link>
		</f7-list-item>
	</f7-list>

	<!-- Will be visible if there is no any results found, defined by "searchbar-not-found" class -->
  <f7-list class="searchbar-not-found">
    <f7-list-item title="没有任何结果~"></f7-list-item>
  </f7-list>

  <!-- Search-through list -->
	<f7-block-title>我的收货地址</f7-block-title>
  <f7-list class="searchbar-found" id="search-list">
    <f7-list-item v-for="(item, index) in items" :key="index">
			<f7-grid class="list-content">
				<f7-col width="100" class="address">北京市朝阳区朝外大街外交部4号 890室</f7-col>
				<f7-col width="20" class="username">濛子{{item}}</f7-col>
				<f7-col width="20" class="sex">女士</f7-col>
				<f7-col width="60" class="mobile">18010097302</f7-col>
			</f7-grid>
		</f7-list-item>
		<f7-list-item class="more"><a href="#">展开更多地址</a></f7-list-item>
  </f7-list>
		
	</f7-page>
</template>


<script>
export default {
	data() {
		return {
			active: true,
			items: (function () {
				var it = [];
				for (var i = 0; i < 3; i++) it.push(i+1);
				return it;
			})()
		}
	},
	methods: {
		onSearch: function (query, found) {
			console.log('search', query);
		},
		onClear: function (event) {
			console.log('clear');
		},
		onEnable: function (event) {
			console.log('enable');
		},
		onDisable: function (event) {
			console.log('disable');
		},
		onBlur: function () {
			console.log('blur')
		}
	}
}
</script>
