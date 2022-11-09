import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    article_id: 3,
    articles: [
      {
        id: 1,
        title: '디지몬',
        content: '안녕 디지몬',
        createdAt: new Date().getTime(),
      },
      {
        id: 2,
        title: '디지몬',
        content: '안녕 디지몬',
        createdAt: new Date().getTime(),
      }
    ]
  },
  getters: {
  },
  mutations: {
    createArticle(state, article) {
      state.articles.push(article)
      state.article_id = state.article_id + 1
    },
    DELETE_ARTICLE(state, article_id) {
      state.articles = state.articles.filter((article) => {
        return !(article.id === article_id)
      })
    },
  },
  actions: {
    createArticle(context, payload) {
      const article = {
        id: context.state.article_id,
        title: payload.title,
        content: payload.content,
        createAt: new Date().getTime()
      }
      context.commit('createArticle', article)
    }
  },
  modules: {
  }
})
