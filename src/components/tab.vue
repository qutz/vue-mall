<template>
	<div class="tab" style="height:100%;">
		<view-box ref="viewBox">
      <keep-alive>
			  <router-view></router-view>
      </keep-alive>
		</view-box>
		<tabbar slot="bottom" style="position: fixed;">
			<tabbar-item :selected="selected === 'home'" link="/home">
				<img slot="icon" src="../assets/icon-home.png">
				<img slot="icon-active" src="../assets/icon-home-active.png">
				<span slot="label">首页</span>
			</tabbar-item>
			<tabbar-item :selected="selected === 'trip'" link="/classify">
				<img slot="icon" src="../assets/icon-type.png">
				<img slot="icon-active" src="../assets/icon-type-active.png">
				<span slot="label">分类</span>
			</tabbar-item>
			<tabbar-item :selected="selected === 'shopcar'" link="/shopcar">
				<img slot="icon" src="../assets/icon-shopcar.png">
				<img slot="icon-active" src="../assets/icon-shopcar-active.png">
				<span slot="label">购物车</span>
			</tabbar-item>
			<tabbar-item :selected="selected === 'my'" link="/my">
				<img slot="icon" src="../assets/icon-my.png">
				<img slot="icon-active" src="../assets/icon-my-active.png">
				<span slot="label">我的</span>
			</tabbar-item>
		</tabbar>
	</div>
</template>

<script>
import { ViewBox, Tabbar, TabbarItem } from 'vux'
export default {
  name: 'tab',
  data () {
    return {
      selected: 'home'
    }
  },
  mounted () {
    let to = this.$route.name

    if (to === 'home') {
      this.selected = 'home'
    } else if (to === 'classify') {
      this.selected = 'classify'
    } else if (to === 'shopcar') {
      this.selected = 'shopcar'
    } else if (to === 'my') {
      this.selected = 'my'
    }
  },
  watch: {},
  components: {
    ViewBox,
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="less" scoped>
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

.weui-tabbar {
  background-color: #ffffff;
}
</style>