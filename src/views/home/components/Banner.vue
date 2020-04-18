<template>
  <div class="banner">
    <swiper ref="mySwiper" :options="swiperOption" :not-next-tick="notNextTick" v-if="bannerList.length">
      <swiper-slide v-for="item of bannerList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  props: ['bannerList'],
  data () {
    return {
      notNextTick: true,
      swiperOption: {
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        initialSlide: 0,
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<!--  >>>穿透，不受scorep的限制-->
<style lang="stylus" scoped>
  .banner >>> .swiper-pagination-bullet-active
    background #fff
  .banner
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    background #eee

    .swiper-img
      width 100%
</style>
