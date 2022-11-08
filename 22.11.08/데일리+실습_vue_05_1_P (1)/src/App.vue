<template>
  <div id="app">
    <h1>Coffee Order App</h1>
    <div class="d-flex justify-content-evenly">
    <div class="menuBox">
      <MenuList/>  
    </div>
    <div class="menuBox">
      <SizeList/>    
    </div>
    <div class="menuBox">
      <OptionList/>
    </div>
    </div>
    <button class="buttonBox" @click="addOrder">장바구니 담기</button>
    <OrderList/>
  </div>
</template>

<script>
import MenuList from './components/MenuList.vue'
import SizeList from './components/SizeList.vue'
import OrderList from './components/OrderList.vue'
import OptionList from '@/components/OptionList.vue'


export default {
  name: 'App',
  components: {
    MenuList,
    SizeList,
    OrderList,
    OptionList,
  },
  methods: {
    addOrder() {
      this.$store.dispatch('addOrder')
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
  text-align: center;
}

ul {
  list-style: none;
}

.menuBox {
  border: solid 1px black;
  height: 400px;
}
.buttonBox {
  width: 860px;
}
</style>
