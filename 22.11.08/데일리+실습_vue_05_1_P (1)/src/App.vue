<template>
  <div id="app">
    <h1 class="mb-5 mt-5">Coffee Order App</h1>
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
    <button type="button" class="btn btn-success buttonBox" @click="addOrder">장바구니 담기</button>
    <div class='d-flex justify-content-center'>
      <OrderList/>
    </div>

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
  border-radius: 5%;
  width: 350px;
  height: 350px;
}
.buttonBox {
  width: 1500px;
  margin: 30px;
  height: 50px;
}
</style>
