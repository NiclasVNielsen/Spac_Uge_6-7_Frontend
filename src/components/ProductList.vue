<script setup>
import productCard from '@/components/ProductCard.vue'
import { onMounted, ref } from 'vue'

const props = defineProps(['products', 'title', 'id'])

const productsShortList = props.products.slice(0, 10)


const screenWidth = ref()
const currentLocation = ref(0)
const amount = ref(3)


// Gemini made this and i am very happy, i don't understand anything but that is fine
function horizontalScrollIntoView(element, options = {}) {
  if (!element) {
    return;
  }

  const rect = element.getBoundingClientRect();
  const parentRect = element.parentElement.getBoundingClientRect();

  const isCompletelyVisibleHorizontally =
    rect.left >= parentRect.left && rect.right <= parentRect.right;

  if (!isCompletelyVisibleHorizontally) {
    const scrollLeft = rect.left + element.parentElement.scrollLeft - parentRect.left;
    element.parentElement.scrollTo({
      left: scrollLeft,
      behavior: options.behavior || 'auto', // Keep the original behavior or default to 'auto'
    });
  }
}


const scrollToId = (id, item, dotContainerId, event) => {
  horizontalScrollIntoView(document.querySelector(`#${item}${id}`))
  updateDots(id, dotContainerId, event)
  currentLocation.value = id
}

const getScreenWidth = () => {
  screenWidth.value = document.querySelector(".productsHorizontalScrollContainer > div").offsetWidth - 32
}

const getAmountOfItemsOnScreen = () => {
  const AmountOfItemsOnScreen = Math.floor(screenWidth.value / 300)
  return AmountOfItemsOnScreen
}

const getDots = (id) => {
  return document.querySelectorAll(`#${id} .dot`)
}

const updateDots = (index, dotContainerId, event = null) => {
    const dots = getDots(dotContainerId)

    let invalidInput = false

    if(event){
        if(event.srcElement.classList.contains("on"))
            invalidInput = true
    }

    if(!invalidInput){
        for(let i = 0; i < dots.length; i++){
            dots[i].classList.remove("on")
        }
    
        if(index + amount.value > dots.length - 1)
        index = dots.length - amount.value
        for(let i = index; i < index + amount.value; i++){
            dots[i].classList.add("on")
        }
    }
}

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

</script>

<template>
  <section class="wrapper">
    <h4 class="border b">
      {{ props.title }}!
    </h4>
    <div class="productsHorizontalScrollContainer">
      <div>
        <template v-for="(product, index) in productsShortList" :key="index">
          <productCard :product="product" :id="'prod' + props.id + index" />
        </template>
      </div>
    </div>
    <div class="dotContainer" :id="'productsDots' + props.id">
      <template v-for="(product, index) in productsShortList" :key="index">
        <div @click="function (event) {scrollToId(index, 'prod' + props.id, 'productsDots' + props.id, event)}" class="dot" :class="'dot' + props.id">
        </div>
      </template>
    </div>
  </section>
</template>

<style lang="sass">

.productsHorizontalScrollContainer
    position: relative
    >div
        overflow-x: hidden
        overflow-y: hidden
        white-space: nowrap
        padding: var(--sameContextGap)
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
.dotContainer
    display: flex
    justify-content: center
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

</style>