<template>
        <button type="button" aria-label="Menu" class="pointer">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
</template>

<script>

export default {
    name: 'Hamburgers',
    data() {
        return {
            isActive: false,
        }
    }
}
</script>

<style lang="scss" scoped>
@import "hamburgers/_sass/hamburgers/hamburgers.scss";
</style>