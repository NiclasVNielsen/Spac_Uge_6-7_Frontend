<script setup>
import { products } from '@/scripts/data/products'
import * as product from '@/scripts/methods/products'
import productCard from '@/components/ProductCard.vue'

const productsShortList = products.value.slice(0, 10)

</script>

<template>
  <section class="wrapper">
    <h4 class="border b">
      Products!
    </h4>
    <div class="productsHorizontalScrollContainer">
      <div>
        <template v-for="(product, index) in productsShortList" :key="index">
          <productCard :product="product" />
        </template>
      </div>
    </div>
  </section>
</template>

<style lang="sass">

.productsHorizontalScrollContainer
  position: relative
  >div
    overflow-x: scroll
    overflow-y: hidden
    white-space: nowrap
    padding: var(--sameContextGap)
    padding-right: 50px
  &::after
    top: 0
    left: 0
    content: ""
    display: block
    width: 100%
    height: 100%
    position: absolute
    background: linear-gradient(to right, var(--neutral), transparent 2px, transparent calc(100% - 100px), var(--neutral)  100%)
    pointer-events: none

</style>