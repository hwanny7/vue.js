<template>
  <div>
    <TodoListItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
    />
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'
import {mapState} from 'vuex'

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  computed: {
    ...mapState([
      'todos',
    ])
  },
}
</script>

<style>

</style>
