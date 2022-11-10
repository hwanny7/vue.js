import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos
    },
    CREATE_TODOS(state, data){
      state.todos.push(data)
      router.push({name : 'index'})
      // router.push('/')
    }
  },
  _actions: {
    getTodos({ commit }) {
      axios({
        url: 'http://127.0.0.1:8000/todos/'
      })
        .then(res => {
          commit('SET_TODOS', res.data)
        })
    },
    createTodo({ commit }, todoTitle) {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/todos/',
        data: {
          title: todoTitle,
          is_completed: false,
        }
      })
        .then(res => {
          commit('CREATE_TODOS', res)
        })
    }
  },
  get actions() {
    return this._actions
  },
  set actions(value) {
    this._actions = value
  },
  modules: {
  }
})
