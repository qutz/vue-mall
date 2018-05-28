<template>
  <div class="home">
    首页
    <div>
      是否安卓系统：{{isAndroid}}
    </div>
    <div>
      苹果系统JSSdkUrl: {{iosJsUrl}}
    </div>
  </div>
</template>

<script>
import { Divider, ViewBox } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'home',
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
  created () {
  },
  activated () {
    this.share()
  },
  methods: {
    share () {
      let link = window.location.href.split('#')[0]
      this.wxShare('首页', '首页内容', link, 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
