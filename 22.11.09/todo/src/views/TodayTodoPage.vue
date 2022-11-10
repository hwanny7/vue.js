<template>
    <div class='border border-dark rounded-3 mx-2'>
      <div class="mx-4 mt-3">
        <div class="text-start"><h1>오늘 할일</h1></div>
        <hr>
      </div>
      <div class='text-start border border-dark rounded-3 mx-2 mt-3 d-flex flex-row' v-for="todo in todayTodo"
      :key="todo.id"
      >
      <div class="mx-1">{{todo.content}}</div>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'TodayTodoPage',
    computed: {
      ...mapGetters('todo', [
        'todayTodo'
      ])
    }
}
</script>

<style>

</style>