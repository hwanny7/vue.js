<template>
  <div class="mt-4">
      <h5>
      <label for="" class="me-2">장르 선택: </label>
      <select v-model="gr">
        <option value="all">전체</option>
        <option v-for="genre in genres" :key='genre.id' :value="genre.id">{{ genre.name }}</option>
      </select>
      </h5>
      <div v-if="(genreMovies.length===0)" style="text-align: center" class="mt-5"><h2>조건에 맞는 영화가 없습니다.</h2></div>
      <div class='d-flex flex-wrap mt-5'>
        <MovieCard
        v-for="(movie, index) in genreMovies"
        :key="index"
        :movie="movie"
        class = 'd-flex justify-content-evenly mt-3 mb-5'
        />
      </div>
    </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'

export default {
  name: 'MovieView',
  data() {
    return {
      gr: 'all'
    }
  },

  components: {
    MovieCard
  },
  computed: {
    movies() {
      return this.$store.state.movies
    },
    genres(){
      return this.$store.state.genres
    },
    genreMovies(){
      return this.movies.filter(movie => {
        if (this.gr ==='all'){
          return true
        } else if (movie.genre_ids.includes(this.gr)){
          return movie
        }
      })
    }
    
  },
  
}
</script>

<style>

</style>