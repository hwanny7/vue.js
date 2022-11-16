<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
        <label for="id">아이디: </label>
        <input type="text" v-model="username">
        <input type="password" v-model="password">
        <input type="submit" value="login">
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LoginView',
    data() {
      return {
        username: null,
        password: null,
      }
    },
    methods: {
      login() {
      console.log('hi')
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/login/',
        data: {
          username: this.username,
          password: this.password,
        }
      })
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
}
</script>

<style>

</style>