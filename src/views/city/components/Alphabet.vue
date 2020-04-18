<template>
  <ul class="list">
    <li class="item"
        v-for="key of letterList"
        v-text="key"
        :key="key"
        :ref="key"
        @click="handleClick(key)"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"></li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CityAlphabet',
  props: ['indexCityMap'],
  data () {
    return {
      touching: false,
      timer: null
    }
  },
  computed: {
    letterList () {
      const letterList = []
      for (const key in this.indexCityMap) {
        letterList.push(key)
      }
      return letterList
    }
  },
  methods: {
    ...mapActions(['changeCityIndex']),
    handleClick (index) {
      this.changeCityIndex(index)
    },
    handleTouchStart () {
      this.touching = true
    },
    handleTouchMove (e) {
      if (!this.touching) {
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const touchY = e.touches[0].clientY - this.$parent.$refs.header.$el.offsetHeight - this.$parent.$refs.search.$el.offsetHeight
        const index = Math.floor((touchY - this.$refs[this.letterList[0]][0].offsetTop) / this.$refs[this.letterList[0]][0].offsetHeight)
        if (index >= 0 && index < this.letterList.length) {
          this.changeCityIndex(this.letterList[index])
        }
      }, 10)
    },
    handleTouchEnd () {
      this.touching = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content space-between
    position absolute
    /*header和search的高度*/
    top $headerHeight + .72rem
    right 0
    bottom 0
    width .4rem

    .item
      text-align center
      line-height .4rem
      color $bgColor

</style>
