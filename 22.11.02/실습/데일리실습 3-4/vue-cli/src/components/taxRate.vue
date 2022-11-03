<template>
  <div>
    <hr>
    <h2>산출세액: {{cal()}} 만원</h2>
    <h2>세액감면: (-) {{taxReduction}} 만원</h2>
    <FinalTax :final="cal() - taxReduction"/>
  </div>
</template>

<script>
import FinalTax from '@/components/FinalTax'
export default {
  name: "taxRate",
  components: {
    FinalTax
  },
  props: {
    taxReduction: null,
    standard: null,
  },
  methods: {
    cal() {
      let before
      if (this.standard > 100000){
        before = (this.standard * 0.45) - 6540
      } else if (this.standard > 50000){
        before = (this.standard * 0.42) - 3540
      } else if (this.standard > 30000){
        before = (this.standard * 0.40) - 2540
      } else if (this.standard > 15000){
        before = (this.standard * 0.38) - 1940
      } else if (this.standard > 8800){
        before = (this.standard * 0.35) - 1490
      } else if (this.standard > 4600){
        before = (this.standard * 0.24) - 522
      } else if (this.standard > 1200){
        before = (this.standard * 0.15) - 108
      }
      return Math.round(before)
    }
  }
}
</script>

<style>

</style>