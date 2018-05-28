<template>
  <div class="shopcar">
    购物车
  </div>
</template>

<script>
import { Divider, ViewBox } from 'vux'
import { mapState } from 'vuex'

export default {
  name: 'shopcar',
  components: {
    ViewBox,
    Divider
  },
  computed: {
    ...mapState({
      isAndroid: state => state.app.isAndroid,
      iosJsUrl: state => state.app.iosJsUrl
    })
  },
  data () {
    return {
    }
  },
  activated () {
    this.share()
  },
  methods: {
    share () {
      let link = window.location.href.split('#')[0]
      this.wxShare('购物车', '购物车内容', link, 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
