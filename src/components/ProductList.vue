<script setup>
import productCard from '@/components/ProductCard.vue'
import { onMounted, ref } from 'vue'

// Products = item array, Title = title?, id = unique id for this instance of ProductList
const props = defineProps(['products', 'title', 'id', 'showCategory'])

// Gets the first 10 items of array
const productsShortList = props.products.slice(0, 10)

// Controls how things are displayed
const showAll = ref(false)

// Width of the item container
const screenWidth = ref()

// Currently focused item
const currentLocation = ref(0)
// Tracks if the focused item is on the left
const onLeft = ref(true)

// The amount of Dots
const amount = ref(3) // Just a default


// Gemini made this and i am very happy, i don't understand anything but that is fine
function horizontalScrollIntoView(element, options = {}) {
    if (!element) {
        return;
    }

    const rect = element.getBoundingClientRect();
    const parentRect = element.parentElement.getBoundingClientRect();

    let scrollLeft = element.parentElement.scrollLeft;

    if (rect.left < parentRect.left) {
        // Scroll to the left edge of the element
        scrollLeft += rect.left - parentRect.left;
    } else if (rect.right > parentRect.right) {
        // Scroll to the right edge of the element
        scrollLeft += rect.right - parentRect.right;
    }

    // Ensure we don't scroll past the content boundaries
    const maxScrollLeft = element.parentElement.scrollWidth - parentRect.width;
    const clampedScrollLeft = Math.max(0, Math.min(scrollLeft, maxScrollLeft));

    element.parentElement.scrollTo({
        left: clampedScrollLeft,
        behavior: options.behavior || 'auto',
    });
}
// ^^^ Gemini code ^^^


// Scrolls to a given id, also an entry point
const scrollToId = (id, item, dotContainerId, event) => {
    if(id == productsShortList.length)
        id = 0
    if (id == -1)
        id = productsShortList.length - 1

    horizontalScrollIntoView(document.querySelector(`#${item}${id}`))
    updateDots(id, dotContainerId, event)
    currentLocation.value = id
}

// Helper
const getScreenWidth = () => {
  screenWidth.value = document.querySelector(".productsHorizontalScrollContainer > div").offsetWidth - 32
}

// Figures out how many items that are on the screen
const getAmountOfItemsOnScreen = () => {
  const AmountOfItemsOnScreen = Math.floor(screenWidth.value / 300)
  return AmountOfItemsOnScreen
}

// Helper
const getDots = (id) => {
  return document.querySelectorAll(`#${id} .dot`)
}

// Updates the dot colors, also an entry point
const updateDots = (index, dotContainerId, event = null) => {
    const dots = getDots(dotContainerId)
    const galleryQuery = ".productsHorizontalScrollContainer."+props.id
    const galleryContainer = document.querySelector(galleryQuery)

    let invalidInput = false

    if(event){
        if(event.srcElement.classList.contains("on"))
            invalidInput = true
    }

    if(!invalidInput){
        for(let i = 0; i < dots.length; i++){
            dots[i].classList.remove("on")
        }
    
        if(index <= currentLocation.value){
            onLeft.value = true
            if(index + amount.value > dots.length - 1)
            index = dots.length - amount.value
            for(let i = index; i < index + amount.value; i++){
                dots[i].classList.add("on")
            }
        }else{
            onLeft.value = false
            if(index - amount.value < 0)
            index = amount.value
            for(let i = index; i > index - amount.value; i--){
                dots[i].classList.add("on")
            }
        }
    }

    if(dots[productsShortList.length - 1].classList.contains("on")){
        galleryContainer.classList.add("hideGradient")
    }
    else{
        if(galleryContainer.classList.contains("hideGradient") )
            galleryContainer.classList.remove("hideGradient")
    }
}

// Handles initial load and when window is resized
onMounted(() => {
  getScreenWidth()
  amount.value = getAmountOfItemsOnScreen()
  updateDots(0, 'productsDots' + props.id)

  window.addEventListener("resize", () => {
    getScreenWidth()
    amount.value = getAmountOfItemsOnScreen()
    updateDots(currentLocation.value, 'productsDots' + props.id)
  })
})

