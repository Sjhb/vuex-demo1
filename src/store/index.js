import Vue from 'vue'
import Vuex from 'vuex'
import * as mock from '../mock/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: new Map()
  },
  mutations: {
    SET_PRODUCT (state, products) {
      state.products = products
    },
    ADD_PRODUCT (state, prod) {
      let cart = state.cart
      let prodId = prod.id
      if (cart.has(prodId)) {
        let oldProd = cart.get(prodId)
        state.cart.set(prodId, Object.assign({}, {
          num: ++oldProd.num,
          money: oldProd.money + Number(prod.price),
          ...prod
        }))
      } else {
        state.cart.set(prodId, {
          num: 1,
          money: Number(prod.price),
          ...prod
        })
      }
    }
  },
  getters: {
    getProdById: state => {
      return prodId => state.products.find(prod => Number(prod.id) === Number(prodId))
    },
    prodInCart: state => {
      return () => [...state.cart.values()]
    }
  },
  actions: {
    /**
     * @description 获取所有商品
     * @author 王欢
     * @date 2018-11-11
     * @param {*} context
     * @returns
     */
    getProducts (context) {
      return new Promise((resolve, reject) => {
        mock.getAllProduct().then(res => {
          context.commit('SET_PRODUCT', res)
          resolve()
        }).catch(err => reject(err))
      })
    },
    /**
     * @description 添加购物车
     * @author 王欢
     * @date 2018-11-12
     * @param {*} context
     * @param {*} prod
     */
    addProdToCart (context, prod) {
      context.commit('ADD_PRODUCT', prod)
    }
  }
})
