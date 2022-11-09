<template>
  <div>
    <h2 class="mt-3">2. 사이즈를 고르세요.</h2>
    <div class="d-flex flex-column align-items-center">
      <SizeListItem
        v-for="(size, index) in sizeList"
        :key="index"
        :size="size"
      />
    </div>
  </div>
</template>

<script>
import SizeListItem from '@/components/SizeListItem'
export default {
  name: 'SizeList',
  components: {
    SizeListItem,
  },
  methods: {
    onSelectMenu: function () {},
  },
  computed: {
    sizeList() {
      return this.$store.state.sizeList
    },
  },
}
</script>

<style>
</style>