const toggleShowAll = () => {
    showAll.value = !showAll.value
    currentLocation.value = 0
    if(showAll.value == false){
        setTimeout(() => {
            getScreenWidth()
            amount.value = getAmountOfItemsOnScreen()
            updateDots(currentLocation.value, 'productsDots' + props.id)
        }, 0);
    }
}

</script>

<template>
  <section class="wrapper">
    <h4 class="border b">
      {{ props.title }}!
    </h4>
    <div class="productsHorizontalScrollContainer" :class="props.id" v-if="!showAll">
      <div>
        <template v-for="(product, index) in productsShortList" :key="index">
          <productCard :product="product" :id="'prod' + props.id + index" :showCategory="props.showCategory" />
        </template>
      </div>
    </div>
    <div class="dotContainer" :id="'productsDots' + props.id" v-if="!showAll">
        <div @click="scrollToId(onLeft ?  currentLocation - 1 : currentLocation - amount, 'prod' + props.id, 'productsDots' + props.id, null)" class="chevron">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
        </div>
      <template v-for="(product, index) in productsShortList" :key="index">
        <div @click="event => {scrollToId(index, 'prod' + props.id, 'productsDots' + props.id, event)}" class="dot" :class="'dot' + props.id">
        </div>
      </template>
        <div @click="scrollToId(onLeft ? currentLocation + amount : currentLocation + 1, 'prod' + props.id, 'productsDots' + props.id, null)" class="chevron">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
        </div>
    </div>
    <div class="showAllList" v-if="showAll">
      <div>
        <template v-for="(product, index) in products" :key="index">
            <productCard :product="product" :id="'prod' + props.id + index" :showCategory="props.showCategory" />
        </template>
      </div>
    </div>
    <div class="viewAll">
        <p class="linkBox" @click="toggleShowAll">
            Show {{showAll ? "Less" : "All"}}
        </p>
    </div>
  </section>
</template>

<style lang="sass" scoped>

h4
    user-select: none

.productsHorizontalScrollContainer
    position: relative
    >div
        overflow-x: hidden
        overflow-y: hidden
        white-space: nowrap
        padding: var(--sameContextGap)
        padding-left: 0
        .card
            margin-right: var(--sameContextGap)
    &::after
        top: 0
        left: 0
        content: ""
        display: block
        width: 100%
        height: 100%
        position: absolute
        background: linear-gradient(to right, var(--neutral), transparent 2px, transparent calc(100% - 50px), var(--neutral)  100%)
        pointer-events: none
        opacity: 1
        transition: 500ms
    &.hideGradient
        &::after
            opacity: 0
.dotContainer
    display: flex
    justify-content: center
    align-items: center
    flex-wrap: wrap
    .dot
        width: var(--sameContextGap)
        padding: calc(var(--sameContextGap) / 2) calc(var(--sameContextGap) / 4)
        cursor: pointer
        &:hover
            &::after
                background: var(--prim)
        &.on
            &::after
                background: var(--prim)
        &::after
            content: ""
            display: block
            width: calc(var(--sameContextGap) / 2)
            height: calc(var(--sameContextGap) / 2)
            border-radius: 50%
            background: var(--second)
            transition: var(--quickTransition)

.viewAll
    display: flex
    justify-content: center
    margin: var(--differentContextGap) 0
    .linkBox
        max-width: 250px

.showAllList
    .card
        margin-bottom: var(--sameContextGap)

.chevron
    width: calc(.75em + (var(--sameContextGap) * 2))
    display: flex
    align-items: center
    padding: 0 var(--sameContextGap)
    cursor: pointer
    img
        fill: purple
        color: orange
        user-select: none

div:hover
    >svg
        fill: var(--prim)
svg
    transition: var(--quickTransition)
    fill: var(--second)

</style>