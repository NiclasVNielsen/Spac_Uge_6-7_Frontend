<script setup>
import { products } from '@/scripts/data/products'
import * as product from '@/scripts/methods/products'
import productCard from '@/components/productCard.vue';

</script>

<template>
  <section class="wrapper">
    <h4 class="border b">
      Products!
    </h4>
    <div>
      <template v-for="(product, index) in products" :key="index">
        <productCard :product="product" />
      </template>
    </div>
  </section>
</template>

<style>

</style>
