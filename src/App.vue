<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap');

* {
  font-family: 'Open Sans';
  letter-spacing: 0.05em;
  font-size: 1rem;
  margin: 0;

  a,
  p {
    text-decoration: none;
    color: #fff;
  }

  ul {
    display: flex;
    gap: 2rem;

    li {
      list-style: none;
    }
  }

  .uppercase {
    text-transform: uppercase;
    letter-spacing: .1rem;
  }

  //general aligment|
  .general-margin {
    margin-inline: 5rem;
  }

  .title {
    font-family: 'Aboreto', cursive;
  }

  //animation Y
  .animtionY {
    animation: movingY .8s ease-in-out 0ms infinite alternate-reverse;
  }

  @keyframes movingY {
    0% {

      transform: translateY(5%);
    }

    50% {
      opacity: 1;
    }

    100% {

      transform: translateY(-5%);
    }
  }

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 4rem;
    letter-spacing: 0.2em;

    color: $baseBlack;
  }

  h1, h2, p {
    cursor: default;
  }

  #social-links {
      align-items: center;
      width: 15%;
      margin-inline: auto;
      margin-block:  1rem;
    }
}
</style>
