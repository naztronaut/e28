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
            <router-link class="nav-link" exact :to='{name: link.context}'>
              {{ link.name }} <span class="badge badge-secondary" v-if="link.context == 'myPackages'">{{ myPackagesCount.packageCount }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
   
    <router-view></router-view>
  </div>
</template>

<script>
import * as config from './config.js';
export default {
  name: 'app',
  components: {
  },
  data: function () {
      return {
          links: [{name: 'Home', context: 'home'}, {name: 'All Packages', context: 'allPackages'}, {name: 'My Packages', context: 'myPackages'}],
          myPackagesCount: config.selectedPackages
      }
  },
  mounted() {
      config.selectedPackages.packageCount = JSON.parse(localStorage.getItem('myPackages')).length || 0;
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

.nav-item > a.router-link-active{
  color: #A3A3A3 !important;
}
</style>
