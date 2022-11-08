<template>
  <div>
    <span 
      @click="updateTodoStatus(todo)"
      :class="{ 'is-completed': todo.isCompleted }"
    >
      {{ todo.title }}
    </span>
    <button @click="deleteTodo(todo)">Delete</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    ...mapActions([
      'deleteTodo',
      'updateTodoStatus',
    ])
  }
}
</script>

<style>
  .is-completed {
    text-decoration: line-through;
  }
</style>
