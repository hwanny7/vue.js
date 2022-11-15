<template>
  <div id="app">
    <div class="bg-white sticky-top" style="height:70px;"></div>
    <nav class="navbar navbar-expand-lg bg-primary bg-opacity-25 fixed-top" style="height:70px;">
      <div class="container-fluid">
        <router-link :to="{name : 'MovieView'}">
          <img class="mx-4" src="@/assets/movieLogo.png" alt="이미지없음" style="height:60px;">
        </router-link>
        <div class="collapse navbar-collapse d-flex flex-row justify-content-end" id="navbarNav">
        <nav>
          <router-link :to="{name : 'MovieView'}" style="text-decoration:none;">Movie</router-link> |
          <router-link :to="{name : 'RandomView'}" style="text-decoration:none;">Random</router-link> |
          <router-link :to="{name : 'WatchListView'}" style="text-decoration:none;">WatchList</router-link>
        </nav>
        </div>
      </div>
    </nav>

    <div class='row'>
      <router-view />
    </div>
  </div>
</template>


<script>
export default ({
  created() {
    this.$store.dispatch('getMovies')
    this.$store.dispatch('getGenres')
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
