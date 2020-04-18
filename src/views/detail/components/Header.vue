<template>
  <div class="header">
    <router-link tag="div" class="header-abs" v-show="showAbs" to="/">
      <i class="el-icon-arrow-left"/>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <i class="el-icon-arrow-left"/>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      // alert(top)
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header-abs
    z-index 1
    display flex
    align-items center
    justify-content center
    position absolute
    left .2rem
    top .2rem
    width .7rem
    height .7rem
    line-height .7rem
    border-radius .35rem
    background rgba(0 0 0 .7)
    text-align center
    .el-icon-arrow-left
      color #fff
      font-size .4rem
  .header-fixed
    z-index 1
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .el-icon-arrow-left
      height $headerHeight
      line-height $headerHeight
      position absolute
      left 0
      font-size .6rem
      color #fff
</style>
