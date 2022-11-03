<template>
  <div>
    <hr>
    <h2>결정세액: {{final}} 만원</h2>
  </div>
</template>

<script>
export default {
  name: "FinalTax",
  props: {
    final: null
  }
}
</script>

<style>

</style>