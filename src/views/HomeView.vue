<script setup>
import { products } from '@/scripts/data/products'
import * as product from '@/scripts/methods/products'
import hero from '@/components/Hero.vue'
import productList from '@/components/ProductList.vue'
import * as CRUD from '@/scripts/utilities/httpRequests'

const test = async () => {
  const res = await CRUD.get("warehouse")
  console.log(res)
}
test()

</script>

<template>
  <hero title="Super Duper Cool Shop!" paragraph="This is the place where you can buy super cool stuff!" />
  <productList :products="products" title="Category 1" id="cat1" showCatagory="false" />
  <productList :products="products" title="Category 2" id="cat2" showCatagory="false" />
</template>

<style lang="sass">

</style>