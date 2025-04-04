<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="border b shadow" id="header">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/cart">Cart</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/create/test/1">Create</RouterLink>
    <RouterLink to="/update/test/1">Update</RouterLink>
    <RouterLink to="/delete/test/1">Delete</RouterLink>
    <RouterLink to="/admin/home">AdminHome</RouterLink>
  </header>

  <RouterView />
</template>

<style lang="sass" scoped>

#header
  padding: var(--sameContextGap)

</style>
