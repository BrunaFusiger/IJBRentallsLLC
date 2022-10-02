<template>
    <router-link to="/apartaments" class="button uppercase">{{ msg }}</router-link>
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

<style lang="scss">
.button {
    background-color: $baseGreen;
    opacity: 0.8;
    border-radius: 20px;

    box-sizing: border-box;
    padding: .5rem 1rem;

    color: #fff;
    font-weight: 400;

    transition: color .2s, background-color .3s;

    &:hover {
        background-color: rgba($color: #fff, $alpha: .8);
        color: $baseGreen;
    }

    &-local {
        padding: .5rem 4rem;
        border-radius: 15px;
    }

    @include responsive {
        font-size: 14px;
    }
}
</style>
