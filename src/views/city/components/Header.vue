<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont back-icon">&#xe624;</span>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header
    width 100%
    text-align center
    height $headerHeight
    line-height $headerHeight
    background $bgColor
    color #fff
    font-size .32rem
    .back-icon
      position absolute
      top 0
      left 0
      text-align center
      width .64rem
      height $headerHeight
      line-height $headerHeight
      color #fff
      font-size .4rem
</style>
