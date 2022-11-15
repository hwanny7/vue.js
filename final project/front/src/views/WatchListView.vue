<template>
  <div class ="d-flex flex-row justify-content-center mt-5">
    <div class="card" style="width: 95rem;">
      <div class="card-body bg-success bg-opacity-25">
        <h2 class="card-title">보고싶은 영화</h2>
        <input id="new" type="text" v-model.trim='newList' @keyup.enter='createList(newList), newList=null'>
        <button type="button" class="btn btn-warning mx-3" @click='createList(newList), newList=null'>Add</button>
      </div>
      <div v-for="(wantMovie, index) in wantMovies" :key="index" class="list-group-item py-1" :id="index"
        :class="{ checked:wantMovie.checked, odd:index%2 }"
        @click="choice(wantMovie)"
        >
        {{ wantMovie.title }}
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "WatchListView",
  data() {
    return {
      newList: null
    }
  },
  methods: {
    ...mapActions(['createList','choice']),
    wantMovie(){
      return this.$store.state.wantMovie
    },
  },
  computed:{
    wantMovies() {
      return this.$store.state.wantMovies
    }
  },

}
</script>

<style>
.checked{
  text-decoration: line-through;
  background-color: gray;
  opacity: 0.2;
}
.odd{
  background-color: beige;
}

</style>