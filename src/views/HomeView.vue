<script setup>
import { products } from '@/scripts/data/products'
import * as product from '@/scripts/methods/products'
import hero from '@/components/Hero.vue'
import productList from '@/components/ProductList.vue'
import * as CRUD from '@/scripts/utilities/httpRequests'
import { ref } from 'vue'

const categories = ref([])
const itemsByCategory = ref([])

const getItems = async () => {
  const items = await CRUD.get("item")
  items.forEach(item => {
    const categoryIndex = categories.value.indexOf(item.category)
    if(categoryIndex == -1){
      categories.value.push(item.category)
      itemsByCategory.value.push([item])
    }else{
      itemsByCategory.value[categoryIndex].push(item)
    }
  })
  console.log(itemsByCategory.value)
}
getItems()

</script>

<template>
  <hero title="Super Duper Cool Shop!" paragraph="This is the place where you can buy super cool stuff!" />

  <template v-for="(category, index) in categories" :key="index">
    <template v-if="itemsByCategory[index].length > 10">
      <productList :products="itemsByCategory[index]" :title="category" :id="'cat' + index" showCategory="false" />
    </template>
  </template>

  <!-- <productList :products="products" title="Category 1" id="cat1" showCategory="false" />
  <productList :products="products" title="Category 2" id="cat2" showCategory="false" /> -->
</template>

<style lang="sass" scoped>

</style>