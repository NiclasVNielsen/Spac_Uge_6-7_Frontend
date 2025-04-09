<script setup>
import { products } from '@/scripts/data/products'
import * as product from '@/scripts/methods/products'
import productList from '@/components/ProductList.vue'

</script>

<template>
  <productList :products="products" title="Category 1" id="cat1" />
  <productList :products="products" title="Category 2" id="cat2" />
</template>

<style lang="sass" scoped>

</style>