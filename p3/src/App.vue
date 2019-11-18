<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
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
      if(localStorage.getItem('myPackages')) {
          config.selectedPackages.packageCount = JSON.parse(localStorage.getItem('myPackages')).length;
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
  }
  
  .nav-item > a.router-link-active{
    color: #A3A3A3 !important;
  }
  
  /*Turn off responsive nav: https://stackoverflow.com/a/21751422/9948721*/
  @media (max-width: 576px){
    .navbar {
      border-radius: 4px;
      min-width: 400px;
    }
  
    .navbar-collapse {
      width: auto;
      border-top: 0;
      box-shadow: none;
    }
    .navbar-collapse.collapse {
      display: block !important;
      height: auto !important;
      padding-bottom: 0;
      overflow: visible !important;
    }
    .navbar-collapse.in {
      overflow-y: visible;
    }
    
    .navbar-nav {
      float: left;
      margin: 0;
    }
    .navbar-nav > li {
      float: left;
    }
    .navbar-nav > li > a {
      padding-top: 15px;
      padding-bottom: 15px;
    }
    .navbar-nav.navbar-right:last-child {
      margin-right: -15px;
    }
  }
  
</style>
