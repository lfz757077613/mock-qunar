<template>
  <div class="header">
    <div class="left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
      <div class="input-wrapper">
        <span class="iconfont">&#xe632;</span>
        <input class="input" type="text" placeholder="输入城市/景点/游玩主题"/>
      </div>
    <router-link to="/city">
      <div class="right">
        {{cityName}}<span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['cityName'])
  }
}
</script>

<!--scoped只对当前组件生效-->
<!--1rem=html font-size=50px-->
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header
    display flex
    align-items: center
    line-height $headerHeight
    background $bgColor
    color #fff

    .left
      width .64rem

      .back-icon
        text-align center
        font-size .4rem

    .right
      padding 0 .1rem
      text-align center
      color #fff

      .arrow-icon
        font-size .24rem

    .input-wrapper
      flex 1
      display flex
      align-items: center
      justify-content center
      height .7rem
      line-height .7rem
      padding 0 .08rem
      background #fff
      border-radius .1rem
      color #ccc

      .input
        padding 0 .08rem
        flex 1
        height .7rem
        line-height .7rem
        color #666
</style>
