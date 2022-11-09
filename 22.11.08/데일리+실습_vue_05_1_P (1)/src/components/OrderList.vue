<template>
  <div class="bg-success text-dark bg-opacity-25 rounded-4 px-3 py-3" style="width: 1500px;" v-if="totalOrderCount && totalOrderPrice">
    <div>
      <div>
        <h1 class="text-start">주문 내역</h1>
        <h5 class="mt-3 text-start">총 {{totalOrderCount}}건: {{totalOrderPrice}}원</h5>
      </div>
      <div>
        <OrderListItem
        v-for="(order, index) in orderList"
        :key="index"
        :order="order"
        />
      </div>
    </div>
  </div>
</template>

<script>
import OrderListItem from '@/components/OrderListItem'

export default {
  name: 'OrderList',
  components: {
    OrderListItem,
  },
  data(){
    return {
      optionPrice: 0
    }
  },
  computed: {
    orderList() {
      return this.$store.state.orderList
    },
    totalOrderCount() {
      return this.$store.getters.totalOrderCount
    },
    totalOrderPrice() {
      return this.$store.getters.totalOrderPrice
    },
  },
}
</script>

<style>
</style>