<template>
  <div class="home">
    <home-header/>
    <home-banner :bannerList="bannerList"/>
    <home-icons :iconList="iconList"/>
    <home-recommend :recommendList="recommendList"/>
    <home-weekend :weekendList="weekendList"/>
    <aplayer ref="player" autoplay :float="true" theme="#00bcd4" :music="{
        title: '我的名字',
        artist: '陈法律',
        src: 'https://www.laifuzhi.cn/music.mp3'
        // src: 'http://192.168.0.103:8888/api/music'
    }"/>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeBanner from './components/Banner'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import aplayer from 'vue-aplayer'
aplayer.disableVersionBadge = true
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    aplayer
  },
  methods: {
    getHomeInfo () {
      this.axios.get('http://192.168.0.101:8888/api/home').then(function (resp) {
        resp = resp.data
        if (resp.ret && resp.data) {
          const data = resp.data
          this.bannerList = data.bannerList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  data () {
    // 都是默认值
    return {
      lastCityName: '',
      bannerList: [{
        id: '0001',
        imgUrl: 'https://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg'
      }],
      iconList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png',
        desc: '颐和园'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/4c/eac47dd8def8de02.png',
        desc: '北京园博园'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        desc: '圆明园'
      }, {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '0006',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
        desc: '古北水镇'
      }, {
        id: '0007',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        desc: '香山公园'
      }, {
        id: '0008',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        desc: '凤凰岭'
      }, {
        id: '0009',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        desc: '踏青赏花'
      }, {
        id: '0010',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        desc: '中国马镇'
      }],
      recommendList: [{
        id: '0001',
        imgUrl: 'https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
        title: '故宫',
        desc: '东方宫殿建筑代表，世界宫殿建筑典范'
      }, {
        id: '0002',
        imgUrl: 'https://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg',
        title: '南山滑雪场',
        desc: '北京专业级滑雪圣地'
      }, {
        id: '0003',
        imgUrl: 'https://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg',
        title: '天安门广场',
        desc: '我爱北京天安门，天安门上太阳升'
      }, {
        id: '0004',
        imgUrl: 'https://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg',
        title: '水立方',
        desc: '中国的荣耀，阳光下的晶莹水滴'
      }, {
        id: '0005',
        imgUrl: 'https://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg',
        title: '温都水城养生馆',
        desc: '各种亚热带植物掩映其间仿佛置身热带雨林'
      }],
      weekendList: [{
        id: '0001',
        imgUrl: 'https://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
        title: '北京温泉排行榜',
        desc: '细数北京温泉，温暖你的冬天'
      }, {
        id: '0002',
        imgUrl: 'https://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '北京必游TOP10',
        desc: '来北京必去的景点非这些地方莫属'
      }, {
        id: '0003',
        imgUrl: 'https://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
        title: '寻找北京的皇城范儿',
        desc: '数百年的宫廷庙宇，至今依旧威严霸气'
      }, {
        id: '0004',
        imgUrl: 'https://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
        title: '学生最爱的博物馆',
        desc: '周末干嘛？北京很多博物馆已经免费开放啦'
      }, {
        id: '0005',
        imgUrl: 'https://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg',
        title: '儿童剧场，孩子的乐园',
        desc: '带宝贝观看演出，近距离体验艺术的无穷魅力'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .aplayer
    margin 0
    width 100%
    position fixed
    bottom 0
</style>
