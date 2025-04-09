<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="border b shadow" id="header">
    <div class="flex">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <div class="flex">
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/cart">Cart</RouterLink>
    </div>
    <!-- <RouterLink to="/create/test/1">Create</RouterLink>
    <RouterLink to="/update/test/1">Update</RouterLink>
    <RouterLink to="/delete/test/1">Delete</RouterLink> -->
    <!-- <RouterLink to="/admin/home">AdminHome</RouterLink> -->
  </header>

  <main>
    <RouterView />
  </main>
  <footer class="border">
    <div class="wrapper">
      <h5>
        Footer stuff goes here 3:
      </h5>
    </div>
  </footer>
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
  justify-content: space-between
  z-index: 10000
  a
    padding: 0 calc(var(--sameContextGap) / 2)
  div:last-of-type
    justify-content: flex-end

main
  min-height: calc(100vh - (19px + (var(--sameContextGap) * 2) + var(--borderSize)))

footer
  user-select: none
  background: var(--second)
  div
    padding: var(--differentContextGap) var(--sameContextGap)
    h5
      color: var(--neutral)
      margin: 0

</style>
