<template>
    <router-link to="/apartaments" class="button uppercase">{{  msg  }}</router-link>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Button',
    props: {
        msg: String
    },
})
</script>

<style scoped lang="scss">
.button {
    background-color: $baseGreen;
    opacity: 0.8;
    border-radius: 20px;

    padding: .5rem 1rem;

    color: #fff;
    font-weight: 400;

    transition: .5s;

    &:hover {
        background-color: rgba($color: #fff, $alpha: .8);
        border: 1px solid $baseGreen;
        color: $baseGreen;
        transform: scale(1.05);
    }
}
</style>
