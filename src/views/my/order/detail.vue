<template>
  <section class="wrap">
    订单详情页
  </section>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  export default {
    name: 'myOrderDetail',
    components: {},
    data () {
      return {
        // 订单ID
        orderId: this.$route.params.orderId
      }
    },
    computed: {
      ...mapState({
        orderDetail: state => state.order.orderDetail
      })
    },
    async created () {
      // 获取订单详情
      await this.getOrderDetail(this.orderId)
    },
    methods: {
      ...mapActions([
        // 获取订单详情信息
        'getOrderDetail'
      ]),
      // 路由跳转方法
      routeLink (link) {
        this.$router.push({path: link})
      }
    }
  }
</script>

<style scoped lang="less">
</style>