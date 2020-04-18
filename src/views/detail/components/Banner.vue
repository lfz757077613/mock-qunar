<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="detailInfo.bannerImg" />
      <div class="banner-info">
        <div class="banner-tittle" v-text="detailInfo.title"></div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe632;</span>
          {{detailInfo.imgList.length}}
        </div>
      </div>
    </div>
    <transition>
      <common-gallery :imgList="detailInfo.imgList" v-show="showGallery" @close="handleGallaryClose"/>
    </transition>
  </div>
</template>

<script>
import CommonGallery from '../../common/Gallery'
export default {
  name: 'Banner',
  components: {
    CommonGallery
  },
  props: ['detailInfo'],
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGallaryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .v-enter, .v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: opacity .5s
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      align-items center
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
        ellipsis()
      .banner-number
        height: .32rem
        line-height: .32rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
