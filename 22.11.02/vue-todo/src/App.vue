<template>
  <div id="app">
    <TodoList :todos="todos" @delete-todo="deleteTodo"/>
    <TodoForm @create-todo="createTodo"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList,
  },
  methods: {
    createTodo: function (data) {
      this.todos.push({title: data})
    },
    deleteTodo: function(todo) {
      const index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    }
  },
  data: function () {
    return {
      todos: []
    }
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
