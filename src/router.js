import Vue from 'vue'
import Router from 'vue-router'
import prodList from './views/prodList.vue'
import prodDetail from './views/prodDetail.vue'
import cart from './views/cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'prodList',
      component: prodList
    },
    {
      path: '/prodDetail',
      name: 'prodDetail',
      component: prodDetail
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
