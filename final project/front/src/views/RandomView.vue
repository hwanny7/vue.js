<template>
  <div>
    <button class="btn btn-success mt-3" @click="clickBtn">PICK</button>
    <h2 v-if="weather" class="mt-3">{{weather}} 날씨에는 이런 영화는 어때요?</h2>
    <div class ="d-flex flex-row justify-content-center">
      <div v-if="movie" class="card mt-3" style="width: 30rem;">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie?.poster_path" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">{{ movie?.title }}</h5>
            <p class="card-text">{{ movie?.overview }}</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import axios from 'axios'

export default {
  name: "RandomView",
  data() {
    return {
    movie: null,
    weather: null,
    }
  },
  methods: {
    ...mapActions([
      'randomMovie'
    ]),
    clickBtn() {
      this.randomMovie()
      this.movie = this.$store.state.randomMovie
      axios({
        url: 'https://api.openweathermap.org/data/2.5/weather/',
        params: {
          q: 'Daejeon',
          APPID: '538403fb20359bbc680586a8057bcfff'
        }
      })
        .then(res => {
          this.weather = res.data.weather[0].description
        })
    }

  },

}
</script>

<style>

</style>