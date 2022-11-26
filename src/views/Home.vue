<template>
  <div class="home">
    <div id="banner" class="banner-img background">
      <SideBar id="menu" />

      <Nav />
      <section class="banner-text general-margin">
        <transition
          v-show="windowHeight"
          appear
          appear-active-class="fade-enter-active"
          mode="out-in"
        >
          <h1 class="title title-local">
            THE BEST HOMES AND APARTAMENTS IN PITTSBURGH FOR RENT
          </h1>
        </transition>
        <div class="animtionY">
          <Button class="button-local" msg="See" />
        </div>
      </section>

      <Arrow @click="scrollPage" />
    </div>

    <div class="advantages general-margin">
      <div class="advantages-aligment">
        <section class="advantages-carousel">
          <carousel
            :slides="slides"
            :interval="3000"
            controls
            indicators
          ></carousel>
        </section>
        <section
          class="advantages-text advantages-text-transition"
          v-show="windowHeightAdvantages"
        >
          <h2>
            <span>ADVANTAGES</span> OF <br />
            RENTING A HOUSE WITH
          </h2>
          <h1 class="title">IJB</h1>
          <Button class="button-advantages" msg="Rent now" />
        </section>
      </div>
    </div>

    <div id="feedbacks">
      <section id="feedbacks-text">
        <transition
          v-show="windowHeightFaq"
          appear
          appear-active-class="fade-enter-active"
          mode="out-in"
        >
          <h2>WHAT IS IT LIKE TO RENT AND LIVE IN OUR APARTAMENTS?</h2>
        </transition>
        <p>
          We know how important a cozy environment is to be with the family or
          to rest after a long day at work. And that's why we always seek the
          best in our apartments and services. And if you have a problem, we
          will be available to help you solve it.
        </p>

        <div id="feedbacks-text-people">
          <img
            src="@/assets/images/SimoneFusiger.jpeg"
            alt="Simone Fusiger's photo"
          />
          <p>Simone Fusiger</p>
        </div>
      </section>
    </div>

    <div id="contact">
      <h2>CONTACT</h2>
      <ul id="contact-list">
        <li>
          <a
            href="https://www.google.com.br/maps/place/7103+Harrison+Ave,+Pittsburgh,+PA+15218,+EUA/@40.4221128,-79.8999213,17z/data=!3m1!4b1!4m5!3m4!1s0x8834ee133adab909:0x2741760c0215915c!8m2!3d40.4221087!4d-79.8977326"
            target="_blank"
          >
            <img src="@/assets/images/place.svg" alt="map icon" />
            7103 Harrison Ave., Pittsburgh PA 15218
          </a>
        </li>
        <li>
          <a
            href="tel:+14127153768"
            @click="
              ga('send', 'event', {
                eventCategory: 'Contact',
                eventAction: 'Call',
                eventLabel: 'Mobile Button',
              })
            "
            target="_blank"
          >
            <img src="@/assets/images/phone.svg" alt="phone icon" />
            +1 (412) 715-3768
          </a>
        </li>
        <li>
          <a href="mailto:ijbrentalsllc@gmail.com" target="_blank">
            <img src="@/assets/images/mail.svg" alt="mail icon" />
            ijbrentalsllc@gmail.com
          </a>
        </li>
      </ul>

      <SocialLinks class="social-links green" />
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
import SideBar from "@/components/SideBar.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Button,
    Carousel,
    Arrow,
    SocialLinks,
    Footer,
    SideBar,
  },
  data() {
    return {
      slides: [
        {
          image: "/images/advantages/family.webp",
          message: "Ease and comfort for you and your family",
        },
        {
          image: "/images/advantages/house.webp",
          message: "Big houses in perfect condition",
        },
        {
          image: "/images/advantages/garden.webp",
          message: "Beautiful, well-kept gardens",
        },
      ],
      windowHeight: false,
      windowHeightFaq: false,
      windowHeightAdvantages: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.handleScroll);
    }),
      this.$nextTick(() => {
        window.addEventListener("scroll", this.handleScrollTransitionRight);
      }),
      (this.windowHeight = true);
  },

  methods: {
    scrollPage() {
      window.scrollTo({ top: 650, behavior: "smooth" });
    },

    handleScroll() {
      const currentHeight = window.scrollY;

      if (currentHeight <= 500) {
        this.windowHeight = true;
      } else if (currentHeight >= 800) {
        this.windowHeightFaq = true;
      }
      return;
    },

    handleScrollTransitionRight() {
      const currentHeightToTransition = window.scrollY;

      if (currentHeightToTransition > 200) {
        this.windowHeightAdvantages = true;
      } else {
        // this.windowHeightAdvantages = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  #banner {
    @include heightPage;
    z-index: 100;
    box-shadow: 0 0 10px 4px $baseBlack;

    @include responsiveHalfMobile {
      height: 110vh;
    }

    #menu {
      @include responsiveHalf {
        display: block;
      }

      display: none;
      position: fixed;
      right: 0px;
      top: 100px;
      background-color: $baseGreen;
      border-radius: 50px 0 0 50px;
      z-index: 100;
    }
  }

  .banner-img {
    background-image: linear-gradient(
        (180deg, rgba(37, 36, 36, 0.7) 5%, transparent)
      ),
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

    @include responsiveHalf {
      margin-inline: auto;
      text-align: center;
    }

    @media (min-width: 1300px) {
      margin-top: 7rem;
    }
  }

  .fade-enter-active {
    animation: go 2s;
  }

  @keyframes go {
    from {
      transform: translateX(-100px);
    }
  }

  .advantages-text-transition {
    animation: goRight 2s;
  }

  @keyframes goRight {
    from {
      transform: translateX(100px);
    }
  }

  .title-local {
    text-align: start;
    font-size: 2rem;
    color: $baseWhite;
    font-weight: 400;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

    background: radial-gradient(
      closest-side at 50%,
      rgba(0, 0, 0, 0.2) 30%,
      rgba(0, 0, 0, 0.2) 60%,
      rgba(0, 0, 0, 0.2) 75%,
      transparent
    );

    padding: 1.5rem 0;

    margin-bottom: 2rem;

    @include responsiveHalf {
      text-align: center;
      font-size: 1.5rem;
    }
  }

  .advantages {
    position: relative;
    max-width: 100%;

    @media (min-width: 1544px) {
      width: 71vw;
      margin-inline: auto;
    }

    .general-margin {
      @include responsiveHalf {
        margin-inline: none;
      }
    }

    &-aligment {
      position: relative;
      margin-block: 7rem;
      display: flex;
      justify-content: space-between;

      @include responsiveHalf {
        flex-direction: column;
      }

      .advantages-text {
        text-align: end;

        @include responsiveHalf {
          text-align: center;
          margin-block: -2rem 3rem;
        }

        span {
          background-color: $baseGreen;
          padding: 0.3rem;
          font-weight: 400;
          font-size: 1.5rem;
          letter-spacing: 0.2em;

          @include responsiveHalf {
            font-size: 1.2rem;
          }
        }

        h1 {
          font-size: 5rem;
          font-weight: 400;
          margin-block: 2rem;

          @include responsiveHalf {
            font-size: 3rem;
            margin-block: 1.5rem;
          }
        }
      }
    }

    .button-advantages {
      padding: 0.5rem 2rem;

      &:hover {
        border: 1px solid $baseGreen;
      }
    }

    &-carousel {
      width: 500px;
      margin-inline: auto;

      @include responsive {
        width: 50%;
      }

      @include responsiveHalf {
        width: 100%;
      }

      @media (min-width: 1300px) {
        margin-inline: 0;
      }
    }
  }

  #feedbacks {
    background-image: url("@/assets/images/texture.svg");
    background-color: #e0edea;

    background-size: contain;

    &-text {
      text-align: center;
      width: 50%;
      margin-inline: auto;
      padding-block: 3rem;

      @include responsiveHalf {
        width: 80%;
      }

      h2,
      p {
        color: $baseBlack;
      }

      h2 {
        line-height: 3rem;

        @include responsiveHalf {
          line-height: 2rem;
        }
      }

      p {
        font-size: 16px;
        line-height: 30px;
        letter-spacing: 0.4px;
        margin-top: 2rem;

        @include responsiveHalf {
          font-size: 14px;
        }
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

      @media (min-width: 1300px) {
        width: 30%;
      }

      @include responsiveMobile {
        margin-inline: 0;
      }

      li {
        a {
          color: #000;
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }

      @include responsiveHalfMobile {
        width: 60%;
      }

      li {
        margin-bottom: 2rem;
        cursor: default;
        display: flex;
        gap: 1rem;
        align-items: center;

        @include responsiveHalfMobile {
          &:last-child {
            font-size: 0.9rem;
          }
        }

        img {
          width: 25px;
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .advantages {
    &-carousel {
      order: 2;
    }

    &-text {
      order: 1;
    }
  }
}
</style>
