<template>
  <div class="carousel-indicators">
    <button
      class="carousel-indicator-item pointer"
      :class="{ active: currentIndex === index }"
      v-for="(item, index) in total"
      :key="index"
      @click="$emit('switch', index)"
    ></button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["switch"],
  props: ["total", "currentIndex"],
});
</script>

<style scoped lang="scss">
.carousel-indicators {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1.5em;
  z-index: 2;

  @include responsiveHalfMobile {
    bottom: 0.5rem;
  }

  @include responsiveMobile {
    bottom: 0rem;
  }
}

.carousel-indicator-item {
  width: 15px;
  height: 15px;
  border: none;
  background-color: #19493d;
  margin: 0.2em;
  opacity: 0.8;
  border-radius: 100%;
}

.active {
  background-color: #23a384;
}
</style>
