import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [
      {
        title: '아메리카노',
        price: 3000,
        selected: false,
        image: '<https://source.unsplash.com/featured/?americano'
      }
    ],
    sizeList: [
      {
        name: 'small',
        price: 500,
        selected: false
      }
    ],
  },
  getters: {
  },
  mutations: {
    addOrder(state) {
      ## 이 부분 써야함
    },
    updateMenuList(state, selectedMenu) {
      state.menuList.map((menu) => {
        if (menu.title == selectedMenu){
          menu.selected = !menu.selected
        }
      })
    },
    updateSizeList(state, selectedSize) {
      state.sizeList.map((size) => {
        if (size.name == selectedSize){
          size.selected = !size.selected
        }
      })
    },
  },
  actions: {
  },
  modules: {
  }
})