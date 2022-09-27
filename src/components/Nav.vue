<template>
  <nav class="nav general-margin">
    <router-link to="/" class="nav-url">
      <img src="@/assets/logo.png" alt="alt" class="nav-url-logo">
    </router-link>

    <ul class="nav-links">
      <SocialLinks id="links-svg"/>
      <li>
        <a href="#contact">
          <p class="uppercase">Contact</p>
        </a>
      </li>
      <li>
        <Button msg="Find your home" />
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
    SocialLinks
}
}
</script>

<style scoped lang ="scss">
.nav {
  max-width: 100vw;
  max-height: 20vh;
  position: relative;
  justify-content: space-between;
  display: flex;
  margin-top: 1rem;

  &-url {
    &-logo {
      height: 100%;
    }
  }

  &-links {
    align-items: center;

    li {
      a {
        p {
          transition: .5s;
          cursor: pointer;

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
