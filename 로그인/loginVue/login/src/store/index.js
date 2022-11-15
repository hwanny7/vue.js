import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    username: null,
    imgUrl: null,
  },
  getters: {
    username(state) { return state.username}
  },
  mutations: {
    SAVE_TOKEN(state, token) {
      state.token = token
    },
    KAKAO_SAVE(state, payload) {
      state.username = payload.username
      state.imgUrl = payload.imgUrl
    }
  },
  actions: {
    login({commit}, payload) {
      axios({
        url: 'http://127.0.0.1:8000/accounts/login/',
        method: 'post',
        data: payload
      })
        .then(res => {
          const token = res.data.key
          commit('SAVE_TOKEN', token)
          alert('로그인 성공!')
          // router 등록하기
        })
        .catch(err => {
          alert('잘못 입력하셨습니다.', err) // json stringfy로 에러 출력하기
        })
    },
    kakaoSave({commit}, payload) {
      commit('KAKAO_SAVE', payload)
    },
    signUp(context, password) { //400 은 이미 가입한 아이디
      axios({
        url: 'http://127.0.0.1:8000/accounts/signup',
        method: 'post',
        data: {
          username: context.state.username, // 또는 매개변수로 전달받아서 사용
          password1: password.password1,
          password2: password.password2,
        }
      })
        .then(res => {
          context.commit('SAVE_TOKEN', res.data.key)
        })
    }
  },
  modules: {
  }
})
