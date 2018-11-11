import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
// import * as mock from './mock/index.js'

Vue.config.productionTip = false
// Vue.prototype.$mock = mock
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
