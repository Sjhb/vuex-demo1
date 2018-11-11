<template>
  <div class="content" v-show="product">
    <img class="thumb" :src="product.source">
    <div>
      <p class="price">¥{{product.price}}</p>
      <p class="title">{{product.name}}</p>
      <p class="brand">{{product.brand}}</p>
      <button class="button" @click="chooseProd">加入购物车</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'prodDetail',
  data () {
    return {
    }
  },
  computed: {
    product () {
      let prodId = this.$route.query.id
      return this.$store.getters.getProdById(prodId)
    }
  },
  methods: {
    ...mapActions(['addProdToCart']),
    chooseProd () {
      this.addProdToCart(this.product)
      alert('加入购物车成功')
    }
  }
}
</script>
<style lang="less">
  @import "~@/assets/prodDetail.css";
</style>
