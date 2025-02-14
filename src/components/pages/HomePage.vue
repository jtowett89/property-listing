<template>
  <section class="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>
            Buy, Rent or Sell Your
            <span class="accent-color">Real Estate</span>
            easily
          </h1>
          <p>
            Find your dream home with our real estate platform—browse listings,
            compare prices, and connect with trusted agents effortlessly.
          </p>
          <a href="#" @click="scrollToProperties" class="banner-btn"
            >Browse Properties</a
          >
        </div>
        <div class="col-md-6 banner-img">
          <img src="../../assets/banner-img.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section class="properties" id="properties">
    <div class="container">
      <h1>Property <span class="accent-color">Listings</span></h1>
      <p>Have a look at some of our property listings</p>
      <div class="row">
        <div v-if="loading">
          <h1 class="text-center fa-2x mt-5 mb-5">Loading Property...</h1>
        </div>
        <PropertyCard
          v-else
          v-for="(property, index) in activeProperties"
          :key="index"
          :property="property"
        />
      </div>
      <!-- <router-link class="banner-btn" to="/properties">
        View More Properties
      </router-link> -->
    </div>
  </section>
</template>

<script>
import { nextTick } from "vue";
import PropertyCard from "../PropertyCard.vue";

export default {
  props: {
    properties: Array,
    loading: Boolean
  },
  components: {
    PropertyCard
  },
  methods: {
    scrollToProperties(event) {
      event.preventDefault();
      nextTick(() => {
        const section = document.getElementById("properties");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  },
  mounted() {
    if (window.scrollY > 0) {
      nextTick(() => {
        const section = document.getElementById("properties");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  },
  computed: {
    activeProperties() {
      return this.properties.filter((property) => property.state === "active");
    }
  }
};
</script>

<style scoped>
/* Start banner section */
.banner {
  padding: 5em 0;
  padding-top: 8em;
  background-color: var(--color7);
  text-align: left;
}
.banner h1 {
  color: var(--color3);
  font-size: 4.5em;
  margin: 0.5em 0;
  font-weight: 700 !important;
}
.banner p {
  color: var(--color4);
  font-size: 1em;
  margin-bottom: 3em;
  font-weight: 500;
}
.banner-img img {
  width: 100%;
  border-radius: 1em;
}
.accent-bg {
  padding: 1em;
  background-color: var(--color5);
  color: var(--color1);
  border-radius: 2em;
  font-weight: 600 !important;
}
.banner .swiper-slide img {
  width: 100%;
}
.banner-btn {
  font-weight: 600 !important;
  padding: 1em 2em !important;
  color: var(--color2) !important;
  background-color: var(--color1) !important;
  transition: all 0.2s !important;
  font-size: 1em;
  border: 2px solid var(--color1) !important;
  letter-spacing: 1px;
  text-transform: capitalize;
  border-radius: 0.5em;
}
.banner-btn:hover,
.banner-btn:focus {
  color: var(--color1) !important;
  background-color: var(--color2) !important;
  border: 2px solid var(--color1) !important;
}
/* End banner section */

/* Start small desktop styles */
@media screen and (max-width: 1366px) {
  /* Start banner section small desktop */
  .banner {
    padding: 5em 0;
    padding-top: 8em;
  }
  .banner h1 {
    font-size: 3.5em;
  }
  .banner p {
    font-size: 0.9em;
  }
  .banner-btn {
    font-size: 0.9em;
  }
  /* End banner section small desktop */
}
/* Start tablet styles */
@media screen and (max-width: 1180px) {
  /* Start banner section tablet */
  .banner {
    padding: 5em 0;
    padding-top: 8em;
  }
  .banner h1 {
    font-size: 2.5em;
  }
  .banner p {
    font-size: 0.8em;
  }
  .banner-btn {
    font-size: 0.8em;
  }
  /* End banner section tablet */
}
/* Start mobile styles */
@media screen and (max-width: 600px) {
  /* Start banner section mobile */
  .banner {
    padding: 3em 0;
    padding-top: 6em;
    text-align: center;
  }
  .banner h1 {
    font-size: 2em;
  }
  .banner p {
    font-size: 0.8em;
  }
  .banner-btn {
    font-size: 0.8em;
    display: inline-block;
    margin-bottom: 3em;
  }
  /* End banner section mobile */
}
</style>
