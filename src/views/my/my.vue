<template>
	<div class="my">
		<div class="user-info">
			<div class="user-img">
				<img :src="url" />
			</div>
			<div class="name-mobile">
				<p>{{name}}{{count}}</p>
				<p>{{mobile}}</p>
			</div>
		</div>
		<group>
			<cell title="我的收藏" is-link :link="{path:'/mycollection'}"></cell>
		</group>
    <x-button @click.native="add">Add</x-button>
	</div>
</template>

<script>
import { Group, Cell, CellBox, Flexbox, FlexboxItem, XButton } from 'vux'
export default {
  name: 'my',
  components: {
    XButton,
    Group,
    Cell,
    CellBox,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
      name: '张三',
      mobile: '13265464762',
      count: 0
    }
  },
  mounted () {
    this.name = '李四'
  },
  created () {
  },
  methods: {
    add () {
      this.count++
    }
  }
}
</script>

<style lang="less" scoped>
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
	.user-info {
		width: 100%;
		height: 140px;
		display: flex;
		align-items: center;
		@width77: 77px;
		>div {
			height: @width77;
		}
		.user-img {
			width: @width77;
			border-radius: 50%;
			overflow: hidden;
			margin-left: 30px;
			background-color: #b0b6c4;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.name-mobile {
			padding: 5px 10px;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}
	}
</style>
