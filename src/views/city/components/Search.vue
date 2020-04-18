<template>
  <div class="search">
    <input class="input" type="text" placeholder="输入城市名或拼音" v-model="keyword"/>
    <div class="search-content" ref="wrapper" v-show="keyword">
      <ul >
        <li class="search-item border-bottom"
          v-for="city of cityList"
          :key="city.id"
          v-text="city.name"
          @click="handleClick(city.name)"></li>
        <li v-show="!cityList.length">没有匹配到城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapActions } from 'vuex'
export default {
  name: 'CitySearch',
  props: ['indexCityMap'],
  data () {
    return {
      keyword: '',
      cityList: []
    }
  },
  methods: {
    ...mapActions(['changeCity']),
    handleClick (cityName) {
      this.changeCity(cityName)
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (!this.keyword) {
        this.cityList = []
        return
      }
      const result = []
      for (const index in this.indexCityMap) {
        this.indexCityMap[index].forEach(city => {
          if (city.name.indexOf(this.keyword) > -1 || city.spell.indexOf(this.keyword) > -1) {
            result.push(city)
          }
        })
      }
      this.cityList = result
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, { click: true, mouseWheel: true })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .search
    height .72rem
    background $bgColor
    padding 0 .1rem
    .input
      box-sizing border-box
      width 100%
      padding 0 .1rem
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
    .search-content
      z-index: 1
      background #eee
      overflow hidden
      position absolute
      top 1.58rem
      left 0
      right 0
      bottom 0
      .search-item
        line-height .62rem
        padding-left .2rem
        background #fff
        color #666
</style>
