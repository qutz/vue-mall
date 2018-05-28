<template>
  <div class="classify">
    分类
  </div>
</template>

<script>

export default {
  name: 'classify',
  components: {
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
      this.wxShare('分类', '分类内容', link, 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
