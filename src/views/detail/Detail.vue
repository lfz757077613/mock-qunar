<template>
  <div class="detail">
    <detail-header/>
    <detail-banner :detailInfo="detailInfo"/>
    <detail-list :detailList="detailInfo.categoryList"/>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner,
    DetailList
  },
  mounted () {
    this.axios.get('localhost:8888/api/detail/' + this.$route.params.id).then(function (resp) {
      resp = resp.data
      if (resp.ret && resp.data) {
        const data = resp.data
        this.detailInfo = data.detailInfo
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  data () {
    return {
      detailInfo: {
        title: '大连圣亚海洋世界(AAAA景区)',
        bannerImg: 'https://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
        imgList: ['https://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg', 'https://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'],
        categoryList: [{
          title: '成人票',
          children: [{
            title: '成人三馆联票',
            children: [{
              title: '成人三馆联票 - 某一连锁店销售'
            }]
          }, {
            title: '成人五馆联票'
          }]
        }, {
          title: '学生票'
        }, {
          title: '儿童票'
        }, {
          title: '特惠票'
        }]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .detail
    height 20rem
</style>
