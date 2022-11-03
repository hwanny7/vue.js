<template>
  <div id="app">
    <div>
      <h1>예약 페이지</h1>
      <h2>시간 선택</h2>
    </div>
    <div class="containter">
      <div class="box" v-for="box in boxs" :key="box">{{box.time}}</div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      array: []
    }
  },
  components: {
  },
  computed: {
    boxs (){
      for(let i = 0; i < 24; i++){
        let clock = i
        if (clock < 10){
          clock = '0'+ clock
        }
        for (const time of ['00', '30']){
          this.array.push({time: clock+':'+ time, isActive :false})
        }
      }
      return this.array
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.containter {
  display: flex; 
  flex-wrap: wrap;
  width: 730px;
  height: 600px;
}
.box {
  width: 90px;
  height: 100px;
  border: 1px black solid;
}
</style>
