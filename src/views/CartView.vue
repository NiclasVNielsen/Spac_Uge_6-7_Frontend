<script setup>
import { cart } from '@/scripts/data/cart'

const removeIfZero = (index) => {
    if(cart.value[index].amount == 0){
        cart.value.splice(index, 1)
    }
}

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
                        <input required type="text" id="firstName">
                        <label class="inBoxLabel" for="firstName">First Name</label>
                    </div>
                    <div class="col-6 pair">
                        <input required type="text" id="lastName">
                        <label class="inBoxLabel" for="lastName">Last Name</label>
                    </div>
                </div>
                <div class="pair">
                    <input required type="text" id="email">
                    <label class="inBoxLabel" for="email">Email</label>
                </div>
                <div class="flex toEdge">
                    <div class="col-10 pair">
                        <input required type="text" id="address">
                        <label class="inBoxLabel" for="address">Address</label>
                    </div>
                    <div class="col-2 pair">
                        <input required type="text" id="apt">
                        <label class="inBoxLabel" for="apt">Apt/Blog</label>
                    </div>
                </div>
                <div class="flex toEdge">
                    <div class="col-6 pair">
                        <input required type="text" id="city">
                        <label class="inBoxLabel" for="city">City</label>
                    </div>
                    <div class="col-6 pair">
                        <input required type="text" id="country">
                        <label class="inBoxLabel" for="country">Country</label>
                    </div>
                </div>
                <div class="flex toEdge">
                    <div class="col-6 pair">
                        <input required type="text" id="zip">
                        <label class="inBoxLabel" for="zip">Zip Code</label>
                    </div>
                    <div class="col-6 pair">
                        <input required type="text" id="phone">
                        <label class="inBoxLabel" for="phone">Phone</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4 shadow l">
            <h4 class="border b">
                Items
            </h4>
            <!-- {{ cart }} -->
            <div class="containerPadding h">
                <template v-for="(cartItem, index) in cart" :key="index">
                    <div class="cartItem border b">
                        <div class="image">
                            <img src="@/media/ph.jpg" alt="">
                        </div>
                        <div class="name">
                            {{ cartItem.product.name }}
                        </div>
                        <div class="amount">
                            <input type="text" v-model="cart[index].amount" class="subtle" @focus="function(e){e.srcElement.select()}" @change="removeIfZero(index)"><span>x</span>
                        </div>
                    </div>
                </template>
                <!-- <div class="cartItem border b">
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
                </div> -->
                <div class="checkboxContainer containerPadding h">
                    <div class="flex toEdge">
                        <input type="checkbox" class="col-1" id="newsletter">
                        <label for="newsletter">Sign up to our News Letter!</label>
                    </div>
                    <div class="flex toEdge">
                        <input type="checkbox" required class="col-1">
                        <a href="">Terms & Conditions</a>
                    </div>
                </div>
                <div class="linkBox CTA" @click="(e) => {e.srcElement.classList.add('spinner')}">
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
        padding: 0 var(--sameContextGap)
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