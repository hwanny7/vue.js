<template>
  <div>
    <form @submit.prevent="createArticle">
      <label for="title">title: </label>
      <input type="text" v-model.trim="title"> <br>

      <label for="content">content: </label>
      <input type="text" v-model.trim="content"> <br>

      <input type="submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'ArticleForm',
  data() {
    return {
      title: this.article.title, //props에서 받아온 데이터를 집어 넣는다.
      content: this.article.content,
    }
  },
  props: {
    article: Object,
    action: String, //액션에 따라서 메소드를 다르게 호출할 수 있다.
  }, 
  methods: {
    createArticle() {
      const payload = { title: this.title, content: this.content }
      this.$store.dispatch('createArticle', payload)
    },
    // onSubmit() {
    //   if (this.action === 'create') {
    //     this.createArticle()
    //   } else {
    //     this.updateArticle()
    //   }
    // }
  }
}
</script>

<style>

</style>