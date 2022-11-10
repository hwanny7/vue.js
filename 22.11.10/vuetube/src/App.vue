<template>
  <div id="app">
    <header>
      <h1 style="color: green">Youtube Project</h1>
      <TheSearchBar
      @input-change="inputChange"
      />
    </header>
    
    <section class="mt-5 container">
      <div class="row">
        <div class="col-7">
          <VideoDetail 
          :video="selectedVideo"
          />
        </div>
        <div class="col-5">
          <VideoList
          :videos="videos"
          @select-video="selectVideo"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheSearchBar from '@/components/TheSearchBar'
import VideoList from '@/components/VideoList'
import VideoDetail from '@/components/VideoDetail'
import axios from 'axios'

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY

export default {
  name: 'App',
  components: {
    TheSearchBar,
    VideoList,
    VideoDetail,
  },
  data() {
    return {
      videos: null,
      selectedVideo: null,
    }
  },
  methods: {
    inputChange(query) {
      axios({
        method: 'get',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: API_KEY,
          q: query,   //검색어
          part: 'snippet',
          type: 'video',
        }
      })
        .then(response => {
          this.videos = response.data.items
        })
        .catch(error => {
          console.log(error)
        })
    },
    selectVideo(video) {
      this.selectedVideo = video
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
