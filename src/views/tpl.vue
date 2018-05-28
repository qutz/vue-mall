<template>
	<div class="tpl">
    <group>
    </group>
	</div>
</template>

<script>
import { Group } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'tpl',
  components: {
    Group
  },
  computed: {
    ...mapState({
    })
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  created () {
  },
  activated () {
    this.share()
  },
  methods: {
    share () {
      let link = window.location.href.split('#')[0]
      this.wxShare('分享标题', '分享内容', link, '分享图片地址')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
