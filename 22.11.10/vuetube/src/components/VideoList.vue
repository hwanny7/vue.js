<template>
  <div class="mx-0">
    <VideoListItem
    v-for="video in videos"
    :key="video.etag"
    :video="video"
    @select-video="selectVideo"
    />
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem'
export default {
  name: 'VideoList',
  props: {
    videos: Array,
  },
  components: {
    VideoListItem,
  },
  methods: {
    selectVideo(video) {
      this.$emit('select-video', video)
    }
  }
}
</script>

<style>

</style>