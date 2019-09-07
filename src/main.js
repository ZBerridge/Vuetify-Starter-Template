import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Router from 'vue-router'
import vuetify from './plugins/vuetify';
import { routes } from './routes'
import Axios from 'axios'

Vue.config.productionTip = false

Axios.defaults.baseURL = 'https://api.zberridge.com/wp-json/zb/v1/'

Vue.use(Router);

const router = new Router({
  routes: routes,
  base: process.env.BASE_URL,
  mode:'history'
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
