<template>
        <button type="button" aria-label="Menu" class="pointer" id="hamburger-wrapper">
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

#hamburger-wrapper {
    margin-right: -2px;
}
.hamburger-inner {
    color: #fff;
    width: 44px;
    height: 2px;
    background-color: #fff;
}
</style>

