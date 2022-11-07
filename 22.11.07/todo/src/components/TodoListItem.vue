<template>
  <div> 
    <span @click="updateTodoStatus" :class='{is_completed : todo.isCompleted}'>{{todo.title}}</span>
    <button @click="deleteTodo">Delete</button>

  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    deleteTodo() {
      this.$store.dispatch('deleteTodo', this.todo)
    },
    updateTodoStatus() {
      this.$store.dispatch('updateTodoStatus', this.todo)
    }
  }
}
</script>

<style>
  .is_completed {
    text-decoration: line-through
  }
</style>