<template>
	<div class="myCollection">
		<div v-for="item in collectionList" v-bind:key="item.id">
			<div class="goods-img">
				<img :src="item.img"/>
			</div>
			<div class="goods-info">
				<p>{{item.name}}</p>
				<div><span>￥{{item.price}}</span><a href="javascript:;">取消收藏</a></div>
			</div>
		</div>
    <x-button link="/myorderlist">测试</x-button>
	</div>
</template>

<script>
import { XButton } from 'vux'
export default {
  name: 'myCollection',
  components: {
    XButton
  },
  data () {
    return {
      collectionList: [
        {
          id: '1',
          name: '商品名称',
          price: '100',
          img: ''
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.myCollection > div {
  padding: 17.5px 20px;
  height: 90px;
  background-color: #ffffff;
  font-size: 14px;
  margin-bottom: 10px;
  .goods-img {
    width: 90px;
    height: 90px;
    margin-right: 17.5px;
    overflow: hidden;
    border-radius: 6px;
    background-color: #eaeeef;
    float: left;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .goods-info {
    height: 90px;
    float: left;
    width: calc(~"100% - 107.5px");
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > p {
      line-height: 20px;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    > div a {
      float: right;
    }
  }
}
</style>
