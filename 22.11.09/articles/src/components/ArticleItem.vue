<template>
  <div @click="goDetail(article.id)">
    <p>글 번호: {{article.id}}</p>
    <p>글 번호: {{article.title}}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: Object,
  },
  methods: {
    goDetail(id) {
      this.$router.push({ name : 'detail', params : {
      id : id 
      }
      })                                           
    }
  }
}
</script>

<style>

</style>