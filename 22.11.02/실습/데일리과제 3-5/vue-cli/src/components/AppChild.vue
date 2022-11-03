<template>
  <div>
    <h1>AppChild</h1>
    <input type="text" @input="inputChange">
    <p>AppData: {{appData}}</p>
    <p>parentData: {{ parentData }}</p>
    <p>Appchild: {{appChild}} </p>
  </div>
</template>

<script>
export default {
  name: "AppChild",
  data() {
    return {
      appChild: null,
    }
  },
  props: {
    appData: String,
    parentData: String,
  },
  methods: {
    inputChange() {
      this.$emit('child-input', event.target.value)
      this.appChild = event.target.value
    }
  }
}
</script>

<style>

</style>