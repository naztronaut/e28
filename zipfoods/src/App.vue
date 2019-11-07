<template>
  <div id="app">
    <img id="logo" alt="Vue logo" src="./assets/images/zipfoods-logo.png">
    <p>ZipFoods is your one-stop-shop for convenient online grocery shopping in the greater Boston area.</p>
    <nav>
      <ul>
        <li v-for='link in links' :key='link'>
          <router-link exact :to='paths[link]'>{{ link }}</router-link>
        </li>
      </ul>
    </nav>
  
    <router-view></router-view>
  </div>
</template>

<script>

import { products } from "./products.js";

export default {
  name: 'app',
    data: function() {
      return {
          products: products,
          page: 'home',
          links: ['home', 'products', 'categories'],
          paths: {
              home: '/',
              products: '/products',
              categories: '/categories'
          }
      }
    }
}
</script>

<style lang="scss">
  @import "assets/css/zipfoods.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
