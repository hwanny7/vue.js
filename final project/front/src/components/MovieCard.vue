<template>
  <div class='col'>
    <div class="card mx-3 mouse" style="width: 18rem; height: 700px">
      <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" class="card-img-top" alt="">
       <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
      <p class="card-text cardStyle">{{movie.overview.slice(0, 100) + '....'}}</p>
      <button type="button" class="btn btn-info button" @click="createList(movie.title)">Watch List +</button>
    </div>
  </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "MovieCard",
  props: {
    movie: Object,
  },
  methods: {
    ...mapActions(['createList']),
  },
}
</script>

<style>
.mouse:hover {
  background-color: lightgray;
}

.button {
  position: absolute;
  bottom: 10px;
}


</style>