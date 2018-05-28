<template>
  <section class="content">
    <div class="content-box">
      订单首页
    </div>
  </section>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  export default {
    name: 'myOrderList',
    components: {},
    data () {
      return {}
    },
    computed: {
      ...mapState({
        orderList: state => state.order.orderList
      })
    },
    async created () {
      // 获取订单列表
      // await this.getOrderListFn();
    },
    methods: {
      ...mapActions([
        // 获取订单列表
        'getOrderList'
      ]),
      /**
       * 获取订单列表
       * @returns {Promise<void>}
       */
      async getOrderListFn () {
        // 订单类型
        let params = {type: ''}
        // 获取订单列表
        await this.getOrderList(params)
      },
      /**
       * 路由跳转方法
       * @param link
       */
      routeLink (link) {
        this.$router.push({path: link})
      }
    }
  }
</script>

<style scoped lang="less">
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    &-box {
      font-size: 32px;
      margin: 32px auto;
    }
  }
</style>