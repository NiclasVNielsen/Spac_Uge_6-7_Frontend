<script setup>

const props = defineProps(['title', 'paragraph'])

</script>

<template>

<section class="hero shadow b">
    <div class="wrapper flex">
        <div class="col-8 itemContainer">
            <img src="@/media/heroItem.webp" alt="">
        </div>
        <div class="col-4">
            <article class="border a">
                <h1>
                    {{ props.title }}
                </h1>
                <h5>
                    {{ props.paragraph }}
                </h5>
            </article>
        </div>
    </div>
</section>

</template>

<style lang="sass" scoped>

.hero
    height: calc(100vh - (19px + (var(--sameContextGap) * 2) + var(--borderSize)) - var(--sameContextGap))
    border-bottom: solid var(--borderSize) var(--prim)
    border-radius: calc(var(--borderRadius))
    margin-bottom: var(--differentContextGap)
    background-image: url("@/media/hero.png")
    background-size: cover
    background-position: center
    background-repeat: no-repeat
    padding-top: 0
    //background: var(--second)
    display: flex
    align-items: center
    .wrapper
        height: 100%
        article
            height: 100%
            margin: 0 auto
            max-width: 450px
            padding: var(--containerPadding)
            text-align: center
            background: var(--second)
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            h1
                font-size: 3rem
                color: var(--prim)
            h5
                font-size: 1.5em
                color: var(--neutral)
                padding: var(--sameContextGap)
        .itemContainer
            display: flex
            justify-content: center
            align-items: center
            img
                max-width: 500px
                animation: 3s bouncyThingy ease-in-out infinite

@keyframes bouncyThingy
    0%
        margin-bottom: 0px
    50%
        margin-bottom: 50px
    100%
        margin-bottom: 0px

</style>