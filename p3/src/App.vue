<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" :to='{name: "home"}'>Vue Package Manager</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active" v-for='link in links' :key='link.context'>
            <router-link class="nav-link" exact :to='{name: link.context}'>{{ link.name }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
   
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data: function () {
      return {
          links: [{name: 'Home', context: 'home'}, {name: 'All Packages', context: 'allPackages'}, {name: 'My Packages', context: 'myPackages'}]
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
