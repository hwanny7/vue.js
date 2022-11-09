<template>
  <div style="color:black" class="btn btn-outline-secondary justify-content-between align-items-center d-flex flex-row mt-4 buttonSize">
    <span>{{option.type}} </span>
    <div class="d-flex flex-row justify-content-between align-items-center">
      <button class="btn btn-warning smallButton" @click="decrease">-</button>
      <div>{{option.count}}</div>
      <button class="btn btn-warning smallButton" @click="increase">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionListItem',
  props: {
    option: Object,
  },
  methods: {
    increase() {
      const obj = {option:this.option, num: 1}
      this.$store.dispatch('count', obj)
    },
    decrease() {
      const obj = {option:this.option, num: -1}
      this.$store.dispatch('count', obj)
    },
  },
}
</script>

<style>
.buttonSize {
  width: 300px;
  height: 62px;
}
.smallButton {
  border-radius: 70%;
}
</style>