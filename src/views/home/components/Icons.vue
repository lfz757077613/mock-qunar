<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOption" :not-next-tick="notNextTick" v-if="pages.length">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc" v-text="item.desc"></p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: ['iconList'],
  data () {
    return {
      notNextTick: true,
      swiperOption: {
        initialSlide: 0,
        autoplay: false,
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .icons >>> .swiper-pagination-bullet-active
    background #00bcd4
  /*.icons >>> .swiper-container*/

  .icons
    overflow hidden
    width 100%
    height 0
    padding-bottom 50%
    margin-top .1rem
    .icon
      position relative
      overflow hidden
      height 0
      width 25%
      float left
      padding-bottom 25%

      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem

        .icon-img-content
          display block
          margin 0 auto
          height 100%

      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        line-height .44rem
        height .44rem
        color $darkTextColor
        text-align center
        ellipsis()
</style>
