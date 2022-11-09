<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{name: 'home'}">홈2</router-link>
    <button @click="toHome">홈으로!</button>
    <input type="text" @keyup.enter="toHome" v-model="text">
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {text: null}
  },
  methods: {
    toHome() {
      this.$router.push({ name: 'hello', params: {userName: this.text}})
    }
  }
}
</script>

