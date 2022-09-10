<template>
    <button class="carousel-control left" @click="$emit('prev')">
        <svg width="40" height="40" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M63.1646 63.1618C77.6118 48.7133 77.6118 25.2849 63.1646 10.8364C48.7137 -3.61213 25.2879 -3.61213 10.8382 10.8364C-3.61273 25.2849 -3.61273 48.7133 10.8382 63.1618C25.2878 77.6127 48.7137 77.6127 63.1646 63.1618ZM18.4996 36.9991L43.1662 12.3324L43.1662 61.6657L18.4996 36.9991Z"
                fill="#23A384" />
        </svg>
    </button>
    <button class="carousel-control right" @click="$emit('next')">
        <svg width="40" height="40" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.8354 10.8382C-3.6118 25.2867 -3.6118 48.7151 10.8354 63.1636C25.2863 77.6121 48.7121 77.6121 63.1618 63.1636C77.6127 48.7151 77.6127 25.2867 63.1618 10.8382C48.7121 -3.61274 25.2863 -3.61274 10.8354 10.8382ZM55.5004 37.0009L30.8338 61.6676L30.8338 12.3343L55.5004 37.0009Z"
                fill="#23A384" />
        </svg>

    </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    emits: ['prev', 'next']
})
</script>

<style scoped lang="scss">
.carousel-control {
    display: inline-block;
    position: absolute;
    background-color: transparent;
    border: none;
    top: calc(50% - 20px);
    cursor: pointer;
}

.left {
    left: 0;
}

.right {
    right: 0;
}
</style>