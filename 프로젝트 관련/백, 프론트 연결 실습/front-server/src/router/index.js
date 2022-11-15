import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUpView from '@/views/SignUpView'
import ArticleView from '@/views/ArticleView'
import LoginView from '@/views/LoginView'
import CreateView from '@/views/CreateView'
import DetailView from '@/views/DetailView'
import UpdateView from '@/views/UpdateView'







Vue.use(VueRouter)

const routes = [
  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView
  },
  {
    path: '/',
    name: 'ArticleView',
    component: ArticleView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/create',
    name: 'CreateView',
    component: CreateView
  },
  {
    path: '/:id', //:id만 단독으로 쓰면 앞에 있는 것을 다 먹어 버리기 때문에 중간에 구분자를 넣어줘야 한다.
    name: 'DetailView',
    component: DetailView
  },
  {
    path: '/update',
    name: 'UpdateView',
    component: UpdateView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
