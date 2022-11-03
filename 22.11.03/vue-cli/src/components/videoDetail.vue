<template>
  <div>
    <div v-if="selectVideo" class="ratio ratio-16x9">
        <iframe :src="videoUrl" frameborder="0" width="640" height="360"></iframe>
    </div>
    <div v-else>
      <p>선택한 비디오가 없습니다.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoDetail",
  props: {
    selectVideo: Object
  },
  computed: {
    videoUrl () {
      return `https://www.youtube.com/embed/${this.selectVideo.id.videoId}`
    }
  }
}
</script>

<style>

</style>