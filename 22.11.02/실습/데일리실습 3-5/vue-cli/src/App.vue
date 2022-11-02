<template>
  <div>
    <h1>App</h1>
    <input type="text" v-model="number" @keyup.enter="throwing">
    <AppParent :my-props="number">
  </div>
</template>

<script>
import AppParent from './components/AppParent.vue'

export default {
  name: 'App',
  data: function () {
    return {
      number: null,
    }
  },
  components: {
    AppParent,
  },
  // methods: {
  //   throwing: function() {
  //     number
  //   }
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
