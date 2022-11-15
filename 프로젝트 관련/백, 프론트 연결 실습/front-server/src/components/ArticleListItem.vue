<template>
  <div>
    <p>PK: {{article.id}}</p>
    <router-link :to="{ name: 'DetailView', params: { id: article.id } }">제목: {{article.title}}</router-link>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ArticleListItem',
  props: {
    article: Object,
  }
}
</script>

<style>

</style>