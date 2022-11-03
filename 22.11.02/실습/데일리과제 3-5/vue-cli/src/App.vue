<template>
  <div id="app">
    <h1>App</h1>
    <input type="text" v-model="appData">
    <p>parentData: {{parentData}} </p>
    <p>childData: {{childData}} </p>
    <AppParent :app-data="appData"
    :parent-data="parentData"
    @parent-input="parentInput"
    @child-input="childInput"
    />
  </div>
</template>

<script>
import AppParent from './components/AppParent.vue'

export default {
  name: 'App',
  components: {
    AppParent,
  },
  data() {
    return {
      appData: null,
      parentData: null,
      childData: null,
    }
  },
  methods: {
    parentInput(data) {
      this.parentData = data
    },
    childInput(data) {
      this.childData = data
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
