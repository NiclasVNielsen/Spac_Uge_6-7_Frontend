<script setup>
import { cart } from '@/scripts/data/cart'
import { ref } from 'vue'

const amount = ref(1)

const props = defineProps(['product', 'showCategory', 'admin'])

let admin = true

if(props.admin != "true")
    admin = false

const addToCart = (e) => {
    e.preventDefault()
    e.srcElement.classList.add('spinner')
    console.log(props.product)
    cart.value.push({
        amount,
        product: props.product
    })
    setTimeout(() => {
        e.srcElement.classList.remove('spinner')
    }, 1000);
}

</script>

<template>
    <div class="shadow h card">
        <div class="imgContainer">
            <img src="@/media/ph.jpg" alt="">
        </div>
        <article>
            <h6>
                {{ props.product.name }}
            </h6>
            <p v-if="props.showCategory != 'false'">
                {{ props.product.category }}
            </p>
        </article>
        <form action="" class="flex" v-if="!admin">
            <input type="text" @focus="function(e){e.srcElement.select()}" v-model="amount" class="amount">
            <div class="submit linkBox" @click="(e) => addToCart(e)">
                <a href="">Add to Cart</a>
            </div>
        </form>
        <div v-else class="flex controls">
            <router-link :to="'/update/items/' + props.product.itemId" class="col-6 linkBox">
                Edit
            </router-link>
            <router-link :to="'/delete/items/' + props.product.itemId" class="col-6 linkBox warning">
                Delete
            </router-link>
        </div>
    </div>
</template>

<style lang="sass" scoped>

.card
    user-select: none
    display: inline-block
    width: var(--cardSize)
    cursor: pointer
    padding: var(--sameContextGap)
    text-align: center
    .imgContainer
        border: solid var(--borderSize) var(--prim)
        border-radius: var(--borderRadius)
        img
            display: block
    article
        padding: var(--sameContextGap)
        h6
            margin-top: var(--sameContextGap)
    .flex
        margin-bottom: 0
        input
            position: relative
            margin-bottom: 0
        .amount
            text-align: right
            border-radius: var(--borderRadius) 0 0 var(--borderRadius)
            width: 33.333%
            border-right: calc(var(--borderSizeLight) / 2) solid var(--prim)
            color: var(--second)
        .submit
            border-radius: 0 var(--borderRadius) var(--borderRadius) 0
            width: 66.666%
            border-left: calc(var(--borderSizeLight) / 2) solid var(--prim)
            color: var(--neutral)
            border: solid var(--borderSizeLight)  var(--prim) 
            &:hover
                color: var(--prim)
                border: solid var(--borderSizeLight)  var(--prim)
    .controls
        justify-content: space-between
        .col-6
            font-size: 1rem
            width: calc(50% - (var(--sameContextGap) / 2))
        .warning:hover
            color: var(--warning)



</style>