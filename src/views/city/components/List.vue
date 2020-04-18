<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="city of hotCityList" :key="city.id">
            <div class="button" v-text="city.name" @click="handleClick(city.name)"></div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(indexCity, key) of indexCityMap" :key="key" :ref="key">
        <div class="title border-topbottom" v-text="key"></div>
        <div class="item-list">
          <div class="item border-bottom" v-for="city of indexCity" v-text="city.name" :key="city.id" @click="handleClick(city.name)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CityList',
  props: ['hotCityList', 'indexCityMap'],
  methods: {
    ...mapActions(['changeCity']),
    handleClick (cityName) {
      this.changeCity(cityName)
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState(['cityIndex'])
  },
  watch: {
    cityIndex () {
      if (this.cityIndex) {
        const element = this.$refs[this.cityIndex][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, { click: true, mouseWheel: true })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc

  .list
    /*使用better-sroll需要，隐藏滑出范围的内容*/
    overflow hidden
    position absolute
    width 100%
    /*header和search的高度*/
    top .72rem+$headerHeight
    /*将父元素的底设置为手机屏的最下面*/
    bottom 0
    .area
      .title
        line-height .54rem
        background #eee
        padding-left .2rem
        color #666
        font-size .26rem

      .button-list
        overflow hidden
        display flex
        flex-wrap wrap
        padding .1rem .35rem

        .button-wrapper
          width 33.33%

          .button
            margin .1rem
            padding .1rem
            text-align center
            border .02rem solid #ccc
            border-radius .06rem

      .item-list
        .item
          line-height .54rem
          color #666
          padding-left .2rem

</style>
