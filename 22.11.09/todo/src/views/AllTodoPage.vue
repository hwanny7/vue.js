<template>
  <div class="mt-5 d-flex flex-row justify-content-between container todoBox">
    <div class='col-3 border border-dark rounded-3 mx-2 d-flex justify-content-center'>
      <div class='mt-5'>
        <div @click='AllTodoPage'><h1 class="text-success">모든</h1></div>
        <div><h1>오늘</h1></div>
        <div><h1>중요</h1></div>
      </div>
    </div>
    <div class='col-9 border border-dark rounded-3 mx-2'>
      <div class="mx-2 mt-3">
        <div class="text-start"><h1>모든 할일</h1></div>
        <form @submit.prevent>
          <input type="submit" value="+" @click="Create">
          <input type="text" v-model="Input">
        </form>
      </div>
      <hr>
      <div class='text-start border border-dark rounded-3 mx-2 mt-3 d-flex flex-row' v-for="(todo, title) in allTodo"
      :key="title"
      >
      <div class="form-check mx-1">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
        <label class="form-check-label" for="flexCheckChecked">
        </label>
      </div>
      <div class="mx-1">{{todo.content}}</div>
      <div class="ms-auto mx-3"><span class="fa fa-star checked"></span></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'AllTodoPage',
  data() {
    return {
      Input: null,
    }
  },
  computed: {
    ...mapState('todo', {
      allTodo: state => state.allTodo
    }),
  },
  methods: {
    ...mapMutations('todo', [
      'CreateTodo'
    ]),
    AllTodoPage() {
      console.log(this.$route.name)
      if (this.$route.name != 'AllTodoPage'){
        this.$router.push('/')
      } else alert ('현재 페이지를 클릭하셨습니다.')
    },
    Create() {
      this.CreateTodo(this.Input)
      this.Input = null
    },
  }
}
</script>

<style>
  .todoBox {
    height: 500px;
  }
  .checked {
    color: orange ;
  }
</style>
