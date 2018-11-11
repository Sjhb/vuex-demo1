<template>
  <div class="cart">
    <ul>
      <li class="item" v-for="prod in products" :key="prod.id" @click="goDetail(prod.id)">
        <p class="price">X{{prod.num}}</p>
        <p class="price">¥{{prod.money}}</p>
        <p class="title">{{prod.name}}</p>
        <p class="brand">{{prod.brand}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'cart',
  computed: {
    products () {
      return this.$store.getters.prodInCart()
    }
  }
}
</script>
<style scoped>
  @import "~@/assets/cart.css";
</style>
