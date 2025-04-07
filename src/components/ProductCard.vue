<script setup>

const props = defineProps(['product'])

</script>

<template>
    <div class="border h card">
        <img src="@/media/ph.jpg" alt="">
        <h6>
            {{ props.product.name }}
        </h6>
        <p>
            {{ props.product.category }}
        </p>
        <form action="" class="flex">
            <input type="text" value="1" class="amount">
            <input type="submit" value="Add to Cart" class="submit">
        </form>
    </div>
</template>

<style lang="sass">

.card
    display: inline-block
    width: var(--cardSize)
    text-align: center
    cursor: pointer
    padding: var(--sameContextGap)
    h6
        margin-top: var(--sameContextGap)
    .flex
        margin-bottom: 0
        input
            width: 50%
            border-color: var(--second)
        .amount
            text-align: right
            border-radius: var(--borderRadius) 0 0 var(--borderRadius)
        .submit
            border-radius: 0 var(--borderRadius) var(--borderRadius) 0




</style>