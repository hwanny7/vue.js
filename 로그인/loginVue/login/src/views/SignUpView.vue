<template>
  <div>
    <h1>회원가입</h1>
    <form @submit.prevent="signUp">
      <label for="">아이디: </label>
      <input type="text" :value="getUsername"> <br>
      <label for="">비밀번호: </label>
      <input type="password" v-model="password1"> <br>
      <label for="">비밀번호: </label>
      <input type="password" v-model="password2"> <br>
      <input type="submit" value="가입하기">
    </form>
  </div>
</template>

<script>

export default {
    name: 'SignUpView',
    data() {
      return {
        password1: null,
        password2: null,
      }
    },
    computed: {
      getUsername() {
        return this.$store.getters.username
      }
    },
    methods: {
      signUp() {
        const password1 = this.password1
        const password2 = this.password2
        this.$store.dispatch('signUp', {password1, password2})
      }
    }
}
</script>

<style>

</style>