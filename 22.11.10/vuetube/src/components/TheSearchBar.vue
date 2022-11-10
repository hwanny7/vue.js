<template>
  <div>
    <input class="border border-primary rounded-2 border-opacity-50"
    type="text"
    @keyup.enter="inputChange"
    >
  </div>
</template>

<script>
export default {
  name: 'TheSearchBar',
  methods: {
    inputChange(event) {
      this.$emit('input-change', event.target.value)
      event.target.value = ''
    }
  }
}
</script>

<style>

</style>