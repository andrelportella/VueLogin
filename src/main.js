import Vue from 'vue'
import App from './App.vue'
import api from './services/api'
import router from './services/router'
import store from './services/store'

Vue.config.productionTip = false

new Vue({
  api,router,store,
  render: h => h(App),
}).$mount('#app')
