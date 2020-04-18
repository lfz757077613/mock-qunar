<template>
  <div class="gallery" @click="handleClick">
    <div class="gallery-container">
      <swiper ref="mySwiper" :options="swiperOption" :not-next-tick="notNextTick" v-if="imgList.length">
        <swiper-slide v-for="imgUrl of imgList" :key="imgUrl">
          <img class="gallery-img" :src="imgUrl"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: ['imgList'],
  methods: {
    handleClick () {
      this.$emit('close')
    }
  },
  data () {
    return {
      notNextTick: true,
      swiperOption: {
        initialSlide: 0,
        pagination: '.swiper-pagination',
        loop: true,
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  }

}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .gallery >>> .swiper-container
    overflow: inherit
  .gallery
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .gallery-container
      height 0
      width 100%
      padding-bottom 100%
      .gallery-img
        width 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
