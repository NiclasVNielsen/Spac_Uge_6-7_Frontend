<script setup>

const props = defineProps(['product'])

</script>

<template>
    <div class="border h card">
        <img src="@/media/ph.jpg" alt="">
        <article>
            <h6>
                {{ props.product.name }}
            </h6>
            <p>
                {{ props.product.category }}
            </p>
        </article>
    </div>
</template>

<style lang="sass">

.card
    display: inline-block
    width: var(--cardSize)
    text-align: center
    cursor: pointer

</style>