<template>
  <div class="container">
    <header>
      <a class="link" href="#/cart">我的</a>
    </header>
    <ul class="grid">
      <li class="item" v-for="prod in products" :key="prod.id" @click="goDetail(prod.id)">
        <img class="thumb" :src="prod.source" />
        <div class="detail">
          <p class="price">¥{{prod.price}}</p>
          <p class="title">{{prod.name}}</p>
          <p class="brand">{{prod.brand}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'prodList',
  components: {},
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    ...mapActions(['getProducts']),
    goDetail (id) {
      this.$router.push({
        name: 'prodDetail',
        query: {
          id
        }
      })
    }
  },
  created () {
    console.log(mapActions(['getProducts']))
    if (this.products.length === 0) {
      this.getProducts()
    }
  }
}
</script>
<style scoped>
  @import "~@/assets/prodList.css";
</style>
