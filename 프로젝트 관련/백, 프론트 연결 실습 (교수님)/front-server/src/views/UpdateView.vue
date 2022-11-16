<template>
  <div>
    <h4>UPDATE</h4>
    <ArticleForm
    :article="article" action="update"
    />
  </div>
</template>

<script>
import ArticleForm from '@/components/ArticleForm'
export default {
  name: 'UpdateView',
  components: {
    ArticleForm
  },
  computed: {
    article() { return this.$store.getters.article }
  }
}
</script>

<style>

</style>