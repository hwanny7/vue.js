<template>
    <div class='border border-dark rounded-3 mx-2'>
      <div class="mx-4 mt-3">
        <div class="text-start"><h1>모든 할일</h1></div>
        <form @submit.prevent>
          <input type="submit" value="+" @click="Create">
          <input type="text" v-model="Input" style="width: 600px;" @click="Input = null">
        </form>
      </div>
      <hr>
      <div class='d-flex flex-column' v-for="(todo, title) in allTodo"
      :key="title"
      @click="toggle(todo.id)"
      >
      <div class='border border-dark rounded-3 mx-2 mt-3 d-flex flex-row'>
        <div class="mx-1">
          <input type="checkbox" :checked="todo.isCompleted" @click="completed(todo)">  <!--벨류부분도 적기, 체크 유지-->
        </div>
        <div class="mx-1">{{todo.content}}</div>
        <div class="ms-auto mx-3"><span class="fa fa-star" :class={check:todo.isImportant}
        @click="starChange(todo)"
        ></span></div>
      </div>
        <div class="display d-flex flex-column display" :id="todo.id">
        <button class="mx-2 mt-2 btn btn-warning opacity-75" type="submit" style="width:100px;" @click="updateTodo(todo)">수정하기</button>
        <input class='border border-dark rounded-3 mx-2 mt-3 bg-primary bg-opacity-25' type="text" style="width: 600px;" :value="todo.content">
        </div>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapActions, mapState} from 'vuex'
export default {
  name: 'AllTodoPage',
  data() {
    return {
      Input: '할 일을 작성해 주세요!',
    }
  },
  computed: {
    ...mapState('todo', {
      allTodo: state => state.allTodo
    }),
    // ...mapGetters('todo', [
    //   'allTodo'
    // ])
  },
  methods: {
    ...mapActions('todo', [
      'starChange',
      'completed',
      'updateTodo',
    ]),
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
    important() {
      this.$router.push({ name : 'ImportantTodoPage'})
    },
    toggle(id) {
      document.getElementById(id).classList.toggle('display')
    },
    // updateTodo(todo) {
    //   const text = document.getElementById(todo.id).querySelector('input').value
    //   const todoList = {todo, text}
    //   this.$store.dispatch('updateTodo', todoList)
    // }    
  },
}
</script>

<style>
  .todoBox {
    height: 450px;
  }
  .check {
    color: orange ;
  }
  .display {
    display: none !important;
  }
</style>