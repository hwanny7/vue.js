import Vue from 'vue'
import VueRouter from 'vue-router'
import AllTodoPage from '../views/AllTodoPage.vue'
import TodayTodoPage from '../views/TodayTodoPage.vue'
import ImportantTodoPage from '../views/ImportantTodoPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AllTodoPage',
    component: AllTodoPage
  },
  {
    path: '/today',
    name: 'TodayTodoPage',
    component: TodayTodoPage,
  },
  {
    path: '/imporant',
    name: 'ImportantTodoPage',
    component: ImportantTodoPage,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
