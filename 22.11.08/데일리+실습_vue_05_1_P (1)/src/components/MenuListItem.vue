<template>
  <div>
    <button style="color:black" type="button" class="btn btn-outline-secondary box" @click="updateMenuStatus"
    :class="{buttonColor:menu.selected}"
    ><img :src="menu.image" id=image>
    {{menu.title}} {{menu.price}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
  methods: {
    updateMenuStatus() {
      this.$store.dispatch('updateMenuStatus', this.menu)
    }
  }
}
</script>

<style>
#image {
  height: 50px;
  width: 50px;
}
.box {
  width: 300px
}
.buttonColor {
  background-color: gray;
}
</style>