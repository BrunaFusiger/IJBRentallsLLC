<template>
    <div class="message">
        <p> {{ message }} </p>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "CarouselMessage",
    props: {
        message: String
    }
})
</script>


<style lang="scss" scoped>
.message {
    position: absolute;
    transform: translateX(-50%);
    top: 75%;
    left: 50%;
    z-index: 3;

    p {
        background-color: rgba($color: #fff, $alpha: .8);
        color: $baseBlack;
        padding: .5rem 1rem;
        font-size: 12px;
        text-align: center;
    }
}
</style>