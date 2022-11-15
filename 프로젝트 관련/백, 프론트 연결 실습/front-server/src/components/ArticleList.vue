<template>
  <div>
    <ArticleListItem 
    v-for="article in articles"
    :key="article.id"
    :article="article"
    />
  </div>
</template>

<script>
import ArticleListItem from '@/components/ArticleListItem'

export default {
  name: 'ArticleList',
  components: {
    ArticleListItem,
  },
  computed: {
    articles() { return this.$store.getters.articles }
  }
}
</script>

<style>

</style>