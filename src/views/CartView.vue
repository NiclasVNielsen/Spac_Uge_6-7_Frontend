<script setup>

</script>

<template>
<section class="wrapper">
    <form action="" class="container">
        <div class="col-8">
            <h2 class="border b">
                Shipment Details
            </h2>
            <div class="containerPadding h">
                <div class="flex toEdge">
                    <div class="col-6 pair">
                        <input required type="text">
                        <label class="inBoxLabel" for="">First Name</label>
                    </div>
                    <div class="col-6 pair">
                        <input required type="text">
                        <label class="inBoxLabel" for="">Last Name</label>
                    </div>
                </div>
                <div class="pair">
                    <input required type="text">
                    <label class="inBoxLabel" for="">Email</label>
                </div>
                <div class="flex toEdge">
                    <div class="col-10 pair">
                        <input required type="text">
                        <label class="inBoxLabel" for="">Address</label>
                    </div>
                    <div class="col-2 pair">
                        <input required type="text">
                        <label class="inBoxLabel" for="">Apt/Blog</label>
                    </div>
                </div>
                <div class="flex toEdge">
                    <div class="col-6 pair">
                        <input required type="text">
                        <label class="inBoxLabel" for="">City</label>
                    </div>
                    <div class="col-6 pair">
                        <input required type="text">
                        <label class="inBoxLabel" for="">Country</label>
                    </div>
                </div>
                <div class="flex toEdge">
                    <div class="col-6 pair">
                        <input required type="text">
                        <label class="inBoxLabel" for="">Zip Code</label>
                    </div>
                    <div class="col-6 pair">
                        <input required type="text">
                        <label class="inBoxLabel" for="">Phone</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4 shadow l">
            <h4 class="border b">
                Items
            </h4>
            <div class="containerPadding h">
                <div class="cartItem border b">
                    <div class="image">
                        <img src="@/media/ph.jpg" alt="">
                    </div>
                    <div class="name">
                        Product 0
                    </div>
                    <div class="amount">
                        <input type="text" value="3" class="subtle" @focus="function(e){e.srcElement.select()}"><span>x</span>
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
                        <input type="text" value="1" class="subtle" @focus="function(e){e.srcElement.select()}"><span>x</span> 
                    </div>
                </div>
                <div class="checkboxContainer containerPadding h">
                    <div class="flex toEdge">
                        <input type="checkbox" required class="col-1">
                        <a href="">Terms & Conditions</a>
                    </div>
                    <div class="flex toEdge">
                        <input type="checkbox" class="col-1">
                        <label for="" >Sign up to our News Letter!</label>
                    </div>
                </div>
                <div class="linkBox CTA">
                    <button type="submit" class="CTA">
                        Order!
                    </button>
                </div>
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

.col-8
    input
        &[type="text"]
            border-radius: 0 0 var(--borderRadius) var(--borderRadius)
            border-top: none
    label
        border-radius: var(--borderRadius) var(--borderRadius) 0 0
        border-bottom: none
    .pair
        display: flex
        flex-direction: column-reverse

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