<template>
    <transition :name="transitionEffect">
        <div class="carousel-item" v-show="currentSlide === index" @mouseenter="$emit('mouseenter')" @mouseout="$emit('mouseout')">
            <img :src="slide" />
        </div>
    </transition>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    emits: ['mouseenter', 'mouseout'],
    props: ["slide", "currentSlide", "index", "direction"],
    computed: {
        transitionEffect() {
            return this.direction === "right" ? "slide-out" : "slide-in";
        }
    }
})
</script>

<style scoped lang="scss">

.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
    transition: all 1s ease-in-out;
}

.slide-in-enter-from {
   transform: translateX(-100%);
}

.slide-in-leave-to {
   transform: translateX(100%);
}

.slide-out-enter-from {
   transform: translateX(100%);
}

.slide-out-leave-to {
   transform: translateX(-100%);
}

.carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: absolute;
    }
}
</style>
