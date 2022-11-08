<template>
  <div class="menu-list" >
    <div>
      <h1>1. 음료를 고르세요.</h1>
      <MenuListItem
      v-for="(menu, index) in menuList"
      :key="index"
      :menu="menu"
      />
    </div>
  </div>
</template>

<script>
import MenuListItem from '@/components/MenuListItem'


export default {
  name: 'MenuList',
  components: {
    MenuListItem
  },
  computed: {
    menuList() {
      return this.$store.state.menuList
    },
    sizeList() {
      return this.$store.state.sizeList
    }
  },
  methods: {
    selectMenu: function () {},
  },
}
</script>

<style>

</style>