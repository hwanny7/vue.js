import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)
const API_URL = 'http://127.0.0.1:8000'

export default new Vuex.Store({
  state: {
    token: null,
    user: null, // user 정보를 객체로 받아온다. 
    articles: [], // 빈리스트여도 false는 아니다.
    article: {}, // 다른 component와 공유하기 위해 저장해둔다.
  },
  getters: {
    isLogin: (state) => state.token ? true : false,
    authHead: (state) => ({ Authorization: `Token ${state.token}` }), //객체일 때는 대괄호로 묶어준다.
    user: (state) => state.user,
    articles: (state) => state.articles,
    article: (state) => state.article,
    isAuthor: (state) => state.user?.username === state.article.username,
  },
  mutations: {
    SET_TOKEN: (state, token) => state.token = token,
    SET_USER: (state, user) =>  state.user = user,
    SET_ARTICLES: (state, articles ) => state.articles = articles,
    SET_ARTICLE: (state, article) => state.article = article,
  },
  actions: {
    signUp( {commit}, payload) {
      axios({
        method: 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {...payload}
      })
        .then(res => {
          commit('SET_TOKEN', res.data.key)
          router.push({name: 'ArticleView'})
        })
        .catch(err => {
          const status = err.response.status
          if (status === 400) {
            alert('잘못 입력하셨습니다.')
          }
        })
    },
    login( {commit, dispatch }, { username, password }) {
      const payload = { username, password }
      console.log(payload)
      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: payload
      })
        .then(res => {
          commit('SET_TOKEN', res.data.key)
          dispatch('getUserInfo')
          router.push({ name: 'ArticleView' })
        })
        .catch(err => {
          const status = err.response.status
          if (status === 400) {
            alert('잘못 입력하셨습니다.')
          }
        })
    },
    logout( {commit, getters} ) { // contect 안에 commit과 getters이 포함되어 있으니까 중괄호로 같이 묶어야함
      axios({
        url: `${API_URL}/accounts/logout/`,
        method: 'post',
        headers: getters.authHead
      })
        .then(res => {
          console.log(res)
          commit('SET_TOKEN', null)
          commit('SET_USER', null) //유저와 token 초기화
        })
        .catch(err => {
          console.log(err)
        })
    },
    getUserInfo( {commit, getters} ) {
      axios({
        url: `${API_URL}/accounts/user/`,
        method: 'get',
        headers: getters.authHead,
      })
        .then(res => {
          console.log(res)
          commit('SET_USER', res.data)
        })
    },
    //==========================================
    createArticle({ getters }, payload) { //django에서 request.user 를 통해서 자동으로 id값을 저장함
      axios({
        url: `${API_URL}/api/v1/articles/`,
        method: 'post',
        data: {...payload}, // 그냥 payload 넣어도 되는데, 이렇게 하는 게 안전한 듯?
        headers: getters.authHead,
      })
        .then(res => {
          console.log(res.data)
          router.push({ name: 'ArticleView' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    getArticles({ commit}) {
      axios({
        url: `${API_URL}/api/v1/articles/`,
      })
        .then(res => {
          console.log('hi')
          commit('SET_ARTICLES', res.data)
        })
        .catch(err => console.log(err))
    },
    getArticleDetail({ commit }, articleId ) { // updateview와 detailview에서 공유해서 쓴다.
      axios({
        url: `${API_URL}/api/v1/articles/${articleId}`,
      })
        .then(res => {
          commit('SET_ARTICLE', res.data)
        })
        .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
