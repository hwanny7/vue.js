<template>
  <div>
    <img :src="order.menu.image" id="image">
    {{order.menu.title}}
    {{order.size.name}}
    {{totalPrice}}
    <div v-for="option, index in order.option"
    :key="index">
    {{option.type}} {{option.count}} 
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderListItem',
  props: {
    order: Object,
  },
  computed: {
    totalPrice() {
      return this.order.menu.price + this.order.size.price
    },
  },
}
</script>

<style>
#image {
  height: 50px;
  width: 50px;
}
</style>