<script setup>
import * as CRUD from '@/scripts/utilities/httpRequests'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()


const item = ref({})

const getItem = async () => {
  item.value = await CRUD.get(route.params.type + "/" + route.params.id)
}
getItem()

</script>

<template>
<section class="wrapper flex center">
    <form action="" class="container border a shadow">
        <h2 class="border b">
            Delete?
        </h2>
        <div class="containerPadding h">
            <div v-for="([key, value], index) in Object.entries(item)" :key="index" class="pair">
                <p>
                    {{ key }}
                </p>
                <p>
                    {{ value }}
                </p>
            </div>
            <div class="linkBox warning">
                <button type="submit">
                    Delete!
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

.pair
    flex-direction: column !important
    >p
        border-right: var(--borderSizeLight) solid var(--second)
        border-left: var(--borderSizeLight) solid var(--second)
        &:first-of-type
            padding: .2em calc(var(--sameContextGap) / 2)
            border-top: var(--borderSizeLight) solid var(--second)
            margin-bottom: 0
        &:last-of-type
            border-bottom: var(--borderSizeLight) solid var(--second)
            padding: calc(var(--sameContextGap) / 2)
 

</style>