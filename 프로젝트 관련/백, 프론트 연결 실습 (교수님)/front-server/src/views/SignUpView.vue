<template>
  <div>
    <h2>회원가입</h2>
    <form @submit.prevent="signUp">
      <label for="username">username: </label>
      <input type="text" id="username" v-model="username"> <br>

      <label for="password1">password1: </label>
      <input type="password" id="password1" v-model="password1"> <br>

      <label for="password2">password2: </label>
      <input type="password" id="password2" v-model="password2"> <br>

      <input type="submit">
    </form>
  </div>
</template>

<script>

export default {
  name: 'SignUpView',
  data() {
    return {
      username: null,
      password1: null,
      password2: null,
    }
  },
  methods: {
    signUp() {
      const username = this.username
      const password1 = this.password1
      const password2 = this.password2
      const payload = {
        username, password1, password2
      }
      this.$store.dispatch('signUp', payload)
    }
  }
}
</script>

<style>

</style>