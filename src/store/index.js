import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

function getCityName () {
  let cityName = '北京'
  try {
    if (localStorage.cityName) {
      cityName = localStorage.cityName
    }
  } catch (e) {}
  return cityName
}

export default new Vuex.Store({
  state: {
    cityIndex: 'A',
    cityName: getCityName()
  },
  actions: {
    changeCityIndex (ctx, index) {
      ctx.commit('changeCityIndex', index)
    },
    changeCity (ctx, cityName) {
      ctx.commit('changeCity', cityName)
    }
  },
  mutations: {
    changeCityIndex (state, index) {
      state.cityIndex = index
    },
    changeCity (state, cityName) {
      state.cityName = cityName
      try {
        localStorage.cityName = cityName
      } catch (e) {}
    }
  }
})
