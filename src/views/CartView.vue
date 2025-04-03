<script setup>

</script>

<template>
<section class="wrapper">
    <form action="" class="container">
        <div class="col-8">
            <h2 class="border b">
                Shipment Details
            </h2>
            <label for="">Name</label>
            <input type="text">
            <label for="">Email</label>
            <input type="text">
            <label for="">Address</label>
            <input type="text">
        </div>
        <div class="col-4 shadow l">
            <h4 class="border b">
                Items
            </h4>
            <div class="cartItem border b">
                <div class="image">
                    <img src="@/media/ph.jpg" alt="">
                </div>
                <div class="name">
                    Product 0
                </div>
                <div class="amount">
                    3x 
                </div>
            </div>
            <div class="cartItem border b">
                <div class="image">
                    <img src="@/media/ph.jpg" alt="">
                </div>
                <div class="name">
                    Product 2
                </div>
                <div class="amount">
                    1x 
                </div>
            </div>
            <div class="linkBox CTA">
                <button type="submit" class="CTA">
                    Order!
                </button>
            </div>
        </div>
    </form>
</section>
</template>

<style lang="sass" scoped>

label
    display: block

input
    margin-bottom: var(--sameContextGap)

/* .col-8, .col-4
    padding: var(--containerPadding) */

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

.col-4
    .linkBox
        margin-top: var(--sameContextGap)


</style>