<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <router-link tag="li" class="item border-bottom" v-for="item of weekendList" :key="item.id" :to="'/detail/'+item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-info-title" v-text="item.title"></p>
          <p class="item-info-desc" v-text="item.desc"></p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: ['weekendList']
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .border-bottom
    &:before
      border-color #ccc
  .title
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-info-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-info-desc
      line-height .4rem
      color #ccc
      ellipsis()
</style>
