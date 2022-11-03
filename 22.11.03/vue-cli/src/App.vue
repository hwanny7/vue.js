<template>
  <div id="app">
    <div class="container">
      <h1>SSAFY TUBE</h1>
      <searchBar @input-change="inputChange"/>
      <div class="row">
        <div class="col-12 col-lg-8">
          <videoDetail :select-video="SelectVideo"/>
        </div>
        <div class="col-12 col-lg-4">
          <videoList :videos="videos"
          @select-video="selectVideo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import searchBar from '@/components/searchBar'
import videoList from '@/components/videoList'
import videoDetail from '@/components/videoDetail'

const API_KEY = process.env.VUE_APP_YOUTUBE_KEY
console.log(API_KEY)
export default {
  name: 'App',
  components: {
    searchBar,
    videoList,
    videoDetail,
  },
  data() {
    return {
      videos: [],
      SelectVideo: null,
    }
  },
  //https://developers.google.com/youtube/v3/docs/search/list
  methods: {
    selectVideo(selectVideo){
      this.SelectVideo = selectVideo
      console.log(selectVideo)
    },
    inputChange(query){
      axios({
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: API_KEY,
          part: 'snippet',
          q: query,
          type: 'video',
        },
      }).then( res => {
        this.videos = res.data.items
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style>
* {
  font-family: 'Noto Sans KR', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 100vh;
}
</style>
