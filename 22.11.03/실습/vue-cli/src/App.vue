<template>
  <div id="app">
    <div>
      <h1>예약 페이지</h1>
      <h2>시간 선택</h2>
    </div>
    <div class="containter">
      <div class="box" v-for="(box, index) in array" :key="index" :class = {back:box.isActive} @click="click(box)">{{box.time}}</div>
    </div>
    <ul>선택 시간: 
      <li v-for="(cho, index) in choice" :key="index">{{cho.time}}</li>
    </ul>
  </div>
</template>

<script>
let cnt = 0
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      array: [],
      choice: [],
    }
  },
  methods: {
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
    },
    click(obj) {
      const result = !obj.isActive
      if (result){
        if (cnt + 1 <= 5){
        obj.isActive = !obj.isActive
        this.choice.push(obj)
        cnt++
        } else alert('5타임까지만 신청할 수 있습니다.')
      } else {
        const index = this.choice.indexOf(obj)
        this.choice.splice(index, 1)
        console.log(this.choice)
        obj.isActive = !obj.isActive
        cnt--
      }
    }
  },
  created() {
    this.boxs()
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
.back {
  background-color: black;
}
</style>
