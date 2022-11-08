<template>
  <div class="justify-content-start" v-if="totalOrderCount && totalOrderPrice">
    <div>
      <h1>주문내역</h1>
    </div>
    <div>
      <h1>총 {{totalOrderCount}}건: {{totalOrderPrice}}</h1>
      <OrderListItem
      v-for="(order, index) in orderList"
      :key="index"
      :order="order"
      />
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
  computed: {
    orderList() {
      console.log(this.$store.state.orderList)
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