<template>
  <div>
    <button style="color:black" type="button" class="btn btn-outline-secondary box2 d-flex flex-row justify-content-between mt-4 align-items-center" @click="updateSizeStatus"
    :class="{buttonColor:size.selected}">
    <div>
      {{size.name}}
    </div>
    <div>
    </div>
      {{size.price}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
  methods: {
    updateSizeStatus() {
      this.$store.dispatch('updateSizeStatus', this.size)
    }
  },
}
</script>

<style>
.box2 {
  width: 300px;
  height: 64px;
}
.buttonColor {
  background-color: gray;
}
</style>