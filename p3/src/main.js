import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import MyPackages from './components/MyPackages.vue';
import AllPackages from './components/AllPackages.vue';
import PackageDetail from './components/PackageDetail';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
    {path: '/', name: 'home', component: HomeComponent},
    {path: '/myPackages', name: 'myPackages', component: MyPackages},
    {path: '/allPackages', name: 'allPackages', component: AllPackages},
    {path: '/packageDetail/:id',  name: 'packageDetail', component: PackageDetail},
    {path: '*', redirect: '/'}
];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
