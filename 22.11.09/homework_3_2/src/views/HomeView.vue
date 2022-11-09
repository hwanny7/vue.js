<template>
  <div class="home">
    <h1>점심메뉴</h1>
    <button @click='randomPick'>Pick Lunch</button>
    <div>{{choice}}</div>
    <h1>로또를 뽑아보자</h1>
    <button @click="lotto">Pick Lotto</button>
  </div>
</template>

<script>
// @ is an alias to /src
import _ from 'lodash'


export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      lunch: ['국밥', '떡볶이', '라면', '비빔밥'],
      choice: null,
    }
  },
  methods: {
    randomPick() {
      this.choice = _.sample(this.lunch)
    },
    lotto() {
      this.$router.push({ name : 'about'})
    }
  }
}
</script>
