import Vue from 'vue'
import App from './App.vue'
import router from './router'

import fastClick from 'fastclick'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'babel-polyfill'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/animate.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueAxios, axios)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
