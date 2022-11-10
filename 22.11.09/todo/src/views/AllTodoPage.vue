<template>
    <div class='border border-dark rounded-3 mx-2'>
      <div class="mx-4 mt-3">
        <div class="text-start"><h1>모든 할일</h1></div>
        <form @submit.prevent>
          <input type="submit" value="+" @click="Create">
          <input type="text" v-model="Input" style="width: 600px;">
        </form>
      </div>
      <hr>
      <div class='text-start border border-dark rounded-3 mx-2 mt-3 d-flex flex-row' v-for="(todo, title) in allTodo"
      :key="title"
      >
        <div class="form-check mx-1">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" @click="completed(todo)">
          <label class="form-check-label" for="flexCheckChecked">
          </label>
        </div>
        <div class="mx-1">{{todo.content}}</div>
        <div class="ms-auto mx-3"><span class="fa fa-star" :class={checked:todo.isImportant}
        @click="starChange(todo)"
        ></span></div>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
export default {
  name: 'AllTodoPage',
  data() {
    return {
      Input: null,
    }
  },
  computed: {
    // ...mapState('todo', {
    //   allTodo: state => state.allTodo
    // }),
    ...mapGetters('todo', [
      'allTodo'
    ])
  },
  methods: {
    ...mapActions('todo', [
      'starChange',
      'completed'
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
    }
  }
}
</script>

<style>
  .todoBox {
    height: 450px;
  }
  .checked {
    color: orange ;
  }
</style>