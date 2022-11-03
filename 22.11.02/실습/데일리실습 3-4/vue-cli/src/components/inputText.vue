<template>
  <div>
    <div>
      <p>연봉 입력 (만원):
        <input type="number" v-model.number="income">
      </p>
    </div>
    <div>
      <p>세액감면액 (만원):
        <input type="number" v-model.number="taxReduction">
      </p>
    </div>
    <hr>
    <h2>종합소득금액: {{income}} 만원</h2>
    <h2>종합소득공제: (-) 150 만원</h2>
    <h2>과세표준: {{cal()}} 만원</h2>
    <taxRate :tax-reduction="taxReduction"
    :standard="standard"
    />
  </div>
</template>

<script>
import taxRate from "@/components/taxRate"

export default {
  components: {
    taxRate
  },
  name: "inputText",
  data() {
    return {
      income: null,
      taxReduction: null,
      standard: null,
    }
  },
  methods: {
    cal() {
      this.standard = this.income - 150 >= 0 ? this.income - 150 : 0
      return this.standard
    }
  }
}
</script>

<style>

</style>