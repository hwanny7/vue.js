<template>
  <div id="app" class="container d-flex flex-row mt-5">
      <div class='col-3 border border-dark rounded-3 d-flex align-items-center justify-content-center'>
        <div class="mx-3">
          <nav>
          <router-link :to="{ name : 'AllTodoPage' }" style="text-decoration:none"><h1>모든</h1></router-link>
          <router-link :to="{ name : 'TodayTodoPage'}" style="text-decoration:none"><h1>오늘</h1></router-link>
          <router-link :to="{ name : 'ImportantTodoPage'}" style="text-decoration:none"><h1>중요</h1></router-link>
          </nav>
        </div>
      </div>
      <router-view class='col-9'/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
