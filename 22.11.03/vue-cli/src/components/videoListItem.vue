<template>
    <li @click="selectVideo" class="list-group-item">
      <img :src="thumbnailUrl">
      {{videoTitle}}
    </li>
</template>

<script>
import _ from 'lodash'

export default {
  name: "videoListItem",
  props: {
    video: Object,
  },
  methods: {
    selectVideo(){
      this.$emit('select-video', this.video)
    }
  },
  computed: {
    videoTitle() {
      return _.unescape(this.video.snippet.title)
    },
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url
    }
  }
}
</script>

<style>

</style>