<template>
  <div>
    <button style="color:black" type="button" class="btn btn-outline-success box d-flex flex-row justify-content-between mt-4 align-items-center" @click="updateMenuStatus"
    :class="{buttonColor:menu.selected}"
    >
    <div>
      <img :src="menu.image" id=image>
    </div>
    <div>
        {{menu.title}}
    </div>
    <div>
      {{menu.price}}
    </div>
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
  background-color: green;
}
</style>