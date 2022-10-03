<template>
    <div :class="`${isActive ? 'menu-is-open': ''}`">
        <div :class="`${isActive ? 'menu-is-active': ''}`">
            <ul :class="`${isActive ? 'menu-links-are-active': 'menu-links-are-not-active'}`">
                <SocialLinks id="links-svg" />
                <li>
                    <a href="#contact">
                        <p class="uppercase">Contact</p>
                    </a>
                </li>
                <li>
                    <Button id="button" msg="Find your home" />
                </li>
            </ul>
        </div>
        <button @click="isActive = !isActive" :class="`hamburger hamburger--collapse ${isActive ? 'is-active': ''}`"
            type="button" aria-label="Menu">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    </div>
</template>

<script>
import SocialLinks from '@/components/SocialLinks.vue';
import Button from '@/components/Button.vue'

export default {
    name: 'Hamburgers',
    data() {
        return {
            isActive: false,
        }
    },
    components: {
        SocialLinks,
        Button
    }
}
</script>

<style lang="scss" scoped>
@import "hamburgers/_sass/hamburgers/hamburgers.scss";

.menu-is-active {
    background-color: $baseGreen;
    position: absolute;
    border-radius: 4px;

    top: -40px;
    right: -200px;
    width: 200px;
    height: 300px;
    z-index: 50;
}

.menu-is-open {
    position: fixed;
    right: 200px !important;
    animation: menu-open 1s;
}


@keyframes menu-open {
    0% {
        transform: translateX(200px);
    }

    100% {
        transform: translateX(0);
    }
}

.menu-links-are-active {
    display: block;
    position: absolute;
    top: 50px;
    bottom: 0;
    right: 10px;
    left: 10px;

    #links-svg {
        position: absolute;
        bottom: 70px;
        left: -10px;
    }

    #button {
        background-color: $baseWhite;
        color: $baseGreen;
        position: absolute;
        bottom: 150px;
        left: 10px;
        right: 10px;
        font-size: 12px;
        padding: 3px;
        text-align: center;
    }

}

.menu-links-are-not-active {
    display: none;
}
</style>