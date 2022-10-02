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

      <Arrow @click="scrollPage" />
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

    <div id="feedbacks">
      <section id="feedbacks-text">
        <h2>WHAT IS IT LIKE TO RENT AND LIVE IN OUR APARTAMENTS?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maecenas sapien condimentum nam. Ac lorem diam
          id cursus feugiat. NLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maecenas sapien condimentum
          nam. Ac lorem diam id cursus feugiat. </p>

        <div id="feedbacks-text-people">
          <img src="https://picsum.photos/200/300" alt="Person's photo">
          <p>Simone Fusiger</p>
        </div>
      </section>
    </div>

    <div id="contact">
      <h2>CONTACT</h2>
      <ul id="contact-list">
        <li>
          <img src="@/assets/images/place.svg" alt="map icon">
          7103 Harrison Ave., Pittsburgh PA 15218
        </li>
        <li>
          <img src="@/assets/images/phone.svg" alt="phone icon">
          +1 (412) 715-3768
        </li>
        <li>
          <img src="@/assets/images/mail.svg" alt="mail icon">
          ijbrentalsllc@gmail.com
        </li>
      </ul>

      <SocialLinks id="social-links" class="green" />
    </div>

    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Button from "@/components/Button.vue";
import Carousel from "@/components/Carousel/Carousel.vue";
import Arrow from "@/components/Arrow.vue";
import SocialLinks from "@/components/SocialLinks.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: {
    Nav,
    Button,
    Carousel,
    Arrow,
    SocialLinks,
    Footer
},
  data() {
    return {
      slides: [
        { image: "/images/advantages/family.webp", message: "Ease and comfort for you and your family" },
        { image: "/images/advantages/house.webp", message: "Big houses in perfect condition" },
        { image: "/images/advantages/garden.webp", message: "Beautiful, well-kept gardens" },
      ],
    }
  },
  methods: {
    scrollPage() {
      window.scrollTo({ top: 610, behavior: 'smooth' });
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
    position: relative;
    max-width: 100%;

    &-aligment {
      position: relative;
      margin-block: 7rem;
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
      width: 500px;

      @include responsive {
            width: 50%;
        }

    }
  }

  #feedbacks {
    background-image: url("@/assets/images/texture.svg");
    background-color: #E0EDEA;

    background-size: contain;
    background-repeat: no-repeat;

    &-text {
      text-align: center;
      width: 50%;
      margin-inline: auto;
      padding-block: 3rem;

      h2,
      p {
        color: $baseBlack;
      }

      h2 {
        line-height: 3rem;
      }

      p {
        font-size: 16px;
        line-height: 30px;
        letter-spacing: 0.4px;
        margin-top: 2rem;
      }

      &-people {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        img {
          border-radius: 50%;
          width: 50px;
          height: 50px;
        }

        p {
          padding-top: 0;
          margin-top: 0;
        }
      }
    }
  }

  #contact {
    text-align: center;
    margin-top: 3rem;

    &-list {
      display: block;
      text-align: start;
      width: 40%;
      margin: 1rem auto;

      li {
        margin-bottom: 2rem;
        cursor: default;
        display: flex;
        gap: 1rem;
        align-items: center;

        img {
          width: 25px;
        }
      }
    }
  }
}

</style>
