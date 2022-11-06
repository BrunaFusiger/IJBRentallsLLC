<template>
    <div :class="`menu-transition ${isActive ? 'menu-is-open': ''}`">

        <Hamburgers @click="isActive = !isActive"
            :class="`hamburger hamburger--collapse ${isActive ? 'is-active': ''}`" />

        <div class="menu-style">
            <ul class="menu-links-style">
                <SocialLinks id="links-svg" />
                <li>
                    <a href="#contact">
                        <p class="uppercase pointer">Contact</p>
                    </a>
                </li>
                <li>
                    <Button id="button" msg="Find your home" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import SocialLinks from '@/components/SocialLinks.vue';
import Button from '@/components/Button.vue'
import Hamburgers from './Hamburgers.vue';

export default {
    name: 'SideBar',
    data() {
        return {
            isActive: false,
        }
    },
    components: {
        SocialLinks,
        Button,
        Hamburgers
    }
}
</script>

<style lang="scss" scoped>
.menu-transition {
    transition: 1s;
}

.menu-is-open {
    right: 200px !important;
}

.menu-style {
    background-color: $baseGreen;
    position: absolute;
    border-radius: 4px;
    top: -40px;
    width: 200px;
    height: 300px;
    right: -200px;
}

.menu-links-style {
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


</style>