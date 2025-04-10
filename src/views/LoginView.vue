<script setup>
import router from '@/router';

const login = (e) => {
    e.preventDefault()
    e.srcElement.classList.add("spinner")
    setTimeout(() => {
        router.push({ path: "/admin/home" })
    }, 3000);
}

</script>

<template>
<section class="wrapper flex center">
    <form action="" class="container border a shadow">
        <h2 class="border b">
            Login
        </h2>
        <div class="containerPadding h">
            <div class="pair">
                <input required type="text" id="email">
                <label class="inBoxLabel" for="email">Email</label>
            </div>
            <div class="pair">
                <input required type="password" id="password">
                <label class="inBoxLabel" for="password">Password</label>
            </div>
            
            <div class="linkBox" @click="(e) => login(e)">
                <button type="submit" class="">
                    Login!
                </button>
            </div>
        </div>
    </form>
</section>
</template>

<style lang="sass" scoped>

section.wrapper
    min-height: 80vh

label
    display: block

input
    margin-bottom: var(--sameContextGap)

.linkBox
    margin-top: var(--sameContextGap)
    margin-bottom: var(--sameContextGap)

.flex
    input
        &[type="text"], &[type="password"]
            border-radius: 0 0 var(--borderRadius) var(--borderRadius)
            border-top: none
    label
        border-radius: var(--borderRadius) var(--borderRadius) 0 0
        border-bottom: none
    .pair
        display: flex
        flex-direction: column-reverse

.container
    max-width: 400px

.wrapper
    min-height: 90vh

.cartItem
    height: var(--listItemSize)
    padding: var(--sameContextGap)
    display: flex
    align-items: center
    >div
        display: flex
        justify-content: center
        align-items: center
    .amount
        width: 20%
    .image
        width: 30%
    .name
        width: 50%
    img
        width: auto
        height: calc(var(--listItemSize) - (var(--sameContextGap) * 2))

.checkboxContainer
    margin-top: var(--differentContextGap)
    margin-bottom: var(--differentContextGap)
    >div    
        margin-top: var(--sameContextGap)
        input
            margin-bottom: 0
            &[type="checkbox"]
                border-color: var(--second)
                margin-right: .2em
 

</style>