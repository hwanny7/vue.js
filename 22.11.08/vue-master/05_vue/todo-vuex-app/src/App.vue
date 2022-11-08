<template>
  <div id="app">
    <h1>Todo List</h1>
    <h2>모든 Todo 개수: {{ allTodosCount }}</h2>
    <h2>완료된 Todo 개수: {{ completedTodosCount }}</h2>
    <h2>미완료된 Todo 개수: {{ unCompletedTodosCount }}</h2>
    <TodoList/>
    <TodoForm/>
    <!-- <button @click="loadTodos">Todo 불러오기</button> -->
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import TodoForm from '@/components/TodoForm'
import {mapGetters} from 'vuex'     //Getters에서 객체를 반환해준다. 

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm,
  },
  computed: {
    ...mapGetters([                 //바인딩 헬퍼
      'allTodosCount', 
      'completedTodosCount', 
      'unCompletedTodosCount'
      ])
  },
  methods: {
    loadTodos() {
      this.$store.dispatch('loadTodos')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
