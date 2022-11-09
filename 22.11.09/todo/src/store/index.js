import Vue from 'vue'
import Vuex from 'vuex'
import todo from '@/store/modules/todo.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todo: todo,
  }
})
