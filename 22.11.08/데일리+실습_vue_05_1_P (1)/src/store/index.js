import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalPrice: null,
    optionList: [
      {
        type:'샷',
        price: 500,
        count: 0,
      },
      {
        type:'바닐라 시럽',
        price: 1000,
        count: 0,
      },
      {
        type:'카라멜 시럽',
        price: 1500,
        count: 0,
      }
    ],
    orderList: [
    ],
    menuList: [
      {
        title: '아메리카노',
        price: 3000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?americano'
      },
      {
        title: '라떼',
        price: 4000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?latte',
      },
      {
        title: '카페라떼',
        price: 4000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?kapuchino',
      }
    ],
    sizeList: [
      {
      name: 'Tall',
      price: 500,
      selected: false
    },
    {
      name: 'Grande',
      price: 1000,
      selected: false
    },
    {
      name: 'Venti',
      price: 1500,
      selected: false
    }
  ],
  },
  getters: {
    totalOrderCount(state) {
      return state.orderList.length
    },
    totalOrderPrice(state) {
      state.totalPrice = 0
      state.orderList.forEach((order) => {
        state.totalPrice += order.menu.price
        state.totalPrice += order.size.price
      }
      )
      return state.totalPrice
    },
  },
  mutations: {
    updateOptionList(state, object){
      state.optionList = state.optionList.map((option) => {
        if (option === object.option) {
          option.count += object.num
          if (option.count < 0){
            option.count = 0
          }
        }
        return option
      })
    },
    addOrder(state) {
      let selected_menu = Object
      let selected_size = Object
      let check = 0
      state.menuList.forEach((menu) => {
        if (menu.selected){
          selected_menu = menu
          check += 1
        }
      })
      state.sizeList.forEach((size) => {
        if (size.selected){
          selected_size = size
          check += 1
        }
      })
      if (check == 2){
        const copy = JSON.parse(JSON.stringify(state.optionList))
        state.orderList.push({menu:selected_menu, size:selected_size, option:copy})
      } else alert('메뉴를 다 선택하십시오.')
      state.optionList = state.optionList.map((option) => {
        option.count = 0
        return option
      })
    },
    UPDATE_MENU_LIST(state, selected_menu) {
      state.menuList = state.menuList.map((menu) => {
        if (menu === selected_menu){
          menu.selected = !menu.selected
        } else menu.selected = false
        return menu
      })
    },
    UPDATE_SIZE_LIST(state, selected_size) {
      state.sizeList = state.sizeList.map((size) => {
        if (size === selected_size){
          size.selected = !size.selected
        } else size.selected = false
        return size
      })
    },
  },
  actions: {
    updateMenuStatus(context, selected_menu) {
      context.commit('UPDATE_MENU_LIST', selected_menu)
    },
    updateSizeStatus(context, selected_size) {
      context.commit('UPDATE_SIZE_LIST', selected_size)
    },
    addOrder(context) {
      context.commit('addOrder')
    },
    count(context, obj) {
      context.commit('updateOptionList', obj)
    }
  },
  modules: {
  }
})