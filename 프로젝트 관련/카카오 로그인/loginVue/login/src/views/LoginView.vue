<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
        <div>
            <label for="id">아이디: </label>
            <input type="text" v-model="username">
        </div>
        <div>
            <label for="password">비밀번호: </label>
            <input type="password" v-model="password">
        </div>
        <input type="submit" value="로그인">

    </form>
    <img src="@/assets/kakao_login.png" @click="kakaoLogin">
  </div>
</template>

<script>
window.Kakao.init('39caf5e8e7fed0bce24af6168049aae6')

export default {
    name: 'LoginView',
    data() {
      return {
        username: null,
        password: null,
      }
    },
    methods: {
      kakaoLogin() {
        window.Kakao.Auth.login({
          scope: 'account_email, profile_image',
          success: (res) => {
            console.log(res)
            window.Kakao.API.request({
              url: '/v2/user/me',
              success: (res) => {
                const username = res.kakao_account.email
                const imgUrl = res.kakao_account.profile.profile_image_url
                this.$store.dispatch('kakaoSave', {username, imgUrl})
                this.$router.push({name : 'SignUpView'})
              }
            })
          }
        })
      },
      login() {
        const username = this.username
        const password = this.password
        this.$store.dispatch('login', { username, password })
      }
    }
}
</script>

<style>

</style>