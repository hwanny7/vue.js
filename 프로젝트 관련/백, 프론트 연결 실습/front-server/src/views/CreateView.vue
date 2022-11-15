<template>
  <div>
    <h4>Create Article</h4>
    <ArticleForm
    :article="article" action="create"
    />
  </div>
</template>

<script>
import ArticleForm from '@/components/ArticleForm'

export default {
  name: 'CreateView',
  data() {
    return {
      article: {id: null, title: '', content: ''}
    }
  },
  components: {
    ArticleForm
  }
}
</script>

<style>

</style>