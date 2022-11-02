<template>
  <div class="about">
    <HomeView/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeView from './HomeView.vue'

export default {
  name: 'AboutView',
  components: {
    HomeView
  }
}
</script>

<style>
.scoped-box{
  background-color: blueviolet;
}
</style>