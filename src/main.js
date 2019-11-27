import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import vueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(BootstrapVue);
Vue.use(vueRouter);

const router = new vueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
