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
import ElementUI from 'element-ui'
import './assets/styles/element-#00BCD4/index.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
// 暂时没用到animate的动画效果
import './assets/styles/animate.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueAxios, axios)
Vue.use(ElementUI)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
