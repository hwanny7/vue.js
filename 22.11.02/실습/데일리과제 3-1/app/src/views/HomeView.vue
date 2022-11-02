<template>
  <div class="home">
    <div>
    <h1 v-if="$route.name == 'home'">Home</h1>
    <h1 v-else>About</h1>
    <h2>첫 번째 박스</h2>
    <div class="global">
      <div class="box scoped-box"></div>
    </div>
    <h2>두 번째 박스</h2>
    <div class="global">
      <div class="box scoped-box"></div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style>
.global {
  margin-left: auto;
  margin-right: auto;
}

.box {
  margin-left: auto;
  margin-right: auto;
  width : 100px; 
  height: 100px;
  border: 1px solid black;
}
</style>

