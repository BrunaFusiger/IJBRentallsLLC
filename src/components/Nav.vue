<template>
  <nav class="nav general-margin">
    <router-link to="/" class="nav-url">
      <img src="@/assets/logo.png" alt="alt" class="nav-url-logo">
    </router-link>

    <ul class="nav-links">
      <SocialLinks id="links-svg" />
      <li>
        <a @click="goToContactArea">
          <p class="uppercase pointer">Contact</p>
        </a>
      </li>
      <li>
        <Button msg="Find your home"  ref="bottom" />
      </li>
    </ul>
  </nav>
</template>

<script>
import Button from "./Button.vue";
import SocialLinks from './SocialLinks.vue';

export default {
  name: "Nav",
  components: {
    Button,
    SocialLinks,
},

methods: {
  goToContactArea() {
    window.scrollTo(({ top: document.getElementById("contact").offsetTop, behavior: 'smooth' }));
  }
}
}
</script>

<style scoped lang ="scss">
.nav {
  max-width: 100vw;
  max-height: 20vh;
  justify-content: space-between;
  position: relative;
  display: flex;
  margin-top: 1rem;

  &-url {
    @include responsiveHalf {
      margin-inline: auto;
      width: 95px;
    }

    &-logo {
      height: 100%;
      
      @include responsiveHalf {
        height: 70%;
      }
    }
  }

  &-links {
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;

    @include responsiveHalf {
      display: none;
    }

    li {
      a {
        p {
          transition: .5s;

          &:hover {
            color: $baseGreen;
          }
        }
      }
    }

    #links-svg {
      svg {
        &:hover {
          border-bottom: 3px solid $baseGreen;
        }
      }
    }
  }
}
</style>
