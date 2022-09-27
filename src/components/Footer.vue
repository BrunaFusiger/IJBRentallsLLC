<template>
    <div id="footer">
        <img src="@/assets/logo.png" alt="IJB Rentals LLC Brand" @click="backToTop">
        <p>&reg; 2022 IJB Rentals LLC</p>
        <SocialLinks id="social-links" />

        <a href="https://www.linkedin.com/in/brunafusiger/" target="_blank">Who made this website?</a>
    </div>
</template>

<script>
import SocialLinks from './SocialLinks.vue';

export default {
    components: { SocialLinks },
    methods: {
        backToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}
</script>

<style lang="scss" scoped>
    #footer {
        background-color: $baseGreen;
        text-align: center;
        padding-block: 2rem;
        margin-top: 3rem;

        img {
            width: 70px;
            margin-bottom: 2rem;
            cursor: pointer;
        }

        p {
            font-size: 14px;
            margin-bottom: 2rem;
        }


        a {
            font-size: 12px; 
            transition: .5s;

            &:hover {
                color: rgb(213, 228, 214);
            }
        }
    }
</style>