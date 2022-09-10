<template>
    <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Arrow"
})
</script>

<style scoped lang="scss">
.arrow {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: rotate(360deg);
    cursor: pointer;

    span {
        display: block;
        width: 2rem;
        height: 2rem;
        border-bottom: 5px solid $baseWhite;
        border-right: 5px solid $baseWhite;
        transform: translate(-45deg);
        margin: -10px;
        animation: animate 2s infinite;

        &:nth-child(2) {
            animation-delay: -0.2s;
        }

        &:nth-child(3) {
            animation-delay: -0.4s;
        }

        @keyframes animate {
            0% {
                opacity: 0;
                transform: rotate(45deg) translate(-20px, -20px);
            }

            50% {
                opacity: 1;
            }

            100% {
                opacity: 0;
                transform: rotate(45deg) translate(20px, 20px);
            }
        }
    }
}
</style>
