<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="border b" id="header">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/cart">Cart</RouterLink>
  </header>

  <RouterView />
</template>

<style lang="sass" scoped>

#header
  padding: var(--sameContextGap)

</style>
