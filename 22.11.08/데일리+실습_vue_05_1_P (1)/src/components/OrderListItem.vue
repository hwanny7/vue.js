<template>
<div>
  <div class="d-flex justify-content-between">
    <div class="d-flex mt-3">
      <div>
        <img :src="order.menu.image" id="image">
      </div>
      <div class="px-3">
        <div class="text-start">{{order.menu.title}}</div>
        <div>사이즈: {{order.size.name}}</div>
      </div>
    </div>
    <div>
      <div class="text-start">
        {{totalPrice + totalOptionPrice}}원
      </div>
      <div class="d-flex flex-row justify-content-between">
        <div class="px-1" v-for="option, index in order.option"
        :key="index">
        {{option.type}} {{option.count}}회 |
        </div> 
      </div>
    </div>
  </div>
<hr>
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
    totalOptionPrice() {
      let total = 0
      this.order.option.forEach((opt) => {
        total += opt.price * opt.count
      })
      return total
    }
  },
}
</script>

<style>
#image {
  height: 50px;
  width: 50px;
}
</style>