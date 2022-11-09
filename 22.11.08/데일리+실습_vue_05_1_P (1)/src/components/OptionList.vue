<template>
  <div>
    <h2 class="mt-3">3. 옵션을 고르세요.</h2>
    <div class="d-flex flex-column align-items-center">
      <OptionListItem
      v-for="(option, index) in optionList"
      :key="index"
      :option="option"
      />
    </div>
  </div>
</template>

<script>
import OptionListItem from '@/components/OptionListItem'

export default {
  name: 'OptionList',
  components: {
    OptionListItem,
  },
  computed: {
    optionList() {
      return this.$store.state.optionList
    },
  },
  // methods: {
  //   increase: function () {
  //   },
  //   decrease: function () {
  //   },
  // },
}
</script>

<style>

</style>