<template>
  <div>
    <h3>Detail View</h3>
    <h2>{{article.id}}</h2>
    <h2>{{article.title}}</h2>
    <h2>{{article.content}}</h2>
    <h2>{{article.username}}</h2>
    <router-link :to="{name : 'UpdateView'}">update</router-link>
    <div v-if="isAuthor">삭제하기</div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'DetailView',
  created() {
    const articleId = this.$route.params.id
    this.$store.dispatch('getArticleDetail', articleId)
  },
  computed: {
    article() { return this.$store.getters.article },
    isAuthor() { return this.$store.getters.isAuthor }
  }
}
</script>

<style>

</style>