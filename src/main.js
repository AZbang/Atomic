import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Router from 'vue-router'

import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(Router);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router: new Router(router),
  store: new Vuex.Store(store),
  components: { App },
  template: '<App/>'
})
