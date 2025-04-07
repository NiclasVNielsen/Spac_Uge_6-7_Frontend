<script setup>

const props = defineProps(['product'])

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
            <p>
                {{ props.product.category }}
            </p>
        </article>
        <form action="" class="flex">
            <input type="text" @focus="function(e){e.srcElement.select()}" value="1" class="amount">
            <input type="submit" value="Add to Cart" class="submit linkBox">
        </form>
    </div>
</template>

<style lang="sass">

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




</style>