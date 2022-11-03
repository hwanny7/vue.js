<template>
  <div>
    <input type="text"
      v-model.trim="query"
      @keyup.enter='onInputChange'
    >
    <button type="button" class="btn btn-primary">검색</button>
  </div>
</template>

<script>
export default {
  name: "searchBar",
  data() {
    return {
      query: '',
    }
  },
  methods: {
    onInputChange(){
      if (!this.query) return //빈문자열일 경우
      this.$emit('input-change', this.query)
    }
  }
}
</script>

<style>

</style>