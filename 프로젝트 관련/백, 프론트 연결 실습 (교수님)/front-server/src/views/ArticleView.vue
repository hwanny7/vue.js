<template>
  <div>
    <h1>Article</h1>
    <router-link :to="{name : 'CreateView' } ">Create Article</router-link>
    <hr>
    <ArticleList/>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList'
export default {
  name: 'ArticleView',
  components: {
    ArticleList,
  },
  created() {
    this.$store.dispatch('getArticles')
  }
}
</script>

<style>

</style>