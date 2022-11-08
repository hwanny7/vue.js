<template>
  <div style="color:black" class="btn btn-outline-secondary box justify-content-evenly d-flex flex-row">
    <span>{{option.type}} </span>
    <div>
      <button @click="decrease">-
      </button>
      <button @click="increase">+</button>
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
.box {
  width: 300px
}
</style>