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
* {
  background-color: aquamarine;
  font-family: 'Open Sans';
  letter-spacing: 0.05em;
  font-size: 1rem;

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

  .general-margin {
    margin-inline: 5rem;
  }

  svg {
    path {
      &:hover {
        fill: $baseGreen;
      }
    }
  }
}
</style>
