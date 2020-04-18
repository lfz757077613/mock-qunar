<template>
  <div class="header">
    <div class="left">
      <i class="el-icon-arrow-left"/>
    </div>
      <div class="input-wrapper">
        <i class="el-icon-search"/>
        <input class="input" type="text" placeholder="输入城市/景点/游玩主题"/>
      </div>
    <router-link to="/city">
      <div class="right">
        {{cityName}}<i class="el-icon-caret-bottom"/>
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
  .el-icon-arrow-left
    font-size .6rem
  .el-icon-search
    font-size .35rem
  .el-icon-caret-bottom
    font-size .35rem
  .header
    display flex
    align-items: center
    line-height $headerHeight
    background $bgColor
    color #fff

    .left
      display flex
      align-items center
      justify-content center
      width .64rem

    .right
      display flex
      align-items center
      padding 0 .1rem
      text-align center
      color #fff

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
