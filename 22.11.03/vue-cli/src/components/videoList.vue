<template>
  <ul class="list-group">
    <videoListItem
      v-for="video in videos" :key="video.etag"
      :video="video"
      @select-video="selectVideo"
    />
  </ul>
</template>

<script>
import videoListItem from '@/components/videoListItem'
export default {
  name: 'videoList',
  props: {
    videos: Array,
  },
  components: {
    videoListItem
  },
  methods: {
    selectVideo(selectVideo){
      this.$emit('select-video', selectVideo)
    }
  }
}
</script>

<style>

</style>