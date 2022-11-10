<template>
  <div>
    <div v-if="video">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item iframe" :src="videoUrl" frameborder="1"></iframe>
      </div>
      <div>
        {{ video.snippet.title }}
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: {
    video: Object,
  },
  computed: {
    videoUrl() { 
      return `https://www.youtube.com/embed/${this.video.id.videoId}`
    }
  }
}
</script>

<style>
.iframe {
  width: 700px;
  height: 500px;
}

</style>