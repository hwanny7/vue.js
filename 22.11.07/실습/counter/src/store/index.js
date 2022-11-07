import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
  },
  getters: {
    doubleCounter(state) {
      return state.count * 2
    },
    
  },
  mutations: {
    increase(state){
      state.count++
    },
    decrease(state){
      state.count--
    }
  },
  actions: {
    increase(context) {
      context.commit('increase')
    },
    decrease(context) {
      context.commit('decrease')
    },
  },
  modules: {
  }
})
