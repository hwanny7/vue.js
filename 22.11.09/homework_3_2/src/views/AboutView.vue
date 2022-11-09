<template>
  <div class="about">
    <h1>로또</h1>
    <button @click="getNumbers">Get Lucky Number</button>
    <div>{{nums}}</div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      nums: null,
    }
  },
  methods: {
    getNumbers() {
      this.nums = _.sampleSize(_.range(1, 46), 6)
    }
  }
}
</script>

