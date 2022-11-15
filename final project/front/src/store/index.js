import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    randomMovie: null,
    wantMovies: [],
    genres: [],
  },
  getters: {
    
  },
  mutations: {
    getMovies(state, movies) 
    {
      state.movies.push(...movies)
    },
    CREATELIST(state, newList) {
      state.wantMovies.push({title: newList, checked: false})
    },
    RANDOMMOVIE (state) {
      state.randomMovie = _.sample(state.movies)
    },
    CHOICE(state, wantMovie){
      state.wantMovies = state.wantMovies.map(movie => {
        if (movie === wantMovie) {
          movie.checked = !movie.checked
        }
        return movie
      })
    },
    GETGENRES(state, genres){
      state.genres = genres
    }

  },
  actions: {
    
    getMovies({commit}) {
      for (let i=1; i<15; i++){
        axios({
          url: 'https://api.themoviedb.org/3/movie/top_rated',
          params: {
            api_key:'0fc7f1658c45ada90832b6e9445557bd',
            language: 'ko-kr',
            page: i
          }
        })
          .then(res => {
            commit('getMovies', res.data.results)
          })
      }
    },
    getGenres({commit}){
      axios({
        url: 'https://api.themoviedb.org/3/genre/movie/list',
        params: {
          api_key:'0fc7f1658c45ada90832b6e9445557bd',
          language: 'ko-kr',
        }
      })
        .then(res => {
          commit('GETGENRES', res.data.genres)
        })

    },
    createList({commit, state}, newList){
      if (newList) {
        let flag = false
        state.wantMovies.forEach(movie => {
          if (movie.title === newList){
            flag = true
            return
          }
        })
        if (flag){
          alert('이미 WatchList에 포함되어 있습니다!')
          return
        }

        commit('CREATELIST', newList)
      }
    },
    randomMovie({commit}) {
      commit('RANDOMMOVIE')
    },
    choice({commit}, wantMovie){
      commit('CHOICE', wantMovie)
    }
  },
  modules: {
  }
})
