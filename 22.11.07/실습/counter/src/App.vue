<template>
  <div id="app">
    <h1>counter app</h1>
    <h3>counter: {{counter}} </h3>
    <h3>counter * 2: {{doubleCounter}}</h3>
    <button @click="increase" >increase</button>
    <button @click="decrease" >decrease</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    increase() {
      this.$store.dispatch('increase')
      console.log('hi')
    },
    decrease() {
      this.$store.dispatch('decrease')
    }
  },
  computed: {
    counter() {
      return this.$store.state.count
    },
    doubleCounter() {
      return this.$store.getters.doubleCounter
    }

  }
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
