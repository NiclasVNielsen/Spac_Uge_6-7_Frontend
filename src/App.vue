<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="border b shadow" id="header">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/cart">Cart</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <!-- <RouterLink to="/create/test/1">Create</RouterLink>
    <RouterLink to="/update/test/1">Update</RouterLink>
    <RouterLink to="/delete/test/1">Delete</RouterLink> -->
    <!-- <RouterLink to="/admin/home">AdminHome</RouterLink> -->
  </header>

  <RouterView />
</template>

<style lang="sass" scoped>

#header
  position: fixed
  top: 0
  left: 0
  width: 100%
  background: var(--neutral)
  padding: var(--sameContextGap)
  display: flex
  justify-content: center
  z-index: 10000
  a
    padding: 0 calc(var(--sameContextGap) / 2)

</style>
