<script setup>
import { products } from '@/scripts/data/products'
import * as product from '@/scripts/methods/products'
import productList from '@/components/ProductList.vue'
import hero from '@/components/Hero.vue'
import * as CRUD from '@/scripts/utilities/httpRequests'
import { ref } from 'vue'


const categories = ref([])
const itemsByCategory = ref([])

const getItems = async () => {
  const items = await CRUD.get("items")
  items.forEach(item => {
    const categoryIndex = categories.value.indexOf(item.category)
    if(categoryIndex == -1){
      categories.value.push(item.category)
      itemsByCategory.value.push([item])
    }else{
      itemsByCategory.value[categoryIndex].push(item)
    }
  })
}
getItems()

</script>

<template>
  <template v-for="(category, index) in categories" :key="index">
    <template v-if="index < 5">
      <template v-if="itemsByCategory[index].length > 10">
        <productList :products="itemsByCategory[index]" :title="category" :id="'cat' + index" showCategory="false" admin="true"/>
      </template>
    </template>
  </template>
</template>

<style lang="sass" scoped>

</style>