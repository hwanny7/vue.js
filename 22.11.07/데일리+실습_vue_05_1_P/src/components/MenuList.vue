<template>
  <div class="menu-list">
    <h1>1. 음료를 고르세요.</h1>
    <h1>안녕하세요</h1>
    <!-- <h1>{{menuList}}</h1> -->
  </div>
</template>

<script>
console.log('hi')
export default {
  name: 'MenuList',
  components: {
    MenuListItem
  },
  computed: {
    menuList() {
      console.log(this.$store.state.menuList)
      return this.$store.state.menuList
    },
  },
  methods: {
    selectMenu: function () {},
  },
}
</script>

<style>

</style>