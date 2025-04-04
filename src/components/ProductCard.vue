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
    p
        margin-bottom: 0


</style>