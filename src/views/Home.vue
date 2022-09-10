<template>
  <div class="home">
    <div id="banner" class="banner-img background">
      <Nav />
      <section class="banner-text general-margin">
        <h1 class="title title-local">THE BEST HOMES AND APARTAMENTS IN PITTSBURGH FOR RENT </h1>
        <div class="animtionY">
          <Button class="button-local" msg="See" />
        </div>
      </section>

      <Arrow />
    </div>

    <div class="advantages general-margin">
      <div class="advantages-aligment">

        <section class="advantages-carousel">
          <carousel :slides="slides" :interval="3000" controls indicators></carousel>
        </section>

        <section class="advantages-text">
          <h2><span>ADVANTAGES</span> OF <br> RENTING A HOUSE WITH</h2>
          <h1 class="title">IJB</h1>
          <Button class="button-advantages" msg="Rent now" />
        </section>

      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Button from "@/components/Button.vue";
import Carousel from "@/components/Carousel/Carousel.vue";
import Arrow from "@/components/Arrow.vue";

export default {
  name: 'Home',
  components: {
    Nav,
    Button,
    Carousel,
    Arrow
  },
  data() {
    return {
      // slides: [
      //   {image: "", message: ""},
      //   {image: "", message: ""},
      //   {image: "", message: ""},
      // ],
      slides: [
        "/images/advantages/family.webp",
        "/images/advantages/house.webp",
        "/images/advantages/garden.webp"
      ]
    }
  }

}
</script>

<style scoped lang="scss">
.home {
  #banner {
    @include heightPage;
    z-index: 100;
    box-shadow: 0 0 10px 4px $baseBlack;
  }

  .banner-img {
    background-image:
      linear-gradient((180deg, rgba(37, 36, 36, 0.7) 5%, transparent)),
      url(@/assets/images/pexels-binyamin-mellish-1396122.webp);
    overflow-y: hidden;
  }

  .background {
    background-size: cover;
    background-position-y: center;
    background-position-x: center;
    background-repeat: no-repeat;
  }

  .banner-text {
    max-width: 60%;
    height: 40vh;
    margin-top: 3rem;
    box-sizing: border-box;
  }

  .title-local {
    text-align: start;
    font-size: 2rem;
    color: $baseWhite;
    font-weight: 400;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

    background: radial-gradient(closest-side at 50%, rgba(0, 0, 0, .2) 30%, rgba(0, 0, 0, .2) 60%, rgba(0, 0, 0, .2) 75%, transparent);

    padding: 1.5rem 0;

    margin-bottom: 2rem;
  }

  .advantages {
    @include heightPage;

    &-aligment {
      height: 60%;
      position: relative;
      transform: translateY(8rem);
      display: flex;
      justify-content: space-between;

      .advantages-text {
        text-align: end;

        span {
          background-color: $baseGreen;
          padding: .3rem;
          font-weight: 400;
          font-size: 1.5rem;
          letter-spacing: 0.2em;
        }

        h1 {
          font-size: 5rem;
          font-weight: 400;
          margin-block: 2rem;
        }
      }
    }

    .button-advantages {
      padding: .5rem 2rem;

      &:hover {
        border: 1px solid $baseGreen;
      }
    }

    &-carousel {
      width: 50%;

    }
  }
}
</style>
