<template>
  <div class="d-flex flex-row justify-content-start" @click="selectVideo">
    <img :src="thumbnailUrl" alt="">
    <span>{{videoTitle | stringUnescape}}</span>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'VideoListItem',
  props: {
    video: Object,
  },
  computed: {
    videoTitle() {
      return this.video.snippet.title
    },
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url
    }
  },
  filters: {
    stringUnescape(rawText) {
      return _.unescape(rawText)
    }
  },
  methods: {
    selectVideo() {
      this.$emit('select-video', this.video)
    }
  }
}
</script>

<style>

</style>