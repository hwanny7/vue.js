<template>
  <div>
    <h1>할 일</h1>
    <hr>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{todo.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'TodoList',
  computed:{
    ...mapState(['todos',])
  },
  methods: {
    ...mapActions(['getTodos'],)
  },
  created() {
    this.getTodos()
  },
}
</script>

<style>

</style